const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progress_bar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButton = player.querySelectorAll('[data-skip');
const ranges = player.querySelectorAll('.player__slider');


function toggleplay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function toggleButton() {
    const icon = this.paused ? '►' : '▐▐';
    toggle.textContent = icon;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRanges() {
    video[this.name] = this.value;
}

function progressUpdate() {
    const percent = (video.currentTime / video.duration) * 100;
    progress_bar.style.flexBasis = `${percent}%`;
}

function scrub(e) {    
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

video.addEventListener('click', toggleplay);
video.addEventListener('play', toggleButton);
video.addEventListener('pause', toggleButton);
video.addEventListener('timeupdate', progressUpdate);

toggle.addEventListener('click', toggleplay);


skipButton.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRanges));
ranges.forEach(range => range.addEventListener('mousemove', handleRanges));


let ismouseDown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => ismouseDown && scrub(e));
progress.addEventListener('mousedown', () => ismouseDown = true);
progress.addEventListener('mouseup', () => ismouseDown = false);