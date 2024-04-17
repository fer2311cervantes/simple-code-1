const redInput = document.getElementById("red");
const greenInput = document.getElementById("green");
const blueInput = document.getElementById("blue");

const redText = document.getElementById("red-text");
const greenText = document.getElementById("green-text");
const blueText = document.getElementById("blue-text");

const main = document.querySelector("main");

const updateColors = () => {

  let red = redInput.value;
  let green = greenInput.value;
  let blue = blueInput.value;

  redText.innerText = red;
  greenText.innerText = green;
  blueText.innerText = blue;

  const color = `rgb(${red},${green},${blue})`;
  main.style.backgroundColor = color;
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

/*
redInput.addEventListener("change", (e)=>{
    red = e.target.value;
    updateColors();
})
*/