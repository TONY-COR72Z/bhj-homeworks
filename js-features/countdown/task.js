
let targetTime = Date.now() + 20000;
let countdown = document.getElementById('timer');

function checkZero(i) {
    return (i < 10) ? '0' + i : i;
}

let getCountdown = setInterval(() => {
    let today = Date.now();
    let secondsLeft = ( targetTime - today ) / 1000;
    //console.log(Math.ceil(secondsLeft));
    let hours = checkZero( parseInt( secondsLeft / 3600 ) );
    secondsLeft = secondsLeft % 3600;
    let minutes = checkZero( parseInt( secondsLeft / 60 ) );
    let seconds = checkZero( parseInt( secondsLeft % 60 ) );
    if (hours == 0 && minutes == 0 && seconds == 0) {
        alert(`Вы победили в конкурсе!`);
        let download = document.getElementById('download');
        download.click();
        clearInterval(getCountdown);
    }
    countdown.innerHTML = `${hours} : ${minutes} : ${seconds}`;
}, 1000);