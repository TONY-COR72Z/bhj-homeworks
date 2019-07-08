
let startTime = Date.now();
let width = 200;
let count = document.getElementById('clicker__counter');
let cookie = document.getElementById('cookie');
let clrBtn = document.getElementById('btn-clr');
let speed = document.getElementById('clicker__speed');

cookie.onclick = () => {
    count.innerHTML++;
    let atTheMoment = Date.now();
    let timeInterval = atTheMoment - startTime;
    speed.innerHTML = count.innerHTML / parseInt(timeInterval / 1000);
    if (width === 200) width = 300;
        else width = 200;
    cookie.width = width;
}

clrBtn.onclick = () => {
    startTime = Date.now();
    speed.innerHTML = 0;
    count.innerHTML = 0;
    if (cookie.width === 300) cookie.width = 200;
}