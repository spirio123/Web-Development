var a = false;

function validate() {
  a = true;
  const email = document.getElementById("email");
  const user = document.getElementById("login");
  const pass = document.getElementById("pass");
  const pass2 = document.getElementById("pass2");
  const checkboxes = document.getElementById("terms");
  const spanemail = document.getElementById("spanemail");
  const spanlogin = document.getElementById("spanlogin");
  const spanpass = document.getElementById("spanpass");
  const spanpass2 = document.getElementById("spanpass2");
  const spanterms = document.getElementById("spanterms");

  email.classList.remove("error");
  spanemail.classList.remove("error");
  user.classList.remove("error");
  spanlogin.classList.remove("error");
  pass.classList.remove("error");
  spanpass.classList.remove("error");
  pass2.classList.remove("error");
  spanpass2.classList.remove("error");
  checkboxes.classList.remove("error");
  spanterms.classList.remove("error");

  if (!(ValidateEmail(email.value))) {
    a = false;
    email.classList.add("error");
    spanemail.classList.add("error");  
  }

  if (user.value.length > 20) {
    a = false;
    user.classList.add("error");
    spanlogin.classList.add("error"); 
  }

  if (user.value.length < 1) {
    user.classList.add("error");
    spanlogin.classList.add("error"); 
    a = false;
  }

  user.value = user.value.toLowerCase();

  if (! (pass.value === pass2.value)) {
    a = false;
    pass2.classList.add("error");
    spanpass2.classList.add("error"); 
  }
  if (pass2.value.length < 6) {
    a = false;
    pass2.classList.add("error");
    spanpass2.classList.add("error"); 
  }
  if (pass.value.length < 6) {
    a = false;
    pass.classList.add("error");
    spanpass.classList.add("error"); 
  }

  if (! (pass.value.search(/[a-z]/))) {
    a = false; 
    pass.classList.add("error");
    spanpass.classList.add("error"); 
  }
  if (! (pass.value.search(/[A-Z]/))) {
    a = false;
    pass.classList.add("error");
    spanpass.classList.add("error"); 
  }
  if (!(checkboxes.value)) {
    a = false;
    checkboxes.classList.add("error");
    spanterms.classList.add("error"); 
  }

  return a;

}

function newsletter() {
  alert("This may be spam");
}

document.getElementById("newsletter").onclick = newsletter;

function ValidateEmail(val) {

  var validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;

  if (val.match(validRegex)) {
    return true; } 
    else {
return false;
  }
}