class Menu {
    constructor () {
        this.Selectors = {
            bars: '[data-bars]',
            links: '[data-links]',
            menu: '[data-menu]',
            link: '[data-link]'
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
        this.link = document.querySelector(this.Selectors.link);
        this.addEventListeners();
    }

    showMenu() {
        this.links.classList.toggle(this.State.visible);
        this.bars.classList.toggle(this.State.animate);
        console.log("zamykam");
    }

    addEventListeners() {
        this.menu.addEventListener('click', () => this.showMenu());
        this.link.addEventListener('click', () => this.showMenu());
    }

}