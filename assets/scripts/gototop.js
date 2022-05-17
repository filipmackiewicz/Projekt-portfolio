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

    goToTop () {
        window.scrollTo(0,0);
    }

    addEventListeners () {
        this.up.addEventListener('click', () => this.goToTop());
    }
}