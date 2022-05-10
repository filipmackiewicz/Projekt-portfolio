class Menu {
    constructor () {
        this.Selectors = {
            bars: '[data-bars]',
            links: '[data-links]',
            menu: '[data-menu]'
        }

        this.State = {
            visible: 'is-visible',
            animate: 'animate'
        }
    }

    initialize() {
        this.bars = document.querySelector(this.Selectors.bars);
        this.links = document.querySelector(this.Selectors.links);
        this.menu = document.querySelector(this.Selectors.menu);
        this.addEventListeners();
    }

    showMenu() {
        this.links.classList.toggle(this.State.visible);
        this.bars.classList.toggle(this.State.animate);
    }

    addEventListeners() {
        this.menu.addEventListener('click', () => this.showMenu());
    }

}