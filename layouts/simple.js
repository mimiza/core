import Component from "../components/component.js"
import "../components/menu.js"

customElements.define(
    "simple-layout",
    class extends Component {
        render() {
            return `<menu-component/>`
        }
    }
)