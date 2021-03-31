import Component from './component.js'
import './link.js'

customElements.define('menu-component', class extends Component {
    createMenu(block) {
        if (Array.isArray(block)) return `<ul>${this.state?.data?.map(block => `<li>${this.createMenu(block)}</li>`).join('')}</ul>`
        else if (block?.path && block?.text) return `<smart-link href="${block.path}">${block.text}</smart-link>${this.createMenu(block.children)}`
        return ''
    }

    render() {
        return `
        <nav>
        ${this.createMenu(this.state?.data)}
        </nav>
        `
    }
})