
function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

// Create element to inject in page
var newEl = document.createElement('div');
newEl.setAttribute("style","-webkit-box-flex: 0;-ms-flex: none;flex: none;width: .5%;background-color: white;")
//Get element to insert after
var ref = document.querySelector('#left-container');

insertAfter(newEl, ref);

var x = document.getElementById("left-container'").previousSibling