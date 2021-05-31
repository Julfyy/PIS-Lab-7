const WebSocket = require('ws');
const PORT = 8000;
const server = new WebSocket.Server({ port: PORT });
const data = {
  fields: [
    {
      fieldId: 1,
      cultivatedPlant: ['wheat'],
    },
    {
      fieldId: 2,
      cultivatedPlant: ['barley', 'wheat'],
    },
    {
      fieldId: 3,
      cultivatedPlant: ['corn'],
    },
    {
      fieldId: 4,
      cultivatedPlant: ['potato'],
    },
    {
      fieldId: 5,
      cultivatedPlant: ['rye', 'barley'],
    },
  ],
};

const getPlantByFieldId = (id) => {
  let result = null;

  data.fields.forEach((field) => {
    if (field.fieldId == id) {
      result = field.cultivatedPlant;
    }
  });
  return result;
};

server.on('connection', (ws) => {
  ws.on('message', (msg) => {
    const id = JSON.parse(msg).id;
    ws.send(JSON.stringify(getPlantByFieldId(id)));
  });
});
