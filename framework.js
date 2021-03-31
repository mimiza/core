document.addEventListener("DOMContentLoaded", (e) => {
    head()
    render()
})

const render = () => {}

// set head
const head = () => {
    var tmp
    // set charset to UTF-8
    if (!document.head.querySelector("meta[charset]")) {
        tmp = document.createElement("meta")
        tmp.setAttribute("charset", "UTF-8")
        document.head.prepend(tmp)
    }

    // make the website responsive to different devices
    if (!document.head.querySelector("meta[name=viewport]")) {
        tmp = document.createElement("meta")
        Object.assign(tmp, {
            name: "viewport",
            content: "width=device-width, initial-scale=1",
        })
        document.head.append(tmp)
    }
}

export const context = {}

export const setContext = (data = {}) => {
    Object.assign(context, data)
    document.dispatchEvent(new CustomEvent('context', {
        detail: {
            context
        },
        bubbles: true,
        composed: true
    }))
    return context
}

export const html = (content = '') => {
    console.log('yee', content)
    const parser = new DOMParser()
    return parser.parseFromString(content, 'text/html').body
}

String.prototype.html = html