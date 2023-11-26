// 인라인 방식
/* function writeTxt(str) {
    let area = document.getElementById("demo");
    // area.innerText = "Hello JavaScript!!";
    // area.textContent = "Hello JavaScript!!";
    // area.innerHTML = "Hello JavaScript!!";
    area.innerHTML = str;
} */

// 기본적인 함수식 (html 내부)
/* function eventCall() {
    let abc = document.getElementById("demo");
    abc.innerHTML = "안녕 자바스크립트";
}
eventCall(); */

// 기본적인 함수식 (온로드 방식 성공)
/* window.onload = function(){
    let abc = document.getElementById("demo");
    abc.innerHTML = "안녕 자바스크립트";
} */

// 대입함수 (html 내부)
/* let myFn = function(){
    console.log("function call!!!");
};
myFn(); */

// 온로드 방식
/* window.onload = function(){
    let abc = document.getElementById("demo");
    // abc.innerHTML = "나와랏!!! 짱!!!!!!!!!!!!";
    let button = document.getElementById("call");

    button.onclick = function(){
        abc.innerHTML = "나와랏!!! 짱!!!!!!!!!!!!";
        console.log("dlqpsxm!!!!!!!!!!!")
    };
    button.onclick = function(){
        abc.innerHTML = "진짜!!! 나와랏!!!";
    };
}; */

if(window.addEventListener) {
    window.addEventListener("load", function(){
        let abc = document.getElementById("demo");
        // abc.innerHTML = "나와랏!!! 짱!!!!!!!!!!!!";
        let button = document.getElementById("call");

        button.addEventListener("click", function(){
            abc.innerHTML = "Real!!! Come on!!!";
            console.log("Real!!! Come on!!!");
        });
        button.addEventListener("click", function(){
            abc.innerHTML = "진짜!!! 나와랏!!!";
            console.log("진짜!!! 나와랏!!!");
        });
    });
}
else { // IE8이하버전
    window.attachEvent("load", function(){
        let abc = document.getElementById("demo");
        let button = document.getElementById("call");

        button.attachEvent("onclick", function(){
            abc.innerHTML = "Real!!! Come on!!!";
            console.log("Real!!! Come on!!!");
        });
        button.attachEvent("onclick", function(){
            abc.innerHTML = "진짜!!! 나와랏!!!";
            console.log("진짜!!! 나와랏!!!");
        });
    });
}