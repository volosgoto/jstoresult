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
<h1>1</h1>
<h2>Fizz buzz</h2>
<button type="submit" onclick="go()" style="display: block ">На главную</button>
<hr>

<script>
    var num = 20;
    function fizzBuzz(num) {
        let i = 1;
        for (i; i<=num; i++) {
            if (0 == i % 15) document.write('Fizz buzz' + '<br>') ;
            else if (0 == i % 3) document.write('Fizz' + '<br>');
            else if (0 == i % 5) document.write('buzz' + '<br>');
            else document.write(i + '<br>');

        }
    }

    fizzBuzz(num);
</script>


<script>
    function go() {
        window.location.assign("../index.php");
    }
</script>

</body>
</html>
