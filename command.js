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

  setText(ws, { id, text }) {
    if (!client.clientExists(id)) {
      const data = {
        status: 'error',
        type: 'unauthorized',
        content: 'setText',
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
      status: 'success',
      type: 'notification',
      type: 'setText',
    };

    client.clusterBroadcast(data);
    ws.send(JSON.stringify(data));
    console.log('setText request broadcasted');
  },

  buttonPressed(ws, { id }) {
    if (!client.clusterExists(id)) {
      const data = {
        status: 'error',
        type: 'unauthorized',
        content: 'buttonPressed',
      };

      ws.send(JSON.stringify(data));
      console.log(`buttonPressed request failed. Cluster unauthorized`);
    }

    const broadcastData = {
      type: 'buttonPressed',
    };

    const data = {
      status: 'success',
      type: 'notification',
      type: 'buttonPressed',
    };

    client.clusterBroadcast(data);
    ws.send(JSON.stringify(data));
    console.log('buttonPressed request broadcasted');
  },
};

module.exports = commands;
