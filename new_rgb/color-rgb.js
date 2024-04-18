const redInput = document.getElementById("red");
const greenInput = document.getElementById("green");
const blueInput = document.getElementById("blue");

const redText = document.getElementById("red-text");
const greenText = document.getElementById("green-text");
const blueText = document.getElementById("blue-text");

const main = document.querySelector("main");


const updateStyles = () => {

  console.log("hi");
  let red = redInput.value / 2.55;
  let color = `linear-gradient(90deg, rgb(255,0,0)${red}%,rgb(214,214,214)${red}% )`;
  redInput.style.background = color;

  let green = greenInput.value / 2.55;
  color = `linear-gradient(90deg, rgb(0,255,0)${green}%,rgb(214,214,214)${green}% )`;
  greenInput.style.background = color;

  let blue = blueInput.value / 2.55;
  color = `linear-gradient(90deg, rgb(0,0,255)${blue}%,rgb(214,214,214)${blue}% )`;
  blueInput.style.background = color;
}


const updateColors = () => {

  let red = redInput.value;
  let green = greenInput.value;
  let blue = blueInput.value;

  redText.innerText = red;
  greenText.innerText = green;
  blueText.innerText = blue;

  const color = `rgb(${red},${green},${blue})`;
  main.style.backgroundColor = color;

  updateStyles();
}
updateColors();

redInput.addEventListener("change", () => {
  updateColors();
})

greenInput.addEventListener("change", () => {
  updateColors();
})

blueInput.addEventListener("change", () => {
  updateColors();
})

