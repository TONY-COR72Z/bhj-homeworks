
const modalEl = document.getElementById('modal');
const resetButtons = document.getElementsByClassName('reset');

for (let btn of resetButtons) {
  btn.addEventListener('click', function () {
    if (!modalEl.classList.contains('hidden')) {
      modalEl.classList.add('hidden');
    }
  });
}

//const getHole = index => document.getElementById(`hole${index}`);
let holes = document.getElementsByClassName('hole');
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

function restart() {
    dead.textContent = 0;
    lost.textContent = 0;
}

function win() {
    const header = modalEl.getElementsByTagName('h2')[0];
    header.textContent = `🍾 You win! 🏅`;
    modalEl.classList.remove('hidden');
}

function lose() {
    const header = modalEl.getElementsByTagName('h2')[0];
    header.textContent = `You lose 😱`;
    modalEl.classList.remove('hidden');
}

for (let hole of holes) {
    hole.onclick = function () {
        hole.classList.contains('hole_has-mole') ? dead.innerText++ : lost.innerText++;
        if (dead.innerText == 10) {
            win();
            restart();
        } else if (lost.innerText == 5) {
            lose();
            restart();
        }
    }
}

/* for (let i = 1; i <= 9; i++){
    getHole(i).onclick = function() {
        if (this.className.includes('hole_has-mole')) { 
            dead.innerText++;
            if (dead.innerText == 10) {
                win();
                restart();
            }
            return;
        } else {
            lost.innerText++;
            if (lost.innerText == 5) {
                lose();
                restart();
            }
            return;
        }
    }
} */