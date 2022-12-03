function clickFunction() {
    var i = 0;
    if (i == 0) {
        i = 1;
        var element = document.getElementById("progress");
        var width = 1;
        var id = setInterval(myBar , 10);
        function myBar() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                element.style.width = width + "%";
            }
        }
    }
}
