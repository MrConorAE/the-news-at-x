/*
© (copyright) 2021. Available under the GPLv3. See LICENSE for details.
*/

window.onload = function () {
    var counter = document.getElementById('count');
    var starter = document.getElementById('start');
    var audio = document.getElementById('audio');

    starter.onclick = function () {
        // let's go!
        audio.play();
        starter.disabled = true;
        document.title = ("The News at " + new Date().getHours() + ":" + (new Date().getMinutes() + 1));
    };

    audio.onended = function () {
        starter.disabled = false;
        document.title = "The News at X";
    };

    setInterval(function () {
        counter.innerHTML = 60 - new Date().getSeconds();
        if (audio.paused == true) {
            audio.currentTime = new Date().getSeconds();
        }
    }, 10);
};