var timer;
var time = 0;


var stopwatch = document.getElementById("stopwatch");


var hour=0;
var min=0;
var sec=0;
var min_count=0;
var hour_count=0;
var sec_count=0;
function printTime() {
    time++;
    stopwatch.innerText=getTime();
}
function start() {
    printTime();
    stop();
    timer = setTimeout(start, 1000);
}


function stop() {
    clearTimeout(timer);
}


function reset() {
    time = 0;
    stop()
    stopwatch.innerText = "00:00:00";
}


function getTime() {
    sec++;
    if(sec>=60){
        sec=0;
        min_count=0;
        min++;
    }
    if(min>=60){
        min=0;
        hour_count=0;
        hour;
    }
    if(sec<10){
        sec='0'+sec;
    }
    if(hour<10){
        if(hour_count==0){
            hour='0'+hour;
            hour_count=1;
        }
    }
    if(min<10){
        if(min_count==0){
            min='0'+min;
            min_count=1;
        }
    }
    return stopwatch.innerHTML=hour+":"+min+":"+sec;
}