const fp = require('fastify-plugin')

function appsPlugin(fastify, opts, next) {
    fastify.get("/app", async (req, res) => {
        let info = {
            ...req.dalong,
            ...fastify.dalongversion,
            id: "dalong app demo"
        }
        console.log(`------${JSON.stringify(info)}----`)
        res.send(info)
    })
    next()
}

module.exports = fp(appsPlugin, {
    name:"app"
})