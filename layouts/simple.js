import Events from "../events.js"
import Component from "../components/component.js"
import "../components/menu.js"

customElements.define(
    "simple-layout",
    class extends Component {
        get template() {
            return `<slot/><menu-component/>`
        }
    }
)
