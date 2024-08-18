import Expresion from "./expresion";


export default class Value extends Expresion {

    constructor(num){
        super();
        if(typeof num === 'number'){
            this.num = num;
        }  else {
            this.num = Number(num);
        }
        if(this.num == null || Number.isNaN(this.num)){
            throw new Error('Invalid argument');
        }
    }

    solve(){
        return this.num;
    }
}