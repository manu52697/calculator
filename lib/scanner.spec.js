import { Scanner } from "./scanner";

describe('Scanner tests', () => {

    test('whitespace removal', ()=> {
        const testScanner = new Scanner();
        expect(testScanner.rmWhiteSpace('   ')).toEqual('');
        expect(testScanner.rmWhiteSpace(' a ')).toEqual('a');
        expect(testScanner.rmWhiteSpace(' a b cde fg h i')).toEqual('abcdefghi');
    });

    test('brackets replaced', ()=> {
        const testScanner = new Scanner();
        expect(testScanner.changeBrackets('[]')).toEqual('()');
        expect(testScanner.changeBrackets('[()]')).toEqual('(())');
        expect(testScanner.changeBrackets('[([()])]')).toEqual('(((())))');
    });

    test('scan ouputs array of tokens', ()=> {
        const testScanner = new Scanner();
        const test0 = testScanner.scan('1 + 1');
        // console.error(test0);

        expect(test0).toBeInstanceOf(Array);
        expect(test0).not.toHaveLength(0);
        expect(test0).toHaveLength(3);
        expect(test0).not.toEqual(expect.arrayContaining([' ']));

        const expr1 = '[(1 + 1) - 2] * 2';
        const test1 = testScanner.scan(expr1);

        expect(test1).toBeInstanceOf(Array);
        expect(test1).not.toHaveLength(0);
        // console.error(test1);
        // console.error(test1.length)
        expect(test1).toHaveLength(11);

        let part1 = testScanner.rmWhiteSpace(expr1);
        part1 = testScanner.changeBrackets(part1);
        // console.error(part1.length)
        expect(test1.join('')).toEqual(part1);
            expect(test1).toEqual(expect.arrayContaining(['(', '(', '1', '+', '1', ')', '-', '2', ')', '*', '2']));
        
        const expr2 = '2 * [ 2^2 / 2] + [4 / (1 % 3)]' ;
        const test2 = testScanner.scan(expr2);
        expect(test2).toHaveLength(19);
        expect(test2).toEqual(expect.arrayContaining(
            [
                '(', ')', 
                '2', '4', '1', '3',
                '*', '^', '/', '%', '+'
            ]));
    });

});