const fp = require('fastify-plugin')
function login(fastify, opts, done) {
    fastify.get("/login", async (req, res) => {
        res.send({
            version:"v3333",
            login:"login"
        })
    })
    done()
}

module.exports = fp(login, {
    name: "login"
})