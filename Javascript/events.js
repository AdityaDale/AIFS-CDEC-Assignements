//onclick event
function add() {
  let a = document.getElementById("inputNo1").value;
  let b = document.getElementById("inputNo2").value;

  document.getElementById("output1").innerText = parseInt(a) + parseInt(b);
}

function clearAdd() {
  document.getElementById("inputNo1").value = "";
  document.getElementById("inputNo2").value = "";
  document.getElementById("output1").innerText = "";
}

//mouse hover event
let box = document.getElementById("box");
box.addEventListener("mouseover", () => {
  box.style.background = "orange";
});

box.addEventListener("mouseout", () => {
  box.style.background = "lightblue";
});

//mouse tracking event
document.addEventListener("mousemove", (event) => {
  document.getElementById("coords").innerText =
    "X : " + event.clientX + " Y : " + event.clientY;
});

//typing event
let textBox = document.getElementById("textBox");
textBox.addEventListener("input", () => {
  document.getElementById("textOutput").innerText = textBox.value;
});

//keydown event
document.getElementById("keyInput").addEventListener("keydown", (event) => {
  console.log("key pressed : " + event.key);
});
