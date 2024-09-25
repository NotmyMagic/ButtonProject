const container = document.querySelector(".container");
const largeRedButton = document.querySelector(".large red button");
let x = 1;

function btnPressed(e) {
  console.log("click");
  let clicks = (document.querySelector("#clicks").innerHTML = `${x++}`);
}

function colorChange() {
  let red = document.getElementById("rangeRed").value;
  let green = document.querySelector("#rangeGreen").value;
  let blue = document.querySelector("#rangeBlue").value;
  let RGB = `rbg(${red}, ${green}, ${blue})`;
  let color = `rgb(${red}, ${green}, ${blue})`;
  document.body.style.backgroundColor = color;

  console.log(`(${red}, ${green}, ${blue})`);
}

document.getElementById("rangeRed").addEventListener("input", colorChange);
document.getElementById("rangeGreen").addEventListener("input", colorChange);
document.getElementById("rangeBlue").addEventListener("input", colorChange);
