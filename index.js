var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var charSp = document.getElementById("char");

myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

window.addEventListener('load', () => {
  document.getElementById("message").style.display = "none";
});


myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}


myInput.onkeyup = function() {
  
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  
  if(myInput.value.length >= 6) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }


  var charS = /[@#$%&!]/g;
  if(myInput.value.match(charS)) {
    charSp.classList.remove("invalid");
    charSp.classList.add("valid");
  } else {
    charSp.classList.remove("valid");
    charSp.classList.add("invalid");
  }
}


//for icon
const togglePassword = document.querySelector('#togglePassword');

		const password = document.querySelector('#password');

		togglePassword.addEventListener('click', () => {
			const type = password.getAttribute('type') === 'password' ? 'text' : 'password';				
			password.setAttribute('type', type);
			this.classList.toggle('bi-eye');
		});
