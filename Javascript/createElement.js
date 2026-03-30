let addBtn = document.getElementById("addBtn");
let removeBtn = document.getElementById("removeBtn");

addBtn.addEventListener("click", () => {
  let textBox = document.createElement("input");
  textBox.type = "text";
  textBox.name = "txtBox";
  textBox.placeholder = "Type something";
  document.getElementById("div1").appendChild(textBox);
});

removeBtn.addEventListener("click", () => {
  let div1 = document.querySelector("#div1");
  let inputs = div1.querySelectorAll("input");
  let len = inputs.length;
  if (len >= 1) inputs[len - 1].remove();
});
