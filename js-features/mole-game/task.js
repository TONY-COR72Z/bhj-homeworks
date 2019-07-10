
const getHole = index => document.getElementById(`hole${index}`);
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

function restart() {
    dead.textContent = 0;
    lost.textContent = 0;
}

for (let i = 1; i <= 9; i++){
    getHole(i).onclick = function() {
        if (this.className.includes('hole_has-mole')) { 
            dead.innerText++;
            console.log(`dead ${parseInt(dead.innerText)}`);
            if (parseInt(dead.innerText) === 10) {
                console.log('you win');
                restart();
            }
            return;
        } else {
            lost.innerText++;
            console.log(`lost ${parseInt(lost.innerText)}`);
            if (parseInt(lost.innerText) === 5) {
                console.log('you lose');
                restart();
            }
            return;
        }
    }
}