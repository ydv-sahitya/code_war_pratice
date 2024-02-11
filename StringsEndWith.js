
// one solution
function solution(str, ending) {
    return str.endWith(ending);
}

// sencond solution
const solution = (str,ending) => str.endsWith(ending);


//  thrird one

function solution(str,ending){
    if (typeof(str) != "string" || typeof(ending) != "string")
        throw "wrong type";
    if (ending.length>str.length)
        return false;
    return str.substr(str.length-ending.length, ending.length) == ending;
}