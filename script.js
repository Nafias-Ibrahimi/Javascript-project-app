const container = document.createElement("div");
const nav = document.createElement("nav");

const img=document.createElement("img");
img.src="/img/102665.png";
img.style.width="40px";
nav.appendChild(img);


const links = [
  { text: "Home", url: "/home" },
  { text: "About", url: "/about" },
  { text: "Contact", url: "/contact" },
];
// add the link
for (let i = 0; i < links.length; i++) {
  const li = document.createElement("li");
  const a = document.createElement("a");

  li.className = "nav-list";
  a.className = "nav-item";

  a.textContent = links[i].text;
  a.href = links[i].url;

  li.appendChild(a);
  nav.appendChild(li);
}

// style container
container.setAttribute("class", "container");
container.setAttribute("id", "container");
container.setAttribute("title", "container");
container.setAttribute(
  "style",
  "width:100vw; height:50px; background-color:red; margin-top:0; display:flex; align-items:center; gap:20px; padding:0 10px; list-style:none;",
);

document.body.style.margin = "0";
document.body.style.padding = "0";

container.appendChild(nav);
document.body.appendChild(container);

nav.setAttribute(
  "style",
  "display:flex; align-items:center; gap:20px; list-style:none; width:100%; height:100%; margin:0; padding:0;",
);
