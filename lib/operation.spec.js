import {Operation, opTable} from './operation.js';

describe('Operation', () => {

	test('get sym', () => {
		expect(new Operation('+').sym).toEqual('+');
	});
	
});

describe('Op add', () => {
	test('positive integers', () => {
		const op = new Operation('+');
		expect(op.calc(2,2)).toEqual(4);
	})

	test('integers', () => {
		const op = new Operation('+');
		expect(op.calc(2,-3)).toEqual(-1);
	});

	test('floats', () => {
		const op = new Operation('+');
		expect(op.calc(2.5, 3.5)).toEqual(6.0);
	});
});

describe('Op minus', () => {
	test('positive integers', ()=> {
		const op = new Operation('-');
		expect(op.calc(2,2)).toEqual(0);
	});

	test('integers', ()=> {
		const op = new Operation('-');
		expect(op.calc(2,-2)).toEqual(4);
	});

	test('floats', () => {
		const op = new Operation('-');
		expect(op.calc(3,1.5)).toEqual(1.5);
	});
});

describe('Op times', () => {
	test('positive integers', ()=> {
		const op = new Operation('*');
		expect(op.calc(2,2)).toEqual(4);
	});

	test('integers', ()=> {
		const op = new Operation('*');
		expect(op.calc(2,-2)).toEqual(-4);
	});

	test('floats', () => {
		const op = new Operation('*');
		expect(op.calc(3,1.5)).toEqual(4.5);
	});
});

describe('Op div', () => {
	test('positive integers', ()=> {
		const op = new Operation('/');
		expect(op.calc(2,2)).toEqual(1);
	});

	test('integers', ()=> {
		const op = new Operation('/');
		expect(op.calc(2,-2)).toEqual(-1);
	});

	test('floats', () => {
		const op = new Operation('/');
		expect(op.calc(3,1.5)).toEqual(2.0);
	});

	test('div by 0 throws', () => {
		const op = new Operation('/');
		expect(op.calc).toThrow();
	});
});

describe('Op rem', () => {
	test('positive integers', ()=> {
		const op = new Operation('%');
		expect(op.calc(2,2)).toEqual(0);
	});

	test('integers', ()=> {
		const op = new Operation('%');
		expect(op.calc(2,-2)).toEqual(0);
		expect(op.calc(-2,2)).toEqual(-0);
	});

	test('floats', () => {
		const op = new Operation('%');
		expect(op.calc(3,1.5)).toEqual(0);
	});
});

describe('Op pow', () => {
	test('positive integers', ()=> {
		const op = new Operation('^');
		expect(op.calc(2,2)).toEqual(4);
	});

	test('integers', ()=> {
		const op = new Operation('^');
		expect(op.calc(2,-2)).toEqual(1/4);
		expect(op.calc(-2, 2)).toEqual(4);
	});

	test('floats', () => {
		const op = new Operation('^');
		expect(op.calc(3,1.5)).toBeCloseTo(5.2);
	});
});