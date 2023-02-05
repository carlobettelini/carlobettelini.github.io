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
https: //github.com/carlobettelini/carlobettelini.github.io.git
    git remote add carlobettelini.github.io https: //github.com/carlobettelini/carlobettelini.github.io.git