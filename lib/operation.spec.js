import {Operation, opTable} from './operation.js';

describe('Operation class', () => {

	test('get sym', () => {
		expect(new Operation('+').sym).toEqual('+');
	});
	
});

describe('Operation sum', () => {
	test('sum positive integers', () => {
		const op = new Operation('+');
		expect(op.calc(2,2)).toEqual(4);
	})

	test('sum integers', () => {
		const op = new Operation('+');
		expect(op.calc(2,-3)).toEqual(-1);
	});

	test('sum floats', () => {
		const op = new Operation('+');
		expect(op.calc(2.5, 3.5)).toEqual(6.0);
	});
});
