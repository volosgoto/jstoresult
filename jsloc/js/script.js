// let a = 10;
// alert (a);
//
//
// if (true) {
//     let a = 3;
//     alert(a);
// }



// var i =  1;
// var j=  1;

// var table = '<table border="1" width="30">';
//
// for (let i = 1; i < 10 ; i++) {
//     table += '<tr>';
//     for (let j = 1; j < 10 ; j++) {
//         table += '<td>';
//         table += i * j;
//         table += '</td>';
//     }
//     table += '</tr>';
// }
//
// var mytable = document.getElementById('color');
// mytable.innerHTML = mytable.innerHTML + table;



// function recursion(x) {
//     if (1 == x) {
//         return 1;
//     }
//     return x * recursion(x-1);
//
// }
// alert (recursion(4));


// var arr = [1,2,3,4,5];
//
//
// if (Array.isArray(arr)) {
//     alert('True');
// }

//

// // // Clock
// function displayTime() {
//     let time = new Date();
//     let p = document.getElementById('clock');
//     p.innerHTML = time.toLocaleTimeString();
//     setTimeout(displayTime, 1000);
// }
// window.onload = displayTime();

var obj = {
    one: '1',
    two: '2',
    thre: '3'
};


// for (let v in obj) {
//     document.write(v + '=>' + obj[v] + '<br>');
// }

function addToObj(obj, key, value) {
    return obj[key] = value;
}

 
document.write(addToObj(obj, 'four', 4));
for (let v in obj) {
    document.write(v + '=>' + obj[v] + '<br>');
}