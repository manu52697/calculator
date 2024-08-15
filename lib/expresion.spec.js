import Expresion from "./expresion";

describe('Expresion class', ()=> {
    test('both numbers expr', () => {
        const testExpr = new Expresion(4, '+', 4);
        expect(testExpr.solve()).toEqual(8);
    });

    test('recursive simplification', () => {
        const childExpr = new Expresion( 4 , '+', 4);

        expect(new Expresion(childExpr, '+', 0).solve())
        .toEqual(childExpr.solve());
        expect(new Expresion(0, '+', childExpr).solve())
        .toEqual(childExpr.solve());

        expect(new Expresion(4, '-', childExpr).solve())
        .toEqual(4 - childExpr.solve());

        expect(new Expresion(2, '^', childExpr).solve())
        .toEqual(Math.pow(2, 8));

        expect(new Expresion(childExpr.solve(), '%', childExpr).solve())
        .toEqual(0);
    });

});