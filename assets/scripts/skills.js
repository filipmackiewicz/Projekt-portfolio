class Skills {
    constructor () {
        this.UiSelectors = {
            btn: '[data-btn]',
            btn2: '[data-btn2]',
            description: '[data-description]',
            container: '[data-container]',
            navUp: '[data-navup]',
            navDown: '[data-navdown]'
        }

        this.state = {
            open: 'is-open'
        }
    }

    initialize (){
        this.toggle();
    }

    toggle () {
        const content = Array.from(document.querySelectorAll(".c-box-skill"));
        const self = this;
        console.log(content);
        content.forEach(function(el){
            const button = el.querySelector(self.UiSelectors.btn);
            const button2 = el.querySelector(self.UiSelectors.btn2);
            const description = el.querySelector(self.UiSelectors.description);
            const navUp = el.querySelector(self.UiSelectors.navUp);
            const navDown = el.querySelector(self.UiSelectors.navDown);
            button.addEventListener("click", function () {
                description.classList.toggle(self.state.open);
                button2.classList.toggle(self.state.open);
                description.classList.contains("is-open") ? (button.innerHTML = "Zwiń opis") : (button.innerHTML = "Rozwiń opis");
            
            }, false)

            button2.addEventListener("click", function () {
                description.classList.toggle(self.state.open);
                button2.classList.toggle(self.state.open);
                description.classList.contains("is-open") ? (button.innerHTML = "Zwiń opis") : (button.innerHTML = "Rozwiń opis");
            
            }, false)
        });
    }
}