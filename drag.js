//函数声明
function deap(obj){
    var disX = 0;
    var disY = 0;
    var oDiv = document.getElementById(obj);
    oDiv.onmousedown = function(){
        console.log("我现在做了一个事件操作！！！");
        console.log("哈哈 我又变动了！！！");
    }
}