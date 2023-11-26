window.addEventListener("load", function() {
    /* 원리적인 코딩
    let queue = document.getElementById("queue");
    let ball = document.getElementsByClassName("ball")[0];
    let x = ball.offsetLeft;
    let targetx = 400;

    queue.addEventListener("click", function() {
        animateFn(ball, x, targetx);
    });

    function animateFn(target, startx, targetx) {
        let timer = setInterval(function () {
            if(startx < targetx) {
                startx +=10;
            }
            else {
                startx = targetx;
                clearInterval;
            }
            target.style.left = startx + "px";
        }, 10);
    } */

    let queue = document.getElementById("queue");
    let ball = document.getElementsByClassName("ball")[0];
    let targetx = 400;

    queue.addEventListener("click", function() {
        // gsap.to(".ball", {x: targetx, duration: 3});
        gsap.to(ball, {x: targetx, duration: 3});
    });
});