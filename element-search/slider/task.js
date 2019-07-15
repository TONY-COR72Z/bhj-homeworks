
let prev = document.querySelector('.slider__arrow_prev'),
    next = document.querySelector('.slider__arrow_next'),
    slide = Array.from(document.getElementsByClassName('slider__item')),
    dot = Array.from(document.getElementsByClassName('slider__dot')),
    index = 0;

function deactivated() {
    slide[index].classList.remove('slider__item_active');
    dot[index].classList.remove('slider__dot_active');
}

next.onclick = () => {
    deactivated();
    index++;
    activated();
}

prev.onclick = () => {
    deactivated();
    index--;
    activated();
}

function activated() {
    if (index < 0) index = slide.length - 1;
    if (index === slide.length) index = 0;

    dot[index].classList.add('slider__dot_active');
    slide[index].classList.add('slider__item_active');
}

dot.forEach((el, i) => {
    el.onclick = () => {
        deactivated();
        index = i;
        activated();
    }
})
