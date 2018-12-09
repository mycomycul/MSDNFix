// Create Divider Element between the Sidebar and the primary column on page load
var dividerColumn = document.createElement('div');
dividerColumn.setAttribute("style", "-webkit-box-flex: 0;-ms-flex: none;flex: none;width: .5%;background-color: white;")
dividerColumn.id = "dividerColumn";
dividerColumn.addEventListener("click", function () { ResizeColumns(); });
//Get element to insert after
var ref = document.getElementById('left-container');
InsertAfter(dividerColumn, ref);

//Method checks for previous resize and shrink or expands the columns accordingly
function ResizeColumns() {
    var leftContainer = document.getElementById('left-container');
    var sidebar = document.getElementById('sidebar');
    var primaryColumn = leftContainer.previousSibling.previousSibling;
    //If the sidebar hasn't been resized yet, reduce its width and increase the width of the primary column
    if (leftContainer.style.width != "15%") {
        leftContainer.style.width = "15%";
        primaryColumn.style.width = "84.5%";
        //Use the built in functionality for adjusting the width of the sidebar contents
        window.dispatchEvent(new Event('resize'));
    }
    //Reset column sizes to their default
    else {
        leftContainer.style = "";
        primaryColumn.style.width = "";
        window.dispatchEvent(new Event('resize'));
    }
}
function InsertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}