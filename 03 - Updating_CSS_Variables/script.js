const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));


// Added the Change Image Section

const change = document.querySelectorAll('button');

function changes(){
    const newNumber = Math.floor(Math.random() * (6 - 1)) + 1;
    const photo = document.getElementById("photo");
    photo.src = `./picture/image${newNumber}.jpg`;
}

change.forEach(c => c.addEventListener('click', changes));