const ticked = document.querySelectorAll('input[type=checkbox]');

let LastClicked;

function handleCheck(e) {
    
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        ticked.forEach(t => {
            if (t == this || t == LastClicked) {
                inBetween = !inBetween
            }
            if (inBetween) {
                t.checked = true;
            }
        })
    }
    
    LastClicked = this;
    
}
// function checkList(){

    // const elemetClicked = e.target;
    // const siblingElement = e.target.nextElementSibling;

    // if (elemetClicked.checked) {
    //     siblingElement.classList.add('slice');
    // }
    // else{}
    //     siblingElement.classList.remove('slice')
    // }
// }

ticked.forEach(tick => tick.addEventListener("click", handleCheck));