document.addEventListener("DOMContentLoaded", (e) => {
    render()
})

const render = () => {
    head()
    const links = document.body.querySelectorAll("[href][data-link]")

    // links.map(e => {
    //     e.addEventListener('click', e => {
    //         e.preventDefault()
    //         console.log('link clicked', e, this)
    //     })
    // })
}

const head = () => {
    if (!document.head.querySelector("meta[charset]")) {
        var tmp = document.createElement("meta")
        tmp.setAttribute("charset", "UTF-8")
        document.head.append(tmp)
    }
    if (!document.head.querySelector("meta[viewport]")) {
        var tmp = document.createElement("meta")
        Object.assign(tmp, {
            name: "viewport",
            content: "width=device-width, initial-scale=1",
        })
        document.head.append(tmp)
    }
}

const redirect = () => {}
