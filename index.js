//add
function add(x, y) {
    return x+y ;
}

//subtract
function subtract(x, y) {
    return x-y ;
}

//multiply
function multiply(x, y) {
    return x *= y ;
}

//divide
function divide(x, y) {
    return x /= y ;
}

//increment
function increment(n) {
    return n+1;
}
console.log(increment(225));

//decrement
function decrement(n) {
    return n-1;
}
console.log(decrement(225));

//Integer
function makeInt(n) {
    return parseInt(n, 10);

}

//Preserve decimal
function preserveDecimal(n) {
    return parseFloat(n)
    
}