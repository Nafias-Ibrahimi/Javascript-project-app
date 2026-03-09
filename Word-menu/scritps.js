const menus = [
  'Home',
  'Insert',
  'Design',
  'Layout',
  'References',
  'Mailings',
  'Review',
  'View',
  'Developer',
  'Help',
];

// Menu container
const menu = document.createElement('div');
document.body.appendChild(menu);
menu.style.display = 'flex';
menu.style.background = '#e9e9e9';
menu.style.padding = '5px';

// Content box
const content = document.createElement('div');
document.body.appendChild(content);
content.style.height = '120px';
content.style.border = '1px solid #ccc';
content.style.marginTop = '5px';

// Tabs array
const tabs = [];

// Create tabs
menus.forEach((name, i) => {
  const tab = document.createElement('div');
  tab.innerText = name;
  tab.style.padding = '8px 16px';
  tab.style.marginRight = '4px';
  tab.style.border = '1px solid #ccc';
  tab.style.cursor = 'pointer';
  tab.style.background = i === 0 ? 'white' : '#ddd'; // First tab active

  // Click handler
  tab.onclick = () => {
    tabs.forEach((t) => {
      t.style.background = '#ddd';
    });
    tab.style.background = 'white';
  };

  menu.appendChild(tab);
  tabs.push(tab);
});
