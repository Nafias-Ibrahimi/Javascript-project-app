
const input=document.createElement("input");
input.type="text";
input.placeholder="enter letter";
input.id="letter";

const list=document.createElement("ul");

document.body.appendChild(input);
document.body.appendChild(list); 

let items=JSON.parse(localStorage.getItem("keys")) || [];
items.forEach(function(text){
    const li=document.createElement("li");
    li.textContent=text;
    list.appendChild(li);
});
input.addEventListener("keypress" , function(event){
    let code=event.charCode || keyCode;
    let value=input.value + event.key;

    let text="value:" + value + "| code:" + code;

    const item=document.createElement("li");
    item.textContent=text;
    list.appendChild(item);
})

// localStorage
items.push(text);
localStorage.setItem("keys" , JSON.stringify(items));

