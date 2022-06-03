"use strict";
if (sessionStorage.getItem('maxval') === null) {
    sessionStorage.setItem('maxval', 10);
    sessionStorage.setItem('maxitry', 3);
    var result = sessionStorage.getItem('maxval');
    document.setting.input.value = result;
    var maxtry = sessionStorage.getItem('maxitry');
    document.setting.nbtry.value = maxtry;
}
else {
    var result = sessionStorage.getItem('maxval');
    document.setting.input.value = result;
    var maxtry = sessionStorage.getItem('maxitry');
    document.setting.nbtry.value = maxtry;
}
document.getElementById("settings").hidden = true;
document.getElementById("play").hidden = false;
document.getElementById("bouton")
    .addEventListener("click", function () {
    document.getElementById("play").hidden = true;
    document.getElementById("settings").hidden = false;
}, false);
document.getElementById("home")
    .addEventListener("click", function () {
    document.getElementById("play").hidden = false;
    document.getElementById("settings").hidden = true;
}, false);
document.getElementById("reset")
    .addEventListener("click", function () {
    sessionStorage.clear;
    sessionStorage.setItem('maxval', 10);
    sessionStorage.setItem('maxitry', 3);
    var result = sessionStorage.getItem('maxval');
    document.setting.input.value = result;
    var maxtry = sessionStorage.getItem('maxitry');
    document.setting.nbtry.value = maxtry;
}, false);
function controle(setting) {
    result = document.setting.input.value;
    maxtry = document.setting.nbtry.value;
    sessionStorage.setItem('maxval', result);
    sessionStorage.setItem('maxitry', maxtry);
    document.getElementById("play").hidden = false;
    document.getElementById("settings").hidden = true;
    document.getElementById("valid").innerHTML = "Your preferences have been saved";
    var clock2 = setTimeout(wait, 2000);
    function wait() {
        document.getElementById("valid").innerHTML = "";
    }
}
