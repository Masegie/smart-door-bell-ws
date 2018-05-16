const command = require('./command');
const client = require('./client');

const parsePayload = (payload) => {
  return JSON.parse(payload);
};

const routeCommand = (ws, request) => {
  const { type, content} = request;

  command[type](ws, content);
};

const clientExists = (ws) => {
  console.log(ws);
}

const broadcastToClusters = (clusters, payload) => {
  console.log(clusters);
};

module.exports = {
  parsePayload,
  routeCommand,
  clientExists,
  broadcastToClusters,
};
