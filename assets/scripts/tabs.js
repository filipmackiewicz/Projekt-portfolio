class Tabs {
    constructor() {
        this.Selectors = {
            allBtn: '[data-all]',
            sitesBtn: '[data-sites]',
            appsBtn: '[data-apps]',
            item: '[data-item]',
            site: '[data-site]',
            app: '[data-app]'
        }

        this.State = {
            deactive: 'is-deactive',
            active: 'is-active'
        }
    }

    initialize() {
        this.allBtn = document.querySelector(this.Selectors.allBtn);
        this.sitesBtn = document.querySelector(this.Selectors.sitesBtn);
        this.appsBtn = document.querySelector(this.Selectors.appsBtn);
        this.item = document.querySelectorAll(this.Selectors.item);
        this.site = document.querySelectorAll(this.Selectors.site);
        this.app = document.querySelectorAll(this.Selectors.app);
        this.addEventListeners();
    }

    showAll() {
        this.allBtn.classList.toggle('is-active');
        this.appsBtn.classList.remove('is-active');
        this.sitesBtn.classList.remove('is-active');
        this.item.forEach(element => {
            element.classList.remove('is-deactive');
        })
    }

    showSites() {
        this.allBtn.classList.remove('is-active');
        this.appsBtn.classList.remove('is-active');
        this.sitesBtn.classList.toggle('is-active');
        this.item.forEach(element => {
            element.classList.remove('is-deactive');
        })
        this.app.forEach(element => {
            element.classList.toggle('is-deactive');
        });
    }

    showApps() {
        this.sitesBtn.classList.remove('is-active');
        this.allBtn.classList.remove('is-active');
        this.appsBtn.classList.toggle('is-active');
        this.item.forEach(element => {
            element.classList.remove('is-deactive');
        })
        this.site.forEach(element => {
            element.classList.toggle('is-deactive');
        })
    }

    addEventListeners() {
        this.sitesBtn.addEventListener('click', () => this.showSites());
        this.appsBtn.addEventListener('click', () => this.showApps());
        this.allBtn.addEventListener('click', () => this.showAll());
    }

}