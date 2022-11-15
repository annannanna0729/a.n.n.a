var i;
// load array with chosen letters //
var letters = [];
var lower = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "&larr;",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "save",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  "shift",
  "space"
];
var capitols = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "&larr;",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "save",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  "shift",
  "space"
];

const row = document.querySelectorAll(".row1");
const board = document.querySelector(".keyboard");
const key = document.querySelector("#key");
const maths = document.querySelector("#maths");

function letter_click(clicked_id) {
  var text = document.getElementById("text");
  if (row[clicked_id].innerHTML == "space") {
    row[clicked_id].innerHTML = " ";
    letters.push(row[clicked_id].innerHTML);
    replaceHypertext();
  } else {
    letters.push(row[clicked_id].innerHTML);
  }
  for (i = 0; i < letters.length; i++) {
    text.innerHTML = letters.join("");
  }
}
function replaceHypertext() {
  row[29].innerHTML = "space";
  row[60].innerHTML = "space";
  row[90].innerHTML = "space";
}
function capitol_click() {
  for (i = 0; i < capitols.length; i++) {
    if (row[i].innerHTML == capitols[i]) {
      row[i].innerHTML = lower[i];
    } else {
      row[i].innerHTML = capitols[i];
    }
  }
}
function popArray() {
  letters.pop();
  text.innerHTML = letters.join("");
}
function setSymbols() {
  board.style.display = "none";
  maths.style.display = "none";
  key.style.display = "block";
}
function resetLetters() {
  board.style.display = "block";
  maths.style.display = "none";
  key.style.display = "none";
}
function setMaths() {
  board.style.display = "none";
  maths.style.display = "block";
  key.style.display = "none";
}
function resetLett() {
  board.style.display = "block";
  maths.style.display = "none";
  key.style.display = "none";
}
function download() {
  var text = document.getElementById("text").value;
  text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
  var blob = new Blob([text], { type: "text/plain" });
  var anchor = document.createElement("a");
  anchor.download = "my-filename.txt";
  anchor.href = window.URL.createObjectURL(blob);
  anchor.target = "_blank";
  anchor.style.display = "none"; // just to be safe!
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}