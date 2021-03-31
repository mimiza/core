import Component from './component.js'

customElements.define('smart-link', class extends Component {
    render() {
        return `<a href="/">Test</a>`
    }
})