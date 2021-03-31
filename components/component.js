import { context } from "../framework.js"

export default class Component extends HTMLElement {
    constructor() {
        super().attachShadow({
            mode: "open",
        })

        addEventListener("context", e => {
            console.log("context", e.detail, this.context, context)
        })

        this._state = {}
        this._context = context
    }

    get context() {
        return this._context
    }

    set context(data = {}) {
        this._context = data
        return this.context()
    }

    get state() {
        return this._state
    }

    set state(state = {}) {
        if (!Array.isArray(state) && typeof state === "object")
            Object.assign(this._state, state)
    }

    get template() {
        return this._template
    }

    set template(content) {
        const template = document.createElement("template")
        template.innerHTML = this._template = content
        this.shadowRoot.replaceChildren(template.content.cloneNode(true))
    }
}
