const client = require('./client');
const helper = require('./helper');

const commands = {
    register(ws, payload) {
        client.register(payload.id, payload.type, ws);

        const data = {
            type: 'registration',
            content: { id: payload.id },
        };

        ws.send(JSON.stringify(data));
        console.log(`Client ${payload.id} has been registered`);
    },

    soundOn(ws, { id }) {
        if (!client.clientExists(id)) {
            const data = {
                type: 'error',
                content: {
                    msg: 'unauthorized',
                },
            };

            ws.send(JSON.stringify(data));
            console.log(`soundOn request failed. Client unauthorized`);
        }

        const broadcastData = {
            type: 'soundOn',
        };

        const data = {
            type: 'soundOn',
            content: {
                msg: 'success',
            },
        };

        client.clusterBroadcast(broadcastData);
        ws.send(JSON.stringify(data));
        console.log('soundOn request broadcasted');
    },

    setText(ws, { id, text }) {
        if (!client.clientExists(id)) {
            const data = {
                type: 'error',
                content: {
                    msg: 'unauthorized',
                },
            };

            ws.send(JSON.stringify(data));
            console.log(`soundOn request failed. Client unauthorized`);
        }

        const broadcastData = {
            type: 'setText',
            content: {
                text,
            },
        };

        const data = {
            type: 'setText',
            content: {
                msg: 'success',
            },
        };

        client.clusterBroadcast(broadcastData);
        ws.send(JSON.stringify(data));
        console.log('setText request broadcasted');
    },

    buttonPressed(ws, { id }) {
        if (!client.clusterExists(id)) {
            const data = {
                type: 'error',
                content: {
                    msg: 'unauthorized',
                },
            };

            ws.send(JSON.stringify(data));
            console.log(`buttonPressed request failed. Cluster unauthorized`);
        }

        const broadcastData = {
            type: 'buttonPressed',
        };

        const data = {
            type: 'buttonPressed',
            content: {
                msg: 'success',
            },
        };

        client.clientBroadcast(broadcastData);
        ws.send(JSON.stringify(data));
        console.log('buttonPressed request broadcasted');
    },
};

module.exports = commands;