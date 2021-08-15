"use strict";

document.getElementsByClassName("inputs")[0].oninput = function() {
    let date_arr = [
        document.getElementById("date_A").value.slice(8),
        document.getElementById("date_B").value.slice(8)
    ];
    let result = (date_arr[1] - date_arr[0]) * 24 * 60 * 60;
    if (result > 0) {
        document.getElementById("result").innerHTML = result + " seconds";
    }
}

document.getElementById("re_color").onclick = function() {
    document.getElementById("container").style.backgroundColor = 
        "rgb(" + Math.random() * 255 + "," +
        Math.random() * 255 + "," +
        Math.random() * 255 + ")";
}

