const colorButton = document.getElementById("color-button");
let colorText = document.getElementById("color-text");

const generateColor = () => {
  const digits = "0123456789ABCDEF";
  let color = "#";

  for( let i = 0 ; i < 6 ; i++){
    let randomNumber = Math.floor(Math.random() * 16);
    color +=  digits[randomNumber];
  }
  return color;
}

const changeColor = () =>{
  let randomNumber = generateColor();
  colorText.innerText = randomNumber;
  //colorButton.style.backgroundColor = randomNumber;
  document.body.style.backgroundColor = randomNumber;
}
changeColor();

colorButton.addEventListener( "click", ()=>{
  changeColor();
})

