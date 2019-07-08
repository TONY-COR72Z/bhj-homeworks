
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
            dead.textContent++;
            if (dead.textContent == 10) {
                alert('You win!');
                restart();
            }
            return;
        } else {
            lost.textContent++;
            if (lost.textContent == 5) {
                alert('You lose!');
                restart();
            }
            return;
        }
    }
}