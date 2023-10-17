require('dotenv').config()
const Fastify = require('fastify')
const path = require("path")
const autoLoad = require('@fastify/autoload');
const config = require('./config')

const app = Fastify({
    logger: true,
    ignoreDuplicateSlashes: true,
}
);

app.register(autoLoad, {
    dir: path.join(__dirname, config.pluginPath)
})
app.listen({
    port: 3000,
    host: '0.0.0.0',
    backlog: 511
}, (err, address) => {
    if (err) {
        console.log(err)
        process.exit(1)
    } else {
        console.log(`Server listening on ${address}`)
    }
})