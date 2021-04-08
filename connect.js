import "https://cdn.jsdelivr.net/gh/amark/gun@master/gun.js"
import "https://cdn.jsdelivr.net/gh/amark/gun@master/sea.js"
import "https://cdn.jsdelivr.net/gh/amark/gun@master/lib/open.js"
import "https://cdn.jsdelivr.net/gh/amark/gun@master/lib/load.js"
import "https://cdn.jsdelivr.net/gh/amark/gun@master/lib/radix.js"
import "https://cdn.jsdelivr.net/gh/amark/gun@master/lib/radisk.js"
import "https://cdn.jsdelivr.net/gh/amark/gun@master/lib/store.js"
import "https://cdn.jsdelivr.net/gh/amark/gun@master/lib/rindexed.js"
import "https://cdn.jsdelivr.net/gh/amark/gun@master/nts.js"

const configURL = "https://cdn.jsdelivr.net/gh/mimiza/vanilla@main/config.json"

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
