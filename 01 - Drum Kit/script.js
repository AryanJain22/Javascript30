window.addEventListener('keydown', function (e) {
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key_press = this.document.querySelector(`.key-btn[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    key_press.classList.add('pressed');
});

function removeTransion(e) {
    console.log(this);
    this.classList.remove('playing');

}