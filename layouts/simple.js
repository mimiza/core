import Events from "../events.js"
import Component from "../components/component.js"
import "../components/menu.js"

customElements.define(
    "simple-layout",
    class extends Component {
        get template() {
            return `
            <simple-header>
            <menu-component/>
            </simple-header>
            <simple-page>
            Lorem ipsum
            </simple-page>
            <simple-footer>
            Coded with love by mimiza
            </simple-footer>
            `
        }
    }
)