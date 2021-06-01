window.addEventListener('load', () => {
  const input = document.getElementById('input');
  const button = document.getElementById('submitButton');
  const resultField = document.getElementById('result');

  const url = 'ws://localhost:8000';
  const ws = new WebSocket(url);

  button.addEventListener('click', (event) => {
    event.preventDefault();

    ws.send(JSON.stringify({ id: input.value }));
    input.value = '';
  });

  ws.onopen = () =>
    (document.querySelector('#connection').innerHTML = 'Connected');
  ws.onclose = () =>
    (document.querySelector('#connection').innerHTML = 'Disconnected');
  ws.onmessage = (response) => {
    resultField.innerHTML = `${response.data} grows on this field`;
  };
});
