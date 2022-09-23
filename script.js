let btnStart = document.querySelector("#button-start");
let btnStop = document.querySelector("#button-stop");
let btnReset = document.querySelector("#button-reset");
let content = document.querySelector(".content");
let contentSec = document.querySelector("#content .seconds");
let contentMili = document.querySelector("#content .mili");
let mili = 0;
let sec = 0;
let interval;

btnStart.addEventListener("click", function start() {
    /* If the parameter provided does not identify a previously established action,
    this method does nothing.*/
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
});
btnStop.addEventListener("click", function stop() {
    clearInterval(interval);
});
btnReset.addEventListener("click", function reset() {
    clearInterval(interval);
    mili = 0;
    sec = 0;
    contentSec.innerText = `00`;
    contentMili.innerText = `00`;
});
function startTimer() {
    mili++;
    if (mili <= 9) {
        contentMili.innerText = `0${mili}`
    }
    if (mili > 9) {
        contentMili.innerText = `${mili}`
    }
    if (mili > 99) {
        sec++;
        mili = 0;
        contentSec.innerText = `${sec}`
    }
}
