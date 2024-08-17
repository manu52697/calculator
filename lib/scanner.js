
export class Scanner {

    static parentheses = { 
        start: '(',
        end: ')',
    };


    /* 
        WARNING => BLACK MAGIC AHEAD

    (?<=[chars]) => matches what's before anything inside the []
    | => or
    (?=[chars]) => matches what's after anything inside the []

    See: https://stackoverflow.com/a/17051751

    */
    static tokenDelimiter = /(?<=[%()*/+-])|(?=[%()*/+-])/g
    

    constructor(){
    }

    scan(str){
        str = this.rmWhiteSpace(str)
        str = this.changeBrackets(str);
        
        return str.split(Scanner.tokenDelimiter);
	}

    rmWhiteSpace(str){
        if(str.includes(' ')){
			str = str.replaceAll(' ', '');
		}
        return str;
    }

    changeBrackets(str){
        if(str.includes('[')){
            str = str.replaceAll('[', Scanner.parentheses.start);
            str = str.replaceAll(']', Scanner.parentheses.end);
        }

        if(str.includes('{')){
            str = str.replaceAll('{', Scanner.parentheses.start);
            str = str.replaceAll('}', Scanner.parentheses.end);
        }
        return str;
    }
}
