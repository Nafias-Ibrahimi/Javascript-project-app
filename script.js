const container = document.createElement('div');
container.setAttribute(
  'style',
  'width:100%; height:60px; background-color:lightblue; display:flex; align-items:center; padding:0 20px;',
);

// Nav
const nav = document.createElement('nav');
nav.setAttribute(
  'style',
  'display:flex; align-items:center; justify-content:space-between; width:100%; height:100%;',
);

// logo
const logo = document.createElement('div');
logo.textContent = 'Blush.';
logo.setAttribute(
  'style',
  'font-size:28px; font-weight:bold; font-family:Georgia,serif; color:black;',
);
nav.appendChild(logo);

// Container
const rightContainer = document.createElement('div');
rightContainer.setAttribute(
  'style',
  'display:flex; align-items:center; gap:20px;',
);

// links
const linksContainer = document.createElement('ul');
linksContainer.setAttribute(
  'style',
  'display:flex; gap:15px; list-style:none; margin:0; padding:0;',
);

const links = [
  { text: 'Shop', url: '/shop' },
  { text: 'Lookbook', url: '/lookbook' },
  { text: 'About', url: '/about' },
  { text: 'Visit Us', url: '/visit' },
  { text: 'Contact', url: '/contact' },
];

links.forEach((item) => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.textContent = item.text;
  a.href = item.url;
  a.setAttribute(
    'style',
    'text-decoration:none; color:black; font-weight:bold;',
  );
  li.appendChild(a);
  linksContainer.appendChild(li);
});

rightContainer.appendChild(linksContainer);

// img
const img = document.createElement('img');
img.src = '/img/102665.png';
img.style.width = '30px';
img.style.paddingRight = '50px';
rightContainer.appendChild(img);

nav.appendChild(rightContainer);

container.appendChild(nav);
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.appendChild(container);
