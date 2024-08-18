import {Operation} from '../operation';
import Expresion from './expresion';
import Value from './value.js';

export default class BinExpresion extends Expresion {
	constructor(Expresion1, binOp, Expresion2){
		super();
		this.binOp = new Operation(binOp);
		this.args = [Expresion1, Expresion2];
	}

	solve(){
		let args = this.args.map((expr) => expr instanceof Expresion ? expr.solve() : expr);
		return this.binOp.calc(args);
	}

}




