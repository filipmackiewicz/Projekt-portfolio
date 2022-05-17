class Gototop {
    constructor () {
        this.Selectors = {
            up: '[data-gototop]'
        }
    }

    initialize () {
        this.up = document.querySelectorAll(this.Selectors.up);
        this.addEventListeners();
    }

    addEventListeners () {
        this.up.forEach(element => {
            element.addEventListener('click', () => this.goToTop())
        });
    }

    goToTop () {
        window.scrollTo(0,0);
    }
}