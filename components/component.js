import {
    context
} from '../framework.js'

export default class Component extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({
            mode: 'open'
        })
        this.addEventListener('context', function (e) {
            console.log('context', e.detail, this.context)
            //this.context
        })
        this._state = {}
        this.context = context
        const html = this?.render?.()?.html?.()
        if (html) this.shadowRoot.replaceChildren(html)
    }

    connectedCallback() {
        console.log('connected')
    }

    get state() {
        return this._state
    }

    set state(state = {}) {
        if (!Array.isArray(state) && typeof state === 'object')
            Object.assign(this._state, state)
    }

    render(content = '') {
        return content.html()
    }
}