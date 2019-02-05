/* Por W3C */

window.onscroll = function () {
    btnTopVisible();
}

function btnTopVisible() {
    if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById("btn-upper").style.display = "block";
    } else {
        document.getElementById("btn-upper").style.display = "none";
    }
}