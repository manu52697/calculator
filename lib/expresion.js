import {Operation} from './operation';

export default class Expresion {
	constructor(lhs, op, rhs){
		this.lhs = lhs;
		this.op = op instanceof Operation ? op : new Operation(op);
		this.rhs = rhs;
	}

	solve(){
		let currLHS = typeof this.lhs == 'number' ? this.lhs : this.lhs.solve();
		let currRHS = typeof this.rhs == 'number' ? this.rhs : this.rhs.solve();
		
		return this.op.calc(currLHS, currRHS);
	}

}

