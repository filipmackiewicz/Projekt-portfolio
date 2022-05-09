class Menu {
    constructor () {
        this.UiSelectors = {
            bars: '[data-bars]',
            links: '[data-links]',
            menu: '[data-menu]',
        }
    }

    initialize() {
        this.bars = document.querySelector(this.UiSelectors.bars);
        this.links = document.querySelector(this.UiSelectors.links);
        this.menu = document.querySelector(this.UiSelectors.menu);
        this.addEventListeners();
    }

    showMenu() {
        this.links.classList.toggle('is-visible');
        this.bars.classList.toggle('animate');
    }

    addEventListeners() {
        this.menu.addEventListener('click', () => this.showMenu());
    }

}