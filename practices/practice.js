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

function removeItem(text) {
  const index = items.indexOf(text);
  if (index !== -1) {
    items.splice(index, 1);
    localStorage.setItem('keys', JSON.stringify(items));
  }

  const liElement = list.querySelectorAll('li');
  liElement.forEach((li) => {
    if (li.textContent.startsWith(text)) {
      li.remove();
    }
  });
}

list.querySelectorAll('li').forEach((li) => {
  const text = li.textContent;
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.style.marginLeft = '10px';
  removeBtn.addEventListener('click', () => {
    removeItem(text);
  });
  li.appendChild(removeBtn);
});
