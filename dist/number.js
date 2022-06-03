"use strict";
var text;
var number = sessionStorage.getItem('number');
var win = sessionStorage.getItem('win');
if (win === "true") {
    text = "Cheer ! You won ! The number was ", number;
}
else if (win === "false") {
    text = "Shame ! The number was ", number;
}
console.log(text);
document.getElementById("text").innerHTML = text;
document.getElementById("number").innerHTML = number;
sessionStorage.clear;
