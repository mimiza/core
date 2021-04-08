import Gun from "./gun/gun.js"
import "./gun/lib/open.js"
import "./gun/lib/load.js"
import "./gun/sea.js"
import "./gun/lib/radix.js"
import "./gun/lib/radisk.js"
import "./gun/lib/store.js"
import "./gun/lib/rindexed.js"
import "./gun/nts.js"

const configURL = "https://www.mimiza.com/config.json"

fetch(configURL)
    .then(response => response.json())
    .then(config => init(config))
    .catch(e => {
        console.log(e)
    })

const init = config => {
    const gun = Gun({ peers: config.peers, localStorage: false })
    const sea = Gun.SEA
    const user = gun.user()
    console.log(config, gun, sea, user)
}
