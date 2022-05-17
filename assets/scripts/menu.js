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
        this.link = document.querySelectorAll(this.Selectors.link);
        this.addEventListeners();
    }

    showMenu() {
        this.links.classList.toggle(this.State.visible);
        this.bars.classList.toggle(this.State.animate);
        
    }

    closeMenu() {
        this.links.classList.remove(this.State.visible);
    }

    addEventListeners() {
        this.menu.addEventListener('click', () => this.showMenu());
        this.link.forEach(element => {
            element.addEventListener('click', () => this.closeMenu());
        });
    }

}