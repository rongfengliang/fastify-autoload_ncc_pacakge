const fp = require('fastify-plugin')

function initPlugin(fastify, opts, done){
    fastify.get("/", async (req, res) => {
        res.send("default page")
    })
    fastify.decorate("dalongversion",{
        namev:"dalong",
        agev:33333
    })
    done()
}
module.exports = fp(initPlugin,{
    name:"init"
})

