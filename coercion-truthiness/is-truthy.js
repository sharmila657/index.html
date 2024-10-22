function isTruthy(name) {
        if (name === "sharmi") {
            return true;
        }
        else {
            if (name === false) {
                return 'The boolean value false is falsey';
            }
             else if (name === null) {
                return 'The null value is falsey';
            
            }
           else if (name === undefined) {
                return 'undefined is falsey';
            }
           else if (name === 0) {
                return 'The number 0 is falsey (the only falsey number)'
                ;
            }
           else if (name === '') {
                return 'The empty string is falsey (the only falsey string)';
            }
        }
    
    }
    // console.log(isTruthy(""));
    console.log(isTruthy("sharmi"));
    // console.log(isTruthy());

