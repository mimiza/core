import Component from "../components/component.js"
import "../components/menu.js"

customElements.define(
    "simple-layout",
    class extends Component {
        constructor() {
            super()
            this.template = `<slot/><menu-component/>`
        }
    }
)
