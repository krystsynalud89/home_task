class BaseComponent {
    constructor(elem) {
        this.rootElement = elem;
    }

    get rootEl() {
        return $(this.rootElement)
    }

}

module.exports = BaseComponent;