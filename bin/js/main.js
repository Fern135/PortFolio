const dnd = require('dnd.js');

window.onload = Load();

// once the page loads
async function Load() {
    try {
        Promise.all(
            [
                // accordion()
            ]
        );
    } catch (error) {
        console.log(error.toString());
    }
}

//#region dnd dice roller
/*
    dice types { 
        d20,
        d12,
        d10,
        d8,
        d6,
        d4,
        percentage
    }
*/
let D20 = new dnd('d20');
let D12 = new dnd('d12');
let D10 = new dnd('d10');
let D8  = new dnd('d8');
let D6  = new dnd('d6');
let D4  = new dnd('d4');
let PER = new dnd('percentage');

function d20()        {  $("#roller").html(D20.roll());        } //<===== d20
function d12()        {  $("#roller").html(D12.roll());        } //<===== d12
function d10()        {  $("#roller").html(D10.roll());        } //<===== d10
function d8()         {  $("#roller").html(D8.roll());         } //<===== d8
function d6()         {  $("#roller").html(D6.roll());         } //<===== d6
function d4()         {  $("#roller").html(D4.roll());         } //<===== d4
function percentage() {  $("#roller").html(`${PER.roll()} %`); } //<===== percentage
//#endregion

// the fizz buzz algorithm problem
function fizzbuzz() {
    try {
        alert('Check the console of the browser');
        var FIZZBUZZ = "FizzBuzz\nPrint out the numbers from 1 to 100.\nbut if the number is a multiple of 3 print out (Fizz)\n" +
            "If it's a multiple of 5 print out (Buzz)\nif it's a multiple of 3 and 5 print out (FizzBuzz).\nEvery other print out the number";
        console.log(FIZZBUZZ);

        for (var init = 1; init <= 100; init++) {
            if (init % 3 == 0 && init % 5 == 0) {
                console.log("FizzBuzz");
            } else if (init % 3 == 0) {
                console.log("Fizz");
            } else if (init % 5 == 0) {
                console.log("Buzz");
            } else {
                console.log(init);
            }
        }
    } catch (error) {
        console.log(error.toString());
    }
}

// getting today's full date
function getfulldate() {
    const d = new Date();
    const months = ["Jan", "Feb", "Mar", "Ap", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    return `C: ${months[d.getMonth()]}/${d.getDate()}/${d.getFullYear()} > `;
}

// detecting os. so the broser console can open correctly
function detectOS() {
    if (navigator.userAgent.indexOf("Win") != -1) // windows
        return "Windows OS";
    if (navigator.userAgent.indexOf("Mac") != -1) // mac
        return "Macintosh";
    if (navigator.userAgent.indexOf("Linux") != -1) // linux
        return "Linux OS";
    if (navigator.userAgent.indexOf("Android") != -1) // android 
        return "Android OS";
    if (navigator.userAgent.indexOf("like Mac") != -1) // iphone
        return "iOS";
}

// detect Browser
function detectBrowser() {
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        return 'Opera';
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        return 'Chrome';
    } else if (navigator.userAgent.indexOf("Safari") != -1) {
        return 'Safari';
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
        return 'Firefox';
    } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
        return 'IE';//crap
    } else {
        return 'Unknown';
    }
}


var acc = document.getElementsByClassName("accordion");
var i;
    
for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
