//函数声明
function drag(obj){
    var disX = 0;
    var disY = 0;
    var oDiv = document.getElementById(obj);
    oDiv.onmousedown = function(ev){
       disX = ev.pageX - oDiv.offsetLeft;
       disY = ev.pageY - oDiv.offsetTop;
        console.log(disX,disY);
        document.onmousemove = function(ev){
            oDiv.style.left = ev.pageX - disX +'px';
            oDiv.style.top = ev.pageX - disY +'px';
        };
        document.onmouseup = function(ev){
          document.onmousemove = null;
          document.onmouseup = null;
        };
    }
    return false;
}