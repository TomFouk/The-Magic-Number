"use strict";
var maxattemp = sessionStorage.getItem('maxitry');
var attemp = sessionStorage.getItem('maxitry');
var maxnmb = sessionStorage.getItem('maxval');
var result = Math.round((Math.random() * 10));
var input = 1;
var nbloose = 0;
var win = false;
document.getElementById("numb").innerHTML = maxnmb;
document.getElementById("try").innerHTML = attemp;
function controle(number) {
    attemp--;
    input = document.number.input.value;
    if (input < 0 || input > 10) {
        window.location.href = "play.html";
        attemp = 0;
    }
    if (input == result) {
        attemp = 0;
        win = true;
    }
    if (attemp === 0) {
        if (win == true) {
            sessionStorage.setItem('win', true);
        }
        else {
            sessionStorage.setItem('win', false);
        }
        sessionStorage.setItem('number', result);
        window.location.href = "final.html";
    }
    else
        document.getElementById("try").innerHTML = attemp;
    if (attemp < maxattemp) {
        if (input < result) {
            document.getElementById("result").innerHTML = "The Magic Number is bigger";
            var clock = setTimeout(hide, 1500);
            function hide() {
                document.getElementById("result").innerHTML = "";
            }
        }
        if (input > result) {
            document.getElementById("result").innerHTML = "The Magic Number is smaller";
            var clock = setTimeout(hide, 1500);
            function hide() {
                document.getElementById("result").innerHTML = "";
            }
        }
    }
}
