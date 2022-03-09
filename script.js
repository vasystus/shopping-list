function addItem() {

// Create an "li" node:
  const node = document.createElement("li");
  const inputValue = document.getElementById("input").value;
// Create a text node:
  const textnode = document.createTextNode(inputValue);
  // Append the text node to the "li" node:
  node.appendChild(textnode);

  // Append the "li" node to the list:
  document.getElementById("list").appendChild(node);
  // create span and append it to the "li" node:
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  node.appendChild(span);
  // Click on a close button to hide the current list item
  const close = document.getElementsByClassName("close");
  let i;
  for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    const div = this.parentElement;
    div.style.display = "none";
  }
 }

}


// Add a "checked" symbol when clicking on a list item
const list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
