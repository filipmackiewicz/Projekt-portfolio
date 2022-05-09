class Smoothscroll {
    constructor () {
        this.UiSelectors = {
            smothItems: '[data-smooth]'
        }
    }

    initialize() {
        this.smothItems = document.querySelector(this.UiSelectors.smothItems);
        this.addEventListeners();
    }

    scrollSmothly(pos, time) {
        const currentPos = window.pageYOffset;
        const start = null;
        if(time == null) time = 500;
        pos = +pos, time = +time;
        window.requestAnimationFrame(function step(currentTime) {
            start = !start ? currentTime : start;
            const progress = currentTime - start;
            if (currentPos < pos) {
                window.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos);
            } else {
                window.scrollTo(0, currentPos - ((currentPos - pos) * progress / time));
            }
            if (progress < time) {
                window.requestAnimationFrame(step);
            } else {
                window.scrollTo(0, pos);
            }
        });
    }

    addEventListeners() {
        this.smothItems.addEventListener('click', () => this.scrollSmoothly(500, 1500));
    }
}