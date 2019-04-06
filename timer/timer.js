var start=document.getElementById("start");
var pause=document.getElementById("pause");
var main=document.getElementById("main");
var box=document.getElementById("box");
var reset=document.getElementById("reset");
var input;
var time=0;
box.addEventListener("input",function(event)
{
  input=box.value;
});
start.addEventListener("click",function(event)
{
 //input=box.value;
console.log(input);
var a=setInterval(function()
{
  //time=time+1;
  //console.log(time);
  //console.log(box.value);
    box.value-=1;
  if(box.value<=0)
  {
    clearInterval(a);
    alert("time over");
  }

},1000);

reset.addEventListener("click",function(event)
{
clearInterval(a);
box.value=input;
});

pause.addEventListener("click",function(event)
{
clearInterval(a);
//box.value=input;
});


});
