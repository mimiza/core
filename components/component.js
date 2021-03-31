import {
    context
} from '../framework.js'

export default class Component extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({
            mode: 'open'
        })

        this.state = {}
        this.context = context
    }

    connectedCallback() {
        const html = this?.render?.()
        console.log('com cb', html)
        this.shadowRoot.replaceChildren(this?.render?.()?.html?.()?.cloneNode(true))
        this.shadowRoot.addEventListener('context', function (e) {
            console.log('context', e.detail, this.context)
            //this.context
        })
    }

    get state() {
        return this._state
    }

    set state(state) {
        if (!Array.isArray(state) && typeof state !== 'object')
            Object.assign(this._state, state)
    }

    render(html = '') {
        return html
    }
}