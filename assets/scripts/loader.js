class Loader {
    constructor() {
        this.Selectors = {
            loader: '[data-loader]',
            loaderText: '[data-loadertext]'
        }

        this.State = {
            deactive: 'deactive',
            animate: 'animate'
        }
    }

    initialize() {
        this.loader = document.querySelector(this.Selectors.loader);
        this.loaderText = this.loader.querySelector(this.Selectors.loaderText);
        this.count();
    }

    count() {

        const delay = () => {
            if (document.readyState === 'complete'){
                this.load();
            } else {
                this.addEventListeners();
            }
        }

        const speed = 200;
        const animate = () => {
            const value = 100;
            const data = +this.loaderText.innerText;
            const time = value / speed;

            if(data < value) {
                this.loaderText.innerText = Math.ceil(data + time);
                setTimeout(animate, 7);
            } else {
                this.loaderText.innerText = value;
                setTimeout(delay, 200);
            }
        }
            this.loaderText.classList.toggle(this.State.animate);
            animate();
    }

    addEventListeners() {
        window.addEventListener('load', () => this.load());
    }

    load() {
        this.loader.classList.toggle(this.State.deactive);
    }
}