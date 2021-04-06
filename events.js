import {
    randomKey
} from './utils.js'

const events = new Comment('event-bus')
const subscriptions = {}

export default class Events {
    constructor() {
        this.events = events
        this.subscriptions = subscriptions
    }

    subscribe(event, callback) {
        const id = randomKey()
        this.subscriptions[id] = {
            id,
            event,
            callback
        }
        this.events.addEventListener(event, callback)
        return this
    }

    unsubscribe(id) {
        if (id) this.events.removeEventListener(this.subscriptions?.[id]?.event, this.subscriptions?.[id]?.callback)
        else {
            // if no id, unsubscribe all subscriptions
            Object.keys(this.subscriptions).map(subscriber => this.events.removeEventListener(subscriber.event, subscriber.callback))
            // reset subscriptions
            this.subscriptions = {}
        }
        return this
    }

    publish(event, detail) {
        this.events.dispatchEvent(new CustomEvent(event, {
            detail
        }))
        return this
    }
}