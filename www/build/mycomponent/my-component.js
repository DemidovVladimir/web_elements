/*! Built with http://stenciljs.com */
const { h } = window.mycomponent;

class MyComponent {
    constructor() {
        this.start = 1;
        this.max = 100;
        this.min = 0;
        this.step = 1;
    }
    componentWillLoad() {
        this.value = this.start;
    }
    increment() {
        const newValue = this.value + this.step;
        if (newValue > this.max) {
            this.value = this.max;
        }
        else {
            this.value = newValue;
        }
    }
    decrement() {
        const newValue = this.value - this.step;
        if (newValue < this.min) {
            this.value = this.min;
        }
        else {
            this.value = newValue;
        }
    }
    render() {
        return (h("div", null,
            h("button", { class: "button-1", type: "button", onClick: () => this.increment() }, "+"),
            h("span", null, this.value),
            h("button", { class: "button-2", type: "button", onClick: () => this.decrement() }, "-")));
    }
    static get is() { return "my-component"; }
    static get properties() { return { "max": { "type": Number, "attr": "max" }, "min": { "type": Number, "attr": "min" }, "start": { "type": Number, "attr": "start" }, "step": { "type": Number, "attr": "step" }, "value": { "state": true } }; }
    static get style() { return "my-component .button-1 {\n  background-color: red; }\n\nmy-component .button-2 {\n  background-color: green; }"; }
}

export { MyComponent };
