let myForm = document.getElementById("myForm");
let message = document.getElementById("message");

myForm.addEventListener("submit", () => {
  let name = document.getElementById("name");
  if (name.value === "") {
    message.innerText = "Please enter name";
    return;
  }

  let email = document.getElementById("email");
  if (!email.value.contains("@")) {
    message.innerText = "Please enter valid email";
    return;
  }

  let password = document.getElementById(password);
  if (password.value.length < 8) {
    message.innerText = "Password must have atleast 8 characters";
    return;
  }

  if (message.innerText === "") {
    message.style.color = "green";
    message.innerText = "form submited successfully";
  }
});
