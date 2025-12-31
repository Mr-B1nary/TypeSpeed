const theTimer = document.querySelector(".timer");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const testWrapper = document.querySelector(".test-wrapper");
const resetButton = document.querySelector("#reset");

var timer = [0, 0, 0, 0];
var timerRunnig = false;
var interval;
// تبع برای اضافه کردن صفر به تایمر دقیقه شمار
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

// تابع برای شروع شدن تایمر
function runTimer() {

    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;

    timer[3]++;

    timer[0] = Math.floor((timer[3] / 100) / 60);
    timer[1] = Math.floor(timer[3] / 100) - (timer[0] * 60);
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

// تابع برای ریست کردن تمامی توابع و تغییرات
function reset() {
    clearInterval(interval);
    timer = [0, 0, 0, 0];
    timerRunnig = false;
    testWrapper.style.borderColor = "grey";
    theTimer.innerHTML = "00.00.00";
    testArea.value = "";
    theTimer.style.background = "none";
    resetButton.style.borderColor = "purple";



}

// تابع برای بررسی متن وارد شده توسط کاربر با متن اصلی
function spellCeck() {
    let textEntered = testArea.value;
    let originTextMatch = originText.substring(0, textEntered.length);
    resetButton.style.borderColor = "blue";
    theTimer.style.background = "pink";



    if (textEntered == originText) {
        testWrapper.style.borderColor = "green";
        clearInterval(interval);
    }
    else {
        if (textEntered == originTextMatch) {
            testWrapper.style.borderColor = "yellow";

        }
        else {
            testWrapper.style.borderColor = "red";
        }
    }
}

//برای اجرا شدن تایمر بدون افزایش سرعت
function Start() {

    if (timerRunnig == false) {
        timerRunnig = true;
        interval = setInterval(runTimer, 10,);
    }

}

testArea.addEventListener("keypress", Start);
testArea.addEventListener("keyup", spellCeck);
resetButton.addEventListener("click", reset);