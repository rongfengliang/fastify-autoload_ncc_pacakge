
const fp = require('fastify-plugin')
function usersPlugin(fastify, opts, done) {
    fastify.get("/users", async (req, res) => {
        res.send({
            ...fastify.dalongversion,
        })
    })
    done()
}
module.exports =fp(usersPlugin,{
    name:"users"
})
