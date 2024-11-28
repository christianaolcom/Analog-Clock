const secondhand = document.getElementById('second-hand');
const minutehand = document.getElementById('minute-hand');
const hourhand = document.getElementById('hour-hand');

function clockTick() {
    const date = new Date();
    const seconds = date.getSeconds() / 60;
    const minutes = (seconds + date.getMinutes()) / 60;
    const hours = (minutes + date.getHours()) / 12;

    rotateClockHand(secondhand, seconds);
    rotateClockHand(minutehand, minutes);
    rotateClockHand(hourhand, hours);
}

function rotateClockHand(element, rotation) {
    element.style.setProperty('--rotate', rotation * 360)
}

setInterval(clockTick, 1000);
