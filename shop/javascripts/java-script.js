document.addEventListener("DOMContentLoaded", function() {

    const cursorDot = document.getElementById("cursorDot")
    document.addEventListener("mousemove", (e) => {
        let posX = e.clientX;
        let posY = e.clientY;
        let scrollPos = scrollY;
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        if (posY > 200 &&  posY < 300) {
            cursorDot.animate({
                left:`${posX}px`,
                top: `${posY}px`,
                width:`${7}vw`,
                height: `${7}vw`,

            }, {
                duration:500,
                fill: "forwards"
            })

        } else {
            cursorDot.animate({
                left:`${posX}px`,
                top: `${posY}px`,
                width:`${3}vw`,
                height: `${3}vw`,
            }, {
                duration:500,
                fill: "forwards"
            })
        }  

})

 let a = document.querySelector(".order-button").addEventListener("click", (e) => {
    window.location.href = './error/index.html';
 })


    let title = document.getElementById("title")
    window.addEventListener("scroll", (e) => {
        let scrollPos = scrollY;
        if (scrollPos > (window.innerWidth / 2.4) && (window.innerWidth )) {
            title.style.marginLeft = -scrollPos + (window.innerWidth / 2) + "px";
        }
    })



    
})
