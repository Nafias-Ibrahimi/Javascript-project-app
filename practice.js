const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'enter letter';
input.id = 'letter';

const list = document.createElement('ul');

document.body.appendChild(input);
document.body.appendChild(list);

const items = JSON.parse(localStorage.getItem('keys')) || [];

// Display previously saved items
items.forEach((text) => {
  const li = document.createElement('li');
  li.textContent = text;
  list.appendChild(li);
});

// Key press listener
input.addEventListener('keypress', (event) => {
  const code = event.charCode || event.keyCode;
  const value = input.value + event.key;

  const text = `value: ${value} | code: ${code}`;

  // Add new item to the list
  const item = document.createElement('li');
  item.textContent = text;
  list.appendChild(item);

  // Save to localStorage
  items.push(text);
  localStorage.setItem('keys', JSON.stringify(items));
});
