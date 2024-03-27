//your JS code here. If required.
// script.js

document.getElementById('btn').addEventListener('click', async function() {
  const text = document.getElementById('text').value;
  const delay = parseInt(document.getElementById('delay').value);

  if (!text || !delay) {
    alert('Please provide both text and delay value.');
    return;
  }

  document.getElementById('output').innerText = '';

  await delayFunction(delay);
  
  document.getElementById('output').innerText = text;
});

function delayFunction(delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

