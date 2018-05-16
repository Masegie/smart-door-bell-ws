const client = require('./client');
const {
  clientExists,
  broadcastToClusters,
} = require('./helper');

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

  soundOn(ws) {
    
  },
};

module.exports = commands;
