import Component from "../components/component.js"
import "../components/menu.js"

customElements.define(
    "simple-layout",
    class extends Component {
        template = `<slot></slot><menu-component/>`
    }
)