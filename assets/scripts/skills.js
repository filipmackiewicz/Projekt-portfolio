class Skills {
    constructor () {
        this.Selectors = {
            btn: '[data-btn]',
            btn2: '[data-btn2]',
            description: '[data-description]',
            container: '[data-container]',
            navUp: '[data-navup]',
            navDown: '[data-navdown]',
            scroll: '[data-scroll]',
            skill: '[data-skill]'
        }

        this.state = {
            open: 'is-open'
        }
    }

    initialize (){
        this.scroll = document.querySelector(this.Selectors.scroll);
        this.navDown = document.querySelector(this.Selectors.navDown);
        this.navUp = document.querySelector(this.Selectors.navUp);
        this.skill = document.querySelectorAll(this.Selectors.skill);
        this.toggle();
        this.addEventListeners();
    }

    toggle () {
        const content = this.skill;
        const self = this;
        content.forEach(function(el){
            const button = el.querySelector(self.Selectors.btn);
            const button2 = el.querySelector(self.Selectors.btn2);
            const description = el.querySelector(self.Selectors.description);
            button.addEventListener("click", function () {
                description.classList.toggle(self.state.open);
                button2.classList.toggle(self.state.open);
                description.classList.contains("is-open") ? (button.innerHTML = "Zwiń opis") : (button.innerHTML = "Rozwiń opis");
                description.classList.contains("is-open") ? (description.style.maxHeight = description.scrollHeight.toString() + "px") : (description.style = "");
            
            }, false)

            button2.addEventListener("click", function () {
                description.classList.toggle(self.state.open);
                button2.classList.toggle(self.state.open);
                description.classList.contains("is-open") ? (button.innerHTML = "Zwiń opis") : (button.innerHTML = "Rozwiń opis");
                description.classList.contains("is-open") ? (description.style.maxHeight = description.scrollHeight.toString() + "px") : (description.style = "");
            
            }, false)
        });
    }

    scrollDown () {
        this.scroll.scrollTo(
            {    top: this.scroll.scrollTop + this.scroll.clientHeight,
                behavior: 'smooth'}
            );
    }

    scrollUp () {
        this.scroll.scrollTo(
            {    top: this.scroll.scrollTop - this.scroll.clientHeight,
                behavior: 'smooth'}
            );
    }


    addEventListeners () {
        this.navDown.addEventListener('click', () => this.scrollDown());
        this.navUp.addEventListener('click', () => this.scrollUp());
    }
}