const rateButtons = document.querySelectorAll('.rating-button');

for (let button of rateButtons) {
    button.addEventListener('click', isClicked);
}

function isClicked() {
    const clickedButton = document.querySelector("#clicked");
    if (!clickedButton) {
        this.setAttribute('id', 'clicked');
        this.classList.add('clicked');
    } else if (clickedButton != this) {
        clickedButton.removeAttribute('id');
        clickedButton.classList.remove('clicked');
        this.setAttribute('id', 'clicked');
        this.classList.add('clicked');
    } else {
        clickedButton.removeAttribute('id');
        clickedButton.classList.remove('clicked');
    }

}
