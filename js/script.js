var coll = document.getElementsByClassName("gamsfes");

for (var i = 0; i < coll.length; i++) {
    coll[i].style.maxHeight = coll[i].scrollHeight + "px";
}

function w3_open() {
    var width = document.body.clientWidth;
    if (width > 1000) {
        document.getElementById("navigation").style.width = "25%";
    }
    // document.getElementById("main-content").style.marginLeft = "25%";
    document.getElementById("navigation").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
}

function w3_close() {
    document.getElementById("main-content").style.marginLeft = "0%";
    document.getElementById("navigation").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}