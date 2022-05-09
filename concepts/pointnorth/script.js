var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

function drawImage(evt) {
    var angle = deg2rad(evt.alpha+180);
    canvas.width = canvas.width; // clear canvas
    ctx.beginPath();
    
    var x = Math.cos(angle)*10;
    var y = Math.sin(angle)*10;

    ctx.moveTo(50, 50);
    ctx.lineTo(50+x, 50+y);
    ctx.stroke();
}
window.onload = function() {
    s.innerText = "ondeviceorientationabsolute" in window;
    window.ondeviceorientationabsolute = drawImage;
}

function deg2rad(deg) {
    return deg/180*Math.PI;
}