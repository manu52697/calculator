
export const binOpTable = new Map([
	['+', (x, y) => x + y ],
	['-', (x, y) => x - y ],
	['*', (x, y) => x * y ],
	['/', (x, y) => x / y ],
	['%', (x, y) => x % y],
	['^', (x, y) => Math.pow(x,y)],
]);

const binOpRank = new Map([
	['^', 0],
	['%', 0],
	['*', 1],
	['/', 1],
	['+', 2],
	['-']
])

export const unaryOpTable = new Map([
	['-', (x) => -x],
])

export class Operation{
	constructor(sym, isBin=true){
		this.rank = isBin ? binOpRank.get(sym): 0 ;
		this.sym = sym;
		let op = isBin ? binOpTable.get(sym) : unaryOpTable.get(sym);
		if(op == undefined){
			throw new Error('symbol is not a valid operation')
		}
		this.op = op;
	}

	calc(args){
		if(this.sym == '/' && args[1] == 0){
			throw new Error(`Can't divide by 0`);
		} 
		return this.op(...args);
	}

}
