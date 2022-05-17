class Gototop {
    constructor () {
        this.Selectors = {
            up: '[data-gototop]'
        }
    }

    initialize () {
        this.up = document.querySelector(this.Selectors.up);
        this.addEventListeners();
    }

    addEventListeners () {
        this.up.addEventListener('click', () => this.goToTop());
    }

    goToTop () {
        window.scrollTo(0,0);
    }
}