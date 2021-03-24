document.addEventListener('DOMContentLoaded', e => {
    
    render()
})

const render = () => {
    const links = document.body.querySelectorAll('[href][data-link]')
    links.map(e => {
        e.addEventListener('click', e => {
            e.preventDefault()
            console.log('link clicked', e, this)
        })
    })
}

const head = () => {
    
}

const redirect = () => {
    
}