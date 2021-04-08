import Gun from "gun"
import "gun/lib/open"
import "gun/lib/load"
import "gun/sea"
import "gun/lib/radix"
import "gun/lib/radisk"
import "gun/lib/store"
import "gun/lib/rindexed"
import "gun/nts"

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
