const next = document.getElementById('next');
const prev = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');
const cards = document.querySelectorAll('.card');
const progress = document.getElementById('progress');

let currentActive = 1;

next.addEventListener('click', () => {
    const currentCard = document.querySelector('.card.active');

    currentCard.classList.remove('active');

    setTimeout(() => {
        currentActive++;

        if(currentActive > circles.length){
            currentActive = circles.length;
        }

        update();
    }, 400); // This should match the duration of the CSS transition
})

prev.addEventListener('click', () => {
    currentActive--;

    if(currentActive < 1) {
        currentActive = 1;
    }
 
    update();
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive){
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    cards.forEach((card, idx) => {
        if(idx === currentActive - 1){
            // Only current card is visible
            setTimeout(() => {
                card.classList.add('active');
            }, 300); // This should match the duration of the CSS transition
            card.classList.remove('hidden');
        } else {
            // All other cards are hidden
            card.classList.remove('active');
            card.classList.add('hidden');
        }
    })

    const actives = document.querySelectorAll('.active.circle');
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    if(currentActive === 1){
        prev.disabled = true;
    } else if(currentActive === circles.length){
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}

window.onload = function() {
    update();
}