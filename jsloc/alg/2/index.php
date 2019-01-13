<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<h1>2</h1>
<h2>harmlessRansomNote</h2>
<button type="submit" onclick="go()" style="display: block ">На главную</button>
<hr>
<script>
    // function harmlessRansomNote(noteText, magazineText) {
    //     let noteArray = noteText.split('') ;
    //     let magazineArray = magazineText.split(' ');
    //     let magazineObj = {};
    //
    //     magazineArray.forEach(word => {
    //         if(!magazineObj['word']) magazineObj[word] = 0;
    //         magazineObj[word]++;
    //     });
    //
    //     console.log(magazineObj);
    //
    // }
    //
    // var magazine = 'this is all the magazine all text in the magazine';
    // harmlessRansomNote('', magazine);



</script>

<script>
 // function harmlessRansomNote(noteText, magazineText) {
 //     var noteArray = noteText.split('') ;
 //     var magazineArray = magazineText.split(' ');
 //     var word = '';
 //     var magazineObj = {};
 //
 //     for (let k in magazineArray) {
 //         if (magazineObj[word] = k  )  {
 //             magazineArray[word] = 0;
 //         } magazineArray[word]++;
 //
 //     }
 //
 //     console.log(magazineObj);
 //
 // }
 //
 // var magazine = 'this';
 // // var magazine = 'this is all magazine all text in the magazine';
 // harmlessRansomNote('', magazine);

    var text = 'hello this is all this words all';
    function arr(a) {
        let arr = a.split(' ');
        // for (var v in arr) {
        // }
        document.write(arr);
    }
    arr(text);

</script>


<script>
    function go() {
        window.location.assign("../index.php");
    }
</script>

</body>
</html>
