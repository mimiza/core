import Events from '../events.js'
import Component from "../components/component.js"
import "../components/menu.js"

customElements.define(
    "simple-layout",
    class extends Component {
        template = `<slot/><menu-component/>`
        connectedCallback() {
            this.evs = new Events()
            setTimeout(()=> {
                this.evs.publish('yey', {
                    abc: 123
                })}, 3000)

        }
    }
)