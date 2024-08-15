
export const opTable = new Map([
	['+', (x, y) => x + y ],
	['-', (x, y) => x - y ],
	['*', (x, y) => x * y ],
	['/', (x, y) => x / y ],
	['%', (x, y) => x % y],
	['^', (x, y) => Math.pow(x,y)],
]);

export class Operation{
	constructor(sym){
		this.sym = sym;
		this.op = opTable.get(sym);
	}

	static getF(sym){
		return this.op;
	}

	calc(x, y){
		return this.op(x, y);
	}

}
