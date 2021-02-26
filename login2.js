function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="ayush" || "avinash" && password=="WedDAvinash")
{
  alert("LOGIN ACCESS")
  window.open('https://ayush-tech914.github.io/My_Website_work/')
  return false;

}
else
{
    alert("LOGIN FAILED! \nWebsite is password protected.\nYou need to first register.")
}

}
var check = function() {
    if (document.getElementById('pass1').value ==
      document.getElementById('pass2').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'matching';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = '*not matching';
    }
  }