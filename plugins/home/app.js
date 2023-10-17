const fp = require('fastify-plugin')
const Hashids = require('hashids/cjs')
const hashids = new  Hashids('this is my salt', 16)
function homePlugin(fastify, opts, done) {
    fastify.get("/home", async (req, res) => {
        let info = {
            ...fastify.dalongversion,
            id: hashids.encode(1, 2, 3),
        }
        console.log(`------${JSON.stringify(info)}----`)
        res.send(info)
    })
    done()
}
module.exports = fp(homePlugin, {
    name: "home"
})
