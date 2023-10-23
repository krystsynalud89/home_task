const { BaseComponent } = require("../index");

class NavigationBarComponent extends BaseComponent {
    constructor() {
        super('.navbar');
    }

    item(param) {
        const selectors = {
            logo: '.navbar-brand',
            home: '[style="display: inherit;"] [ui-sref="app.home"]',
            signIn: '[ui-sref="app.login"]',
            signUp: '[ui-sref="app.register"]',
            newArticle: '[class="nav-link active"][ui-sref-active="active"]',
            settings: '[class="nav-link"][ui-sref="app.settings"]',
            currentUser: '[class="nav-link ng-binding"]'
        };
        return this.rootEl.$(selectors[param])
    }
}

module.exports = NavigationBarComponent;

