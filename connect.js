import "https://cdn.jsdelivr.net/gh/amark/gun@latest/gun.js"
import "https://cdn.jsdelivr.net/gh/amark/gun@latest/sea.js"
import "https://cdn.jsdelivr.net/gh/amark/gun@latest/lib/open.js"
import "https://cdn.jsdelivr.net/gh/amark/gun@latest/lib/load.js"
import "https://cdn.jsdelivr.net/gh/amark/gun@latest/lib/radix.js"
import "https://cdn.jsdelivr.net/gh/amark/gun@latest/lib/radisk.js"
import "https://cdn.jsdelivr.net/gh/amark/gun@latest/lib/store.js"
import "https://cdn.jsdelivr.net/gh/amark/gun@latest/lib/rindexed.js"
import "https://cdn.jsdelivr.net/gh/amark/gun@latest/nts.js"

// get config
const config = {}
const configURL = "https://cdn.jsdelivr.net/gh/mimiza/vanilla@main/config.json"
try {
    var request = await fetch(configURL)
    Object.assign(config, ((await request?.json()) || {}))
} catch {}

const gun = Gun({
    peers: config.peers,
    localStorage: false,
})
const sea = Gun.SEA
const user = gun.user()
const pair = await sea.pair()
await user.auth(pair)

// get cert from system common graph
const cert = await gun.get(`~${config.system.pub}`).get('cert').get('lead')

for (const form of document.forms) {
    form.addEventListener("submit", async function (e) {
        e.preventDefault()
        const formData = new FormData(this)
        const lead = {}
        formData.append("url", document.URL)
        formData.forEach((v, k) => {
            lead[k] = v
        })
        console.log(lead)
        const secret = await sea.secret(config.system.pub, pair)
        const encrypted = await sea.encrypt(JSON.stringify(lead), secret)
        gun.get(`~${config.system.pub}`).get('lead').put(encrypted, null, {cert})
    })
}