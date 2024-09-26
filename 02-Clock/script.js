let secHand = document.querySelector('.sec-hand');
let minHand = document.querySelector('.min-hand');
let hrsHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secDeg = seconds * 6 + 90;
    secHand.style.transform = `rotate(${secDeg}deg)`;
    
    const minutes = now.getMinutes();
    const minDeg = minutes * 6 + 90;
    minHand.style.transform = `rotate(${minDeg}deg)`;
    
    const hours = now.getHours();
    const hrsDeg = hours * 30 + 90;
    hrsHand.style.transform = `rotate(${hrsDeg}deg)`;

    console.log(hours + ':' + minutes + ":" + seconds);
    
}

setInterval(setDate, 1000);