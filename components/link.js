import Component from "./component.js"

customElements.define(
    "smart-link",
    class extends Component {
        get template() {
            return `<a href="/">Test</a>`
        }
    }
)
