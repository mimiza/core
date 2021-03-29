import "../components/menu.js"

customElements.define(
    "simple-layout",
    class extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `
            <menu-component/>
            `
        }
    }
)