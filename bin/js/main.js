document.onload = Load();

// once the page loads
async function Load() {
    setLSTR("Date", getfulldate());
    try {
        Promise.all(
            [
                Log(getfulldate())
            ]
        );
    } catch (error) {
        Log(error.toString());
    }
}

// the fizz buzz algorithm problem
function fizzbuzz() {
    try {
        var FIZZBUZZ = "FizzBuzz\nPrint out the numbers from 1 to 100.\nbut if the number is a multiple of 3 print out (Fizz)\n" +
            "If it's a multiple of 5 print out (Buzz)\nif it's a multiple of 3 and 5 print out (FizzBuzz).\nEvery other print out the number";
        console.log(`${FIZZBUZZ}`);

        for (var init = 1; init < 100; init++) {
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
        Log(error.toString());
    }
}

// printing out to the Log
function Log(data) {
    try {
        $(`#console`).html(data);
    } catch (error) {
        alert(`Error in the console: ${error.toString()}`);
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
