const rateButtons = document.querySelectorAll('.rating-button');


for (let button of rateButtons) {
    button.addEventListener('click', isClicked);
}

function isClicked() {
    let clickedButton = document.querySelector("#clicked");
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
    const endRate = this.getAttribute('data');
    const result = document.querySelector('.result');
    result.textContent = `You selected ${endRate} out of 5`;
}

const submitButton = document.querySelector('.submit-button');

submitButton.addEventListener('click', () => {
    const results = document.querySelector('.result-form');
    const submit = document.querySelector('.submit-form');
    if (results.classList.contains('disabled')) {
        submit.classList.toggle('disabled');
        results.classList.toggle('disabled');
    }
})