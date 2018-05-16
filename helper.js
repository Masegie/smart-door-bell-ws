const command = require('./command');
const client = require('./client');

const parsePayload = (payload) => {
  return JSON.parse(payload);
};

const routeCommand = (ws, request) => {
  const { type, content} = request;

  command[type](ws, content);
};

module.exports = {
  parsePayload,
  routeCommand,
};
