document.getElementById('email-form').addEventListener("submit", checkEmail);

function checkEmail(event) {
  event.preventDefault();
  var el = document.getElementById('email-form');

  var email = el.email.value;
  var answer = document.getElementById('answer');
  var emailSend = document.getElementById('email-send');

  if(email == "") {
    document.getElementById('answer').innerHTML = "You have not entered your email";
    answer.style.color = 'red';
    emailSend.style.cssText = 'border: 1px solid red;';
  } else {
    answer.style.color = 'green'
    emailSend.style.cssText = 'border: 1px solid green;';
    document.getElementById('answer').innerHTML = "The mail has been sent successfully";
  }  
}