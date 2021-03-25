document.addEventListener("DOMContentLoaded", (e) => {
    render()
})

const render = () => {
    // set head
    head()
    
    // check all link clicks before redirect
    Array.from(document.body.querySelectorAll("[href][data-link]")).map(e => {
        e.addEventListener('click', e => {
            e.preventDefault()
            console.log('link clicked', e, this)
        })
    })
}

// set head
const head = () => {
    // set charset to UTF-8
    if (!document.head.querySelector("meta[charset]")) {
        var tmp = document.createElement("meta")
        tmp.setAttribute("charset", "UTF-8")
        document.head.prepend(tmp)
    }
    
    // make the website responsive to different devices
    if (!document.head.querySelector("meta[name=viewport]")) {
        var tmp = document.createElement("meta")
        Object.assign(tmp, {
            name: "viewport",
            content: "width=device-width, initial-scale=1",
        })
        document.head.append(tmp)
    }
}

const redirect = () => {}
