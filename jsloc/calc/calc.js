
function calc() {

    var first = document.getElementById("first").value;
    var second = document.getElementById("second").value;

    var result = parseInt(first) + parseInt(second);

    return document.getElementById('result').innerHTML = result;
}
