/* 예제 16
window.addEventListener("load", function() {
    let container = document.getElementsByClassName("container")[0];

    window.addEventListener("resize", function() {
        // console.log("resize event");
        let info = "";
        info += "inner width: " + window.innerWidth + "<br><br>";
        info += "inner height: " + window.innerHeight + "<br><br>";
        info += "outer width: " + window.outerWidth + "<br><br>";
        info += "outer height: " + window.outerHeight + "<br><br>";

        container.innerHTML = info;
    });
    window.addEventListener("scroll", function() {
        // console.log("scroll event");
    });
}); */

/* 예제 19
window.addEventListener("load", function() {
    let n = 1;
    let btn = document.getElementById("append");
    let gallery = document.getElementsByClassName("gallery")[0];

    btn.addEventListener("click", function() {
        // console.log("btn clicked!!"); // 버튼클릭시 콘솔창에 표시됨.
        let photo = document.createElement("img");
        photo.setAttribute("src", "./img/zoo" + n + ".jpg");
        photo.setAttribute("alt", "zoo" + n);
        gallery.appendChild(photo);
        if(n < 3) {
            n += 1;
        }
        else {
            n = 1;
        }
    });
}); */

window.addEventListener("load", function() {
    let prependBtn = document.getElementById("prepend");
    let appendBtn = document.getElementById("append");
    let gallery = document.getElementsByClassName("gallery")[0];

    prependBtn.addEventListener("click", function() {
        /* 기본 방법
        // 마지막 이미지가 처음으로 배치
        let lastChild = gallery.lastElementChild;
        let preSrc = lastChild.getAttribute("src");
        let preAlt = lastChild.getAttribute("alt");
        // console.log(preSrc, preAlt);
        gallery.removeChild(lastChild);
        let newNode = document.createElement("img");
        newNode.setAttribute("src", preSrc);
        newNode.setAttribute("alt", preAlt);
        gallery.insertBefore(newNode, gallery.firstElementChild); */
        
        // Clone을 이용한 방법
        let lastChild = gallery.lastElementChild;
        let newNode = lastChild.cloneNode();
        gallery.removeChild(lastChild);
        gallery.insertBefore(newNode, gallery.firstElementChild);
    });

    appendBtn.addEventListener("click", function() {
        /* 기본 방법
        // 첫 이미지가 마지막에 배치
        let firstChild = gallery.firstElementChild;
        let preSrc = firstChild.getAttribute("src");
        let preAlt = firstChild.getAttribute("alt");
        // console.log(preSrc, preAlt);
        gallery.removeChild(firstChild);
        let newNode = document.createElement("img");
        newNode.setAttribute("src", preSrc);
        newNode.setAttribute("alt", preAlt);
        gallery.append(newNode2); */

        // Clone을 이용한 방법
        let firstChild = gallery.firstElementChild;
        let newNode = firstChild.cloneNode();
        gallery.removeChild(firstChild);
        gallery.appendChild(newNode);
    });
});