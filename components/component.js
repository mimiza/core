import {
    context
} from "../framework.js"

export default class Component extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({
            mode: "open",
        })
        this._state = {}
        this._context = context
        this.update()
        console.log(this.localName)
    }

    get context() {
        return this._context
    }

    set context(data = {}) {
        this._context = data
        return this.context
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
        this._template = content || this._template
        return content
    }

    update() {
        // clone template into shadowDOM
        if (this.template) {
            const template = document.createElement("template")
            template.innerHTML = this.template
            this.shadowRoot.replaceChildren(template.content.cloneNode(true))
        }
    }
}