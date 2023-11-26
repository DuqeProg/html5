window.addEventListener("load", function() {
    let container = document.getElementsByClassName("container")[0];
    let controller = container.firstElementChild;
    let lilist = controller.children;
    // console.log(lilist);
    for(let i = 0; i < lilist.length; i++) {
        lilist[i].addEventListener("click", function(e) {
            e.preventDefault();
            // console.log(e.bubbles);
            console.log(e.currentTarget);
            for(let j = 0; j < lilist.length; j++) {
                lilist[j].classList.remove("on");
            }
            e.currentTarget.classList.add("on");
        });
    }
});