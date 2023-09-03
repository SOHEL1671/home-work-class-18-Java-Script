
// input field

// const passwordInput = document.getElementById("password");
//     const toggleButton = document.getElementById("toggleButton");

//     toggleButton.addEventListener("click", () => {
//       if (passwordInput.type === "password") {
//         passwordInput.type = "text";
//       } else {
//         passwordInput.type = "password";
//       }
//     });

// calculator

var disp = document.getElementById("disp");
function ud(n){ 
disp.innerHTML += n ;
}
function ans(){
c=eval(disp.innerHTML);
disp.innerHTML=c;
}
function clc(){
disp.innerHTML='';
}

document.getElementById("1").addEventListener("click",function(){ ud(1); });
document.getElementById("2").addEventListener("click",function(){ ud(2); });
document.getElementById("3").addEventListener("click",function(){ ud(3); });
document.getElementById("4").addEventListener("click",function(){ ud(4); });
document.getElementById("5").addEventListener("click",function(){ ud(5); });
document.getElementById("6").addEventListener("click",function(){ ud(6); });
document.getElementById("7").addEventListener("click",function(){ ud(7); });
document.getElementById("8").addEventListener("click",function(){ ud(8); });
document.getElementById("9").addEventListener("click",function(){ ud(9); });
document.getElementById("0").addEventListener("click",function(){ ud(0); });
document.getElementById("dec").addEventListener("click",function(){ ud('.'); });

document.getElementById("add").addEventListener("click",function(){ ud('+'); });
document.getElementById("subtr").addEventListener("click",function(){ ud('-'); });
document.getElementById("mult").addEventListener("click",function(){ ud('*'); });
document.getElementById("division").addEventListener("click",function(){ ud('/'); });

document.getElementById("clear").addEventListener("click",function(){clc(); });
document.getElementById("ans").addEventListener("click",function(){ ans(); });

// clock

// function rotateClockHands() {
//     const hourHand = document.getElementById("hourHand");
//     const minuteHand = document.getElementById("minuteHand");
//     const secondHand = document.getElementById("secondHand");

//     const now = new Date();
//     const hours = now.getUTCHours() + 6; // Adding 6 hours for Dhaka time
//     const minutes = now.getUTCMinutes();
//     const seconds = now.getUTCSeconds();

//     const hourDeg = (hours * 30) + (0.5 * minutes);
//     const minuteDeg = (minutes * 6) + (0.1 * seconds);
//     const secondDeg = seconds * 6;

//     hourHand.style.transform = `rotate(${hourDeg}deg)`;
//     minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
//     secondHand.style.transform = `rotate(${secondDeg}deg)`;

//     const digitalClock = document.getElementById("digitalClock");
//     digitalClock.textContent = `${formatTwoDigits(hours)}:${formatTwoDigits(minutes)}:${formatTwoDigits(seconds)}`;
// }

// function formatTwoDigits(value) {
//     return value < 10 ? `0${value}` : value;
// }

// setInterval(rotateClockHands, 1000);


