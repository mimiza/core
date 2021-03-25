customElements.define('menu-component', class extends HTMLElement {
    
    constructor() {
        super()
    }
    
    set data(_) {
        this._ = _
        this.render()
        console.log('from menu',this._)
        return this
    }
    
    get data() {
        return this._
    }
    
    connectedCallback() {
        this.render()
    }
    
    render() {
        this.innerHTML = `
        <nav>
            <ul>
                ${JSON.stringify(this?._)}
                ${this.innerHTML}
            <ul>
        </nav>
        `
    }
})