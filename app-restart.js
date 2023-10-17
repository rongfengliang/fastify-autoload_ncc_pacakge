require('dotenv').config()
const Fastify = require('fastify')
const path = require("path")
const autoLoad = require('@fastify/autoload');

const { restartable } = require('@fastify/restartable')

const config = require('./config')


async function createApp(fastify, opts) {
    const app = fastify(opts)

    app.get('/restart', async () => {
        await app.restart()
        return { status: 'ok' }
    })

    app.addHook('onClose', async () => {
        if (!app.closingRestartable) {
            console.log('closing the app because of restart')
        }
        else {
            console.log('closing the app because server is stopping')
        }
    })

    return app
}


// old way
// const app = Fastify({
//     logger: true,
//     ignoreDuplicateSlashes: true,
// }
// );


async function initapp() {
    const app = await restartable(createApp, { logger: true })
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
    // call restart() if you want to restart
    process.on('SIGUSR1', () => {
        console.log('Restarting the server')
        app.restart()
    })

    process.once('SIGINT', () => {
        console.log('Stopping the server')
        app.close()
    })
}

initapp()