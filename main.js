



function filterText(text) {
var owo = new owoifier();
var inputBox = document.getElementById("input");
  if (inputBox.value !== "") {
    inputBox.value = owo.owoify(inputBox.value);
  }
}
