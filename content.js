SetupDivider()

function SetupDivider() {
    //Theme changing disabled see below for explanation
    // var themechanger = document.getElementsByClassName('toggle-theme')[0];
    // themechanger.addEventListener("click", function () { AdjustColor(); })


    // Create Divider Element between the Sidebar and the primary column on page load
    var dividerColumn = document.createElement('div');
    dividerColumn.setAttribute("style", "-webkit-box-flex: 0;-ms-flex: none;flex: none;width: .5%; background-color:gray")
    dividerColumn.id = "dividerColumn";
    dividerColumn.addEventListener("click", function () { ResizeColumns(); });
    //AdjustColor(dividerColumn);

    //Get element to insert after
    var ref = document.getElementById('left-container');
    InsertAfter(dividerColumn, ref);
}
//Method checks for previous resize and shrink or expands the columns accordingly
function ResizeColumns() {
    var leftContainer = document.getElementById('left-container');
    var sidebar = document.getElementById('sidebar');
    var primaryColumn = document.getElementsByClassName('primary-holder')[0];
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
    window.scrollBy(0,10);
    window.scrollBy(0,-10);

}
function InsertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}


//Check if the dark or light theme is currently active and sets the divider to a contrasting color
//This is currently disabled becuase the theme selector now has multiple options.  
//Defaults to gray until a newer version
function AdjustColor(divider) {
    if(!divider) divider = document.getElementById('dividerColumn');
    bc = window.getComputedStyle(document.body, null).getPropertyValue("background-color")
    if (bc == "rgb(23, 23, 23)") {
        divider.style.backgroundColor = "white";
    }
    else {
        divider.style.backgroundColor = "rgb(23,23,23)";
    }
}