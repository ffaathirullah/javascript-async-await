/* styling */
require('styles/main.scss');
/* js */

import $, { data } from 'jquery';
import { log, logTitle } from 'logger';
import { resolve } from 'bluebird';

/* your imports */

logTitle('more_Generator');
/* coding examples */
// callback adalah function di dalam function

const getNumbers = function* (numbers){
    for (let i = 0; i <  numbers.length; i++) {
        yield numbers[i]; 
    }
}

const getNumberGen = getNumbers([1,2,3,4,5]);

const interval = setInterval(() => {
    const next = getNumberGen.next();
    if(next.done){
        log("this generator is done");
        clearInterval(interval);
    }else{
        const number = next.value;
        log(number);
    }
}, 1000)