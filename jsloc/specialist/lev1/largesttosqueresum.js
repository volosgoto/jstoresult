function largest(a, b) {
    if(a > b) {return a;}
    if (a == b) {return b}
    return b;
}

function sum(a, b) { return a + b; }

function sqrt(a) { return a * a; }

function largestToSquereSum(a, b, c) {
    let large1 = largest(a, b);
    let large2 = (large1 < c) ? c : largest(b, c);
        return sum(sqrt(large1), sqrt(large2));
}

alert (largestToSquereSum(5, 0, 3)); // 34
