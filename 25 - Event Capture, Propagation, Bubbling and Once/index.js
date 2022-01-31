const divs = document.querySelectorAll('div');

function logText(e) {
    e.stopPropagation();
    console.log(this.classList.value);
} 

divs.forEach(divs => divs.addEventListener('click', logText, {
    capture: false,
    once: true
})); 