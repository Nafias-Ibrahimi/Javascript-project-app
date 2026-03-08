const container = document.createElement('div'); // fixed typo
const nav = document.createElement('nav');

const links = [
  { text: 'Shop', url: '/shop' },
  { text: 'Lookbook', url: '/lookbook' },
  { text: 'About', url: '/about' },
  { text: 'Visit Us', url: '/visit' },
  { text: 'Contact', url: '/contact' },
];

// Add links
links.forEach((item) => {
  const li = document.createElement('li');
  const a = document.createElement('a');

  li.className = 'nav-list';
  a.className = 'nav-item';

  a.textContent = item.text;
  a.href = item.url;

  li.appendChild(a);
  nav.appendChild(li);
});

// Add image
const img = document.createElement('img');
img.src = '/img/102665.png';
img.style.width = '30px';
nav.appendChild(img);

// Style container
container.setAttribute('class', 'container');
container.setAttribute('id', 'container');
container.setAttribute('title', 'container');
container.setAttribute(
  'style',
  'height:50px; background-color:red; margin-top:0; display:flex; align-items:center; gap:20px; padding:0 10px; list-style:none;',
);

document.body.style.margin = '0';
document.body.style.padding = '0';

container.appendChild(nav);
document.body.appendChild(container);

// Style nav
nav.setAttribute(
  'style',
  'display:flex; align-items:center; gap:20px; list-style:none; width:100%; height:100%; margin:0; padding:0; justify-content:flex-end;',
);
