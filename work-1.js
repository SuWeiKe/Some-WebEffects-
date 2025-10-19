window.onload = function() {
    var oDiv = document.getElementById('pic');
    var oImg = oDiv.getElementsByTagName('img')[0];
    var oUl = oDiv.getElementsByTagName('ul')[0];
    var arrUrl = ['./img/jay1.jpg', './img/jay2.jpg', './img/jay3.jpg', './img/jay4.jpg'];


    var aLi = oUl.getElementsByTagName('li');
    var num = 0;
    var timer = null;

    function fnTab() {
        oImg.src = arrUrl[num];
        for (var i = 0; i < aLi.length; i++) {
            aLi[i].className = '';

        }
        aLi[num].className = 'active';

    }
    fnTab();
    for (var j = 0; j < aLi.length; j++) {
        aLi[j].index = j;
        aLi[j].onclick = function() {
            num = this.index;
            fnTab();
        };
    }

    function autoPlay() {
        timer = setInterval(function() {
            num++;
            num %= arrUrl.length;
            fnTab();
        }, 2000);
    }
    autoPlay();
    oImg.onmouseover = function() {
        clearInterval(timer);
    };
    oImg.onmouseout = autoPlay;
}