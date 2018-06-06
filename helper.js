const command = require('./command');
const client = require('./client');

const parsePayload = (payload) => {
  return JSON.parse(payload);
};

const routeCommand = (ws, request) => {
  const { type, content} = request;
  const commandFunc = command[type];

  if (typeof commandFunc === 'undefined') {
    console.log('Bad request');
  } else {
    commandFunc(ws, content);
  }
};

module.exports = {
  parsePayload,
  routeCommand,
};
