
/*
function handleSubmit(event) {
    event.preventDefault(); // prevent the page from reloading

    // access the form elements
    const form = event.target;
    const input1 = form.elements.input1;
    const input2 = form.elements.input2;
    const input3 = form.elements.input3;

    // validate the form inputs
    if (input1.value === "" || input2.value === "" || input3.value === "" ) {
        alert("All inputs must be filled out");
    } else {
        // send the form data to the server
        sendData(input1.value, input2.value, input3.value);
        alert("Poruka poslata!");
    }
}


function sendData(input1, input2, input3) {
    // use fetch or XMLHttpRequest to send the data to the server
    // ...
    
}

const form = document.querySelector("form");
const submitBtn = form.querySelector("[type='submit']");

submitBtn.addEventListener("click", handleSubmit);*/


submitBtn.addEventListener("click", validateForm);

function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var msg = document.forms["myForm"]["message"].value
    if (name == "" || email == ""|| message == "") {
      alert("All fields must be filled out");
      return false;
    }
    else {
        alert("Msg sent!");
    }
  }

  document.getElementById('myForm').innerHTML = text
