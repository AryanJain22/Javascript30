const key = document.addEventListener('keypress', handlePress);
const secretKey = "success";
const pressed = [];
const title = document.querySelector('p')

function handlePress(e) {
    pressed.push(e.key);

    pressed.splice(-secretKey - 1, pressed.length - secretKey.length);
    if (pressed.join('').includes(secretKey)) {
        title.textContent = "You succeed";
        console.log("You are on the top");
    }
}
