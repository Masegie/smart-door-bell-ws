const WebSocket = require('ws');
const {
  routeCommand,
  parsePayload,
} = require('./helper');

// Setup server
const port = 8181;
const server = new WebSocket.Server({ port });
const clients = {};

// Start server
server.on('connection', (ws) => {
  console.log('Connection initiated');

  ws.on('message', (payload) => {
    routeCommand(ws, parsePayload(payload));
  });

  ws.on('close', (ws, code, reason) => {
    console.log(`Code: ${code}`);
    console.log(`Reason: ${reason}`);
  });

  ws.on('error', (ws, err) => {
    console.log(err);
  });
});

console.log(`Server started on port ${port}`);
