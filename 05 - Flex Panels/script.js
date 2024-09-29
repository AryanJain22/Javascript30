const selected = document.querySelectorAll('.panel');

function handletoggle() {
    this.classList.toggle('open');
}

function handleActive(e) {
    // console.log(e.propertyName);

    if (e.propertyName.includes('flex-grow')) {
        this.classList.toggle('open-active');
    }
}

selected.forEach(p => p.addEventListener('mousemove', handletoggle));
selected.forEach(p => p.addEventListener('transitionend', handleActive));