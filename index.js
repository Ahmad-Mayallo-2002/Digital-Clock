const clockFunction = () => {
    const time = document.querySelector("#time");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let dayNight = 'AM';
    if (hours > 12) {
        dayNight = 'PM';
        hours = hours - 12;
    }
    if (hours < 10) {
        hours = `0${hours}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    time.textContent = `${hours} : ${minutes} : ${seconds} ${dayNight}`;
}

setInterval(clockFunction, 1000);