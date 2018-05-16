const client = require('./client');
const helper = require('./helper');

const commands = {
  register(ws, payload) {
    const id = client.register(payload.type, ws);

    const data = {
      status: 'success',
      type: 'notification',
      content: { id },
    };

    ws.send(JSON.stringify(data));
    console.log(`Client ${id} has been registered`);
  },

  soundOn(ws, { id }) {
    if (!client.clientExists(id)) {
      const data = {
        status: 'error',
        type: 'unauthorized',
        content: 'soundOn',
      };

      ws.send(JSON.stringify(data));
      console.log(`soundOn request failed. Client unauthorized`);
    }

    const broadcastData = {
      type: 'soundOn',
    };

    const data = {
      status: 'success',
      type: 'notification',
      type: 'soundOn',
    };

    client.clusterBroadcast(data);
    ws.send(JSON.stringify(data));
    console.log('soundOn request broadcasted');
  },
};

module.exports = commands;
