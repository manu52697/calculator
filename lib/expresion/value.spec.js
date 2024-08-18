import  Value  from "./value";

describe('Value class', () => {
    test('From int', ()=> {
        expect(new Value(5).num).toBe(5);
        expect(new Value('5').num).toBe(5);  
        expect(new Value('5').solve()).toBe(5);
    })

    test('From float', ()=>{
        expect(new Value(5.5).num).toBe(5.5);
        expect(new Value('5.5').num).toBe(5.5);  
        expect(new Value('5.5').solve()).toBe(5.5);   
    })



    test('throws with invalid input', ()=> {
        expect(() => {
            new Value('abc')
        }).toThrow();
    })
});