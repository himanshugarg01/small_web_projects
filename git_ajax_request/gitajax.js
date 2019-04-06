var input=document.getElementById("input");
var btn=document.getElementById("btn");
var div=document.getElementById("div");
btn.addEventListener("click",function(event)
{
  var value=input.value;
  if(value=="")
  {
    alert("empty");
  }
  else {
    var xhr=new XMLHttpRequest();
    xhr.open("GET","https://api.github.com/users?since="+input.value);
    xhr.onload=function()
    {
      console.log(xhr.responseText);
      var user=JSON.parse(xhr.responseText);
      console.log(user[0].login);
      div.innerHTML="<br> login : "+user[0].login;
    }
    xhr.send();


  }

});
