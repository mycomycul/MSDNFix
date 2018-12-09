
//Add Code to reset percentages onwindow resize

// Create element to inject in page
var dividerColumn = document.createElement('div');
dividerColumn.setAttribute("style", "-webkit-box-flex: 0;-ms-flex: none;flex: none;width: .5%;background-color: white;")
dividerColumn.id = "dividerColumn";
dividerColumn.addEventListener("click", function () { shrinkNavColumn(); });
//Get element to insert after
var ref = document.getElementById('left-container');
insertAfter(dividerColumn, ref);

// var x = document.getElementById("left-container'").previousSibling

function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

function shrinkNavColumn() {
    var leftContainer = document.getElementById('left-container');
    var sidebar = document.getElementById('sidebar')
    if (leftContainer.style.width != "15%") {
        leftContainer.style.width = "15%";
        sidebar.style.width = "11%";
    }
    else{
        
        leftContainer.style = "";
        //readjust sidebar by attaching to native width setting function
        //= window.innerWidth < 1088 ? 

                // (window.innerWidth < 768 ? "0%":"33%") : "25%";
    }
    // document.getElementById('main-column').style.width = "89.5%";


}