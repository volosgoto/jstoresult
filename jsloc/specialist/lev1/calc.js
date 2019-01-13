function sum(a, b) { return a + b }
function sub(a, b) { return a - b }
function mult(a, b) { return a * b }
function div(a, b) { return a / b }

function calc(a, b, operator) {
    if ((operator == div) && (b == 0)) {
        return alert('Devision by zero');
    }
    return operator(a, b);
}

var res = calc(2, 3, function (a, b) {
   return a + b;
});

// var res = calc(20, 10, div);
alert(res);