const buttonStart = document.getElementById("button-start");
const buttonPause = document.getElementById("button-pause");
const buttonStop = document.getElementById("button-stop");
const buttonReset = document.getElementById("button-reset");
const buttonSplit = document.getElementById("button-split");
const message = document.getElementById("message");
const list = document.getElementById("split-list");
let timer; //setTimer reference
const arr = [];
let [ hours, minutes, seconds ] = [ 0, 0, 0];

const running = () => {
    seconds++;

    if( seconds/60 === 1 ){
        seconds = 0;
        minutes++;
        if( minutes/60 === 1 ){
            minutes = 0;
            hours++;
            if( hours === 24 ) hours = 0;
        }
    }

    message.innerText = printFormat();
}

const printFormat = () => {
    let newSeconds = seconds;
    let newMinutes = minutes;
    let newHours = hours;
    if( seconds < 10 ) newSeconds = "0" + seconds;
    if( minutes < 10 ) newMinutes = "0" + minutes;
    if( hours < 10 ) newHours = "0" + hours;
    return `${newHours}:${newMinutes}:${newSeconds}`;
}

buttonStart.addEventListener("click",()=>{
    timer = setInterval( running , 1000);
    buttonStatus(false,true,true,false, true);
})

buttonPause.addEventListener("click",()=>{
    clearInterval(timer);
    buttonStatus(true,false,true,false,true);
})

buttonStop.addEventListener("click",()=>{
    clearInterval(timer);
    buttonStatus(false,false,false,true,false);
})

buttonReset.addEventListener("click",()=>{
    [seconds, minutes, hours] = [0, 0, 0]
    message.innerText = `00:00:00`;
    while(arr.length > 0) arr.pop(); 
    list.innerHTML = "";
    buttonStatus(true,false,false,false,false);
})

buttonSplit.addEventListener("click",()=>{
    if( arr.length < 2) arr.push(`<li>${printFormat()}</li>`);
    //else buttonSplit.style.display = "none";
    list.innerHTML = arr.join();
})

const buttonStatus = (start, pause, stop, reset, split) => {
    start ? buttonStart.style.display = "block" :  buttonStart.style.display = "none";
    pause ? buttonPause.style.display = "block" :  buttonPause.style.display = "none";
    stop ? buttonStop.style.display = "block" :  buttonStop.style.display = "none";
    reset ? buttonReset.style.display = "block" :  buttonReset.style.display = "none";
    split ? buttonSplit.style.display = "block" :  buttonSplit.style.display = "none";
}
buttonStatus(true,false,false,false,false);

//newItem.classList.remove("text");
/* const newItem = document.createElement("li");
    newItem.classList.add("text");
    newItem.innerText = printFormat();
    list.append(newItem); */


