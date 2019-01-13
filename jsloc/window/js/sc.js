// alert('hello SC');

// Отображение элемента чезе определенное время

window.onload= function () {
    var wrap = document.getElementById('wrap');
    wrap.onclick = popupClose();


    function popup() {
        wrap.style.display = 'block';
        popupIn(1);
    }

    function popupIn(x) {
        var op = (wrap.style.opacity) ? parseFloat(wrap.style.opacity) : 0;

        if (op < x) {
            op += 0.5;
            wrap.style.opacity = op;
            // setTimeout(popupIn, 50, x);
           setTimeout(function () {
               popupIn(x)
           }, 50);
        }
    }

    setInterval(popup, 2000);


    function  popupClose() {
        wrap.style.display = 'none';
    }

}