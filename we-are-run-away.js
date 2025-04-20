var a = document.getElementById("QQ");
var b = document.getElementsByTagName("h1");
var colors = ["yellow", "green", "purple", "white"]
var time = 1
a.onclick = function(){
    window.location.href = "https://qm.qq.com/q/YtpneR0UMI";
}
setInterval(function(){
    console.error(time);
    time++
    if (time == 100){
        window.location.href = "https://qm.qq.com/q/YtpneR0UMI";
    }
},1000)
