/* 10번 예제
window.addEventListener("load", function(){
    let ballVar = document.getElementsByClassName("ball")[0];
    // console.log(ballVar);
    // ballVar.addEventListener("click", function(){
    ballVar.addEventListener("dblclick", function(){
        ballVar.classList.toggle("effect");
    });
}); */

/* 11번 예제
window.addEventListener("load", function() {
    let container = document.getElementsByClassName("container")[0];
    let buttonList = [];
    let ball;
    
    for(let i = 0; i < container.children.length; i++) {
        if(container.children[i].tagName == "BUTTON") {
            buttonList.push(container.children[i]);
        }
        else if(container.children[i].tagName == "DIV") {
            ball = container.children[i];
        }
    }
    // console.log(buttonList, ball);
    let idName = "";
    let x = 40;
    let y = 184;

    for(let i = 0; i < buttonList.length; i++) {
        buttonList[i].addEventListener("click", function(e) {
            idName = e.target.id;
            if(idName == "left") {
                x = x - 200;
            }
            else if(idName == "right") {
                x = x + 200;
            }
            else if(idName == "top") {
                y = y - 200;
            }
            else if(idName == "bottom") {
                y = y + 200;
            }
            ball.style.left = x + "px";
            ball.style.top = y + "px";
        });
    }
}); */

/* 12번 예제
window.addEventListener("load", function() {
    let container = document.getElementsByClassName("container")[0];
    let ball = container.getElementsByClassName("ball")[0];

    ball.addEventListener("mouseenter", function(e) {
        e.target.classList.add("effect");
    });
    ball.addEventListener("mouseleave", function(e) {
        e.target.classList.remove("effect");
    });
}); */

window.addEventListener("load", function() {
    let body = document.body;
    let container = document.getElementsByClassName("container")[0];
    let ball = document.getElementsByClassName("ball")[0];

    let x = ball.offsetLeft;
    let y = ball.offsetTop;
    // console.log(x, y);
    let w = ball.offsetWidth;
    let h = ball.offsetHeight;
    // console.log(w, h);

    body.addEventListener("keydown", function(e) {
        /*
        if(e.keyCode == 37) { // left key
            x = x - 20;
        }
        else if(e.keyCode == 38) { // up key
            y = y - 20;
        }
        else if(e.keyCode == 39) { // right key
            x = x + 20;
        }
        else if(e.keyCode == 40) { // down key
            y = y + 20;
        }
        */
        switch(e.keyCode) {
            case 37:
                x = x - 20;
                break;
            case 38:
                y = y - 20;
                break;
            case 39:
                x = x + 20;
                break;
            case 40:
                y = y + 20;
                break;
            default:
                break;
        }

        ball.style.left = x + "px";
        ball.style.top = y + "px";
    });
});