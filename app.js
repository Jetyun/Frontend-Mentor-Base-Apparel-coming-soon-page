
let error=document.getElementById(`error`)
let errorsign=document.getElementById(`errorsign`)


function ValidateEmail(input) {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.value.match(validRegex)) {
  alert("it is valid")
  } if (input.value.length==0){
    errorsign.style.display = "block";
    error.style.display = "block";
    return false
  }
    else {
    errorsign.style.display = "block";
    error.style.display = "block";
    
  }
}
