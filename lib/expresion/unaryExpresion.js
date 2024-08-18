import { Operation } from "../operation";
import Expresion from "./expresion"

export default class UnaryExpresion extends Expresion {

    constructor(unaryOp, Expresion){
        super();
        this.op = new Operation(unaryOp, false);
        this.args = Expresion;
    }

    solve(){
        return this.op.calc(this.args.solve());
    }
}
parseInt()