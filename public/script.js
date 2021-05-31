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

  ws.onopen = () => (document.querySelector('#result').innerHTML = 'connected');
  ws.onclose = () =>
    (document.querySelector('#result').innerHTML = 'disconnected');
  ws.onmessage = (response) =>
    (document.querySelector('#result').innerHTML = response.data);
});
