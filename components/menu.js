customElements.define('menu-component', class extends HTMLElement {
    children = this.innerHTML

    set data(_) {
        this._ = _
        this.render()
        return this
    }

    get data() {
        return this._
    }

    createMenu(block) {
        if (Array.isArray(block)) return `<ul>${this.data.map(item => `<li>${this.createMenu(item)}</li>`).join('')}</ul>`
        else if (block?.path && block?.text) return `<a href="${block.path}" data-link>${block.text}</a>${this.createMenu(block.children)}`
        return ''
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <nav>
        ${this.createMenu(this.data)}
        ${this.children}
        </nav>
        `
    }
})