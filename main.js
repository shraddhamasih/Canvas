canvas = document.getELementById("myCanvas");
ctx=canvas.getContext("2d");
var color="";
var wol="";
var mousevent="";
var lx,ly,cx,cy;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    color = document.getElementById("color").value;
    wol = document.getElementById("width").value;
    mousevent = "mousedown";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    
    mousevent = "mouseleave";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    
    mousevent = "mouseup";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    cx=e.clientX-canvas.offsetLeft;
    cy=e.clientY-canvas.offsetTop;
    if (mousevent=="mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=wol;
        ctx.moveTo(lx,ly);
        ctx.lineTo(cx,cy);
        ctx.stroke();
    }
    lx=cx;
    ly=cy;
}