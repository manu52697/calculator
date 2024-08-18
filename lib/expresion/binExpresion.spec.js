import BinExpresion from "./binExpresion.js";
import Value from "./value.js";

const value = (x) => new Value(x);

describe('Binary Expresion class', ()=> {
    test('both numbers expr', () => {
        const testExpr = new BinExpresion(value(4), '+', value(4));
        expect(testExpr.solve()).toEqual(8);
    });

    test('recursive simplification', () => {
        const v_4 = value(4);
        const childExpr = new BinExpresion( v_4 , '+', v_4);
        
        expect(()=> {
            childExpr.solve()
        }).not.toThrow();

        const v_0 = value(0);
        expect(new BinExpresion(childExpr, '+', v_0).solve())
        .toEqual(childExpr.solve());
        expect(new BinExpresion(v_0, '+', childExpr).solve())
        .toEqual(childExpr.solve());

        expect(new BinExpresion(v_4, '-', childExpr).solve())
        .toEqual(4 - childExpr.solve());


        const v_2 = value(2);
        const v_8 = value(v_4.num+v_4.num);
        expect(new BinExpresion(v_2, '^', childExpr).solve())
        .toEqual(Math.pow(v_2.num, v_8.num ));

        expect(new BinExpresion(
            childExpr.solve(), 
            '%', 
            childExpr).solve())
                .toEqual(0);
    });

});