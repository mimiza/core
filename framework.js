document.addEventListener('DOMContentLoaded', e => {

    render()
})

const render = () => {
    head()
    const links = document.body.querySelectorAll('[href][data-link]')
    links.map(e => {
        e.addEventListener('click', e => {
            e.preventDefault()
            console.log('link clicked', e, this)
        })
    })
}

const head = () => {
    if (!document.head.querySelector('meta[charset]'))
        document.head.prepend(document.createElement('meta').setAttribute('charset', 'UTF-8'))
    if (!document.head.querySelector('meta[viewport]'))
        document.head.prepend(document.createElement('meta').setAttribute('name', 'viewport').setAttribute('content', 'width=device-width, initial-scale=1'))
}

const redirect = () => {

}