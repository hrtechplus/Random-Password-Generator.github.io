// const range = document.getElementById("range");
const range = document.getElementById("range");
const rangeShow = document.getElementById("rangeShow");
const input = document.getElementById("input");

//check box tika methana thienne

const Upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const number = document.getElementById("number");
const Upspecialper = document.getElementById("special");

// check box wala DOM wala end eka

const listOfCheck = [
  Upper.checked,
  lower.checked,
  number.checked,
  Upspecialper.checked,
];

//ABCD

const upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

//abcd
const lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

//123434
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//Special letter
const special = ["!", "@", "#", "%", "^", "&", "*"];

//range eka load weddima pennanne meken
// function handleRange(event) {
//   console.log(event.target.name);
//   console.log(event.target.value);
//   rangeShow.textContent = event.target.value;
// }

//current range value when loading browser

//checkbox triggers
function handleSubmit() {
  generator();
}
function handlecheckboxA(event) {
  console.log(event.target.checked);
  generator();
}

function handlecheckboxa(event) {
  console.log(event.target.checked);
  generator();
}

function handlecheckbox1(event) {
  console.log(event.target.checked);
  generator();
}

function handlecheckboxs(event) {
  console.log(event.target.checked);
  generator();
}

console.log(listOfCheck[0]);

// genrate password made by hasindu rangika
function handleRange(event) {
  console.log(event.target.name);
  console.log(event.target.value);
  rangeShow.textContent = event.target.value;
  generator();
}

function generator() {
  var finalList = [];
  if (Upper.checked == true) {
    finalList.push(upperCase);
  }
  if (lower.checked == true) {
    finalList.push(...upperCase, ...lowerCase);
  }

  if (number.checked == true) {
    finalList.push(...upperCase, ...lowerCase, ...numbers);
  }

  if (Upspecialper.checked == true) {
    finalList.push(...upperCase, ...lowerCase, ...numbers, ...special);
  }
  console.log(finalList);
  var stringlist = finalList.toString();
  var withoutComma = stringlist.replaceAll(",", "");
  var finalpsw = "";
  console.log(withoutComma);

  for (var i = 1; i < range.value; i++) {
    finalpsw += withoutComma.charAt(
      Math.floor(Math.random() * withoutComma.length)
    );
  }

  function randomString(lengthospass) {
    for (var i = 1; i < length; ++i) {
      finalpsw += finalpsw[Math.floor(Math.random() * finalpsw.length)];
    }
    return finalpsw;
  }

  randomString(lengthospass);
  console.log(randomString(lengthospass));
  input.value = randomString(lengthospass);
}

const lengthospass = range.value;
window.addEventListener("load", () => {
  rangeShow.textContent = range.value;
  generator();
});

///cpy

function handleCopy() {
  // Get the text field
  var copyText = document.getElementById("input");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Password Copied!");
}
