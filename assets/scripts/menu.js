class Menu {
    constructor () {
        this.UiSelectors = {
            bar: '[data-bar]',
            links: '[data-links]',
            menu: '[data-menu]',
        }
    }

    initialize() {
        this.bar = document.querySelector(this.UiSelectors.bar);
        this.links = document.querySelector(this.UiSelectors.links);
        this.menu = document.querySelector(this.UiSelectors.menu);
        this.addEventListeners();
        console.log(this.bar);
    }

    showMenu() {
        this.links.classList.toggle('is-visible');
        this.bar.classList.toggle('animate');
    }

    addEventListeners() {
        this.menu.addEventListener('click', () => this.showMenu());
    }

}