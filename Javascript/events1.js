//querySelector() && addEventListner() example
let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
  document.querySelector("#output1").innerText = "Hello World!";
});

let list1 = document.querySelector("#list1");
list1.addEventListener("click", (event) => {
  let output2 = document.querySelector("#output2");
  output2.innerText = "You clicked " + event.target.innerText;
  event.target.style.color = "red";
});

let box = document.querySelector("#box");
box.addEventListener("click", () => {
  if (box.style.background === "grey") box.style.background = "green";
  else box.style.background = "grey";
});

let list2 = document.querySelector("#list2");
list2.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") event.target.parentElement.remove();
});
