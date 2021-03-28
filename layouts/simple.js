import "../components/menu.js"

customElements.define(
    "simple-layout",
    class extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `
            <menu-component/>
        `
            this.querySelector("menu-component").data = [
                { path: "/tests/en/" },
                { path: "/wrongway/" },
                { path: "/tests/" },
            ]
        }
    }
)
