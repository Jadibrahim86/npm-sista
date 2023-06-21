import {npmfoo} from 'npm-dependent-yad'

function npmConsoleLog() {
    return npmfoo()
}

console.log(npmConsoleLog);
