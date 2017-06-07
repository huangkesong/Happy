//函数声明
function deap(obj){
    var oDiv = document.getElementById(obj);
    oDiv.onmousedown = function(){
        console.log("我被触发了");
    }
}