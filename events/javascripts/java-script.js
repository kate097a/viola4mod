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
        
         
    // if (posY > 200 &&  posY < 300) {
    //     cursorDot.animate({
    //         left:`${posX}px`,
    //         top:`${posY}px`,
    //         width:`${10}vw`,
    //         height: `${10}vw`,
    //         borderRadius: `0`,
    //         backgroundImage: `url('../img/glaza.svg')`
    //     }, {
    //         duration:500,
    //         fill: "forwards"
    //     })
   
    // }

})

    let title = document.getElementById("title")
    window.addEventListener("scroll", (e) => {
        let scrollPos = scrollY;
        if (scrollPos > (window.innerWidth / 2.4) && (window.innerWidth )) {
            title.style.marginLeft = -scrollPos + (window.innerWidth / 2) + "px";
        }
    })

    document.getElementById("title2").addEventListener("mouseover", (e) => {
        document.getElementById("title2").animate({
            width: '25vw'
        }, {
            duration: 500,
            fill: "forwards"
        })
    })
    
    document.getElementById("title2").addEventListener("mouseleave", (e) => {
        document.getElementById("title2").animate({
            width: '50vw'
        }, {
            duration: 500,
            fill: "forwards"
        })
    })











    document.querySelector(".scrollBtns").addEventListener("click", (e) => {
        let btn = e.target;
        if (btn.className != "scrollBtns") {
            changePoster(e.target.id.split("").slice(9).join(""))
        }
    })

    document.querySelector(".postersScrollContainer").addEventListener("click", (e) => {
        let btn = e.target;
        if (btn.className == "posterImg") {
            changePoster(e.target.id.split("").slice(9).join(""))
        }
    })

    let lastPoster = 2;
    let left = 0;

    function changePoster(idshnik) {
        resetBtn()
        resetPoster()
        document.getElementById(`circleBtn` + idshnik).classList.add("picked")
        movePosters(idshnik)
        setTimeout(() => {
            document.getElementById(`posterImg` + idshnik).classList.add("bigPoster")
        }, 300);
    }

    function resetBtn() {
        let btns = document.querySelectorAll(".circleBtn");
        for (i = 0; i < btns.length; i++) {
            if (btns[i].className.includes("picked")) {
                btns[i].classList.remove("picked")
            }
        }
    }

    function resetPoster() {
        let posters = document.querySelectorAll(".posterImg");
        for (i = 0; i < posters.length; i++) {
            if (posters[i].className.includes("bigPoster")) {
                posters[i].classList.remove("bigPoster")
            }
        }
    }

    function movePosters(idshnik) {
        if (lastPoster > idshnik) {
            let differens = lastPoster - idshnik;
            console.log("left")
            document.querySelector(".postersScrollContainer").style.left=`${left + (window.innerWidth / 100 * 1 * differens)}vw`
            left = left + (window.innerWidth / 100 * 1 * differens)
            lastPoster = idshnik
        } else if (lastPoster < idshnik) {
            let differens = idshnik - lastPoster;
            console.log("left")
            document.querySelector(".postersScrollContainer").style.left=`${left - (window.innerWidth / 100 * 1 * differens)}vw`
            left = left - (window.innerWidth / 100 * 1 * differens)
            lastPoster = idshnik
        }
    }





    document.querySelector(".scrollBtnss").addEventListener("click", (e) => {
        let btn1 = e.target; 
        if (btn1.className != "scrollBtnss") {
            changePoster1(e.target.id.split("").slice(10).join(""))
        }
    })

    document.querySelector(".postersScrollContainerr").addEventListener("click", (e) => {
        let btn1 = e.target;
        if (btn1.className == "posterImg1") {
            changePoster1(e.target.id.split("").slice(10).join(""))
        }
    })

    let lastPoster1 = 2;
    let left1 = 0;

    function changePoster1(idshnikk) {
        resetBtn1()
        resetPoster1()
        document.getElementById(`circleBtnn` + idshnikk).classList.add("pickedd")
        console.log(document.getElementById(`circleBtnn` + idshnikk))
        movePosters1(idshnikk)
        setTimeout(() => {
            document.getElementById(`posterImgg` + idshnikk).classList.add("bigPosterr")
        }, 300);
    }

    function resetBtn1() {
        let btns1 = document.querySelectorAll(".circleBtn1");
        for (i = 0; i < btns1.length; i++) {
            if (btns1[i].className.includes("pickedd")) {
                btns1[i].classList.remove("pickedd")
            }
        }
    }

    function resetPoster1() {
        let posters1 = document.querySelectorAll(".posterImg1");
        for (i = 0; i < posters1.length; i++) {
            if (posters1[i].className.includes("bigPosterr")) {
                posters1[i].classList.remove("bigPosterr")
            }
        }
    }

    function movePosters1(idshnikk) {
        if (lastPoster1 > idshnikk) {
            let differenss = lastPoster1 - idshnikk;
            console.log( lastPoster1, idshnikk)
            document.querySelector(".postersScrollContainerr").style.left=`${left1 + (window.innerWidth / 100 * 0.8 * differenss)}vw`
            left1 = left1 + (window.innerWidth / 100 * 0.8 * differenss)
            lastPoster1 = idshnikk
        } else if (lastPoster1 < idshnikk) {
            let differenss = idshnikk - lastPoster1;
            console.log( lastPoster1, idshnikk)
            document.querySelector(".postersScrollContainerr").style.left=`${left1 - (window.innerWidth / 100 * 0.8 * differenss)}vw`
            left1 = left1 - (window.innerWidth / 100 * 0.8 * differenss)
            lastPoster1 = idshnikk;
        }
    }








    document.querySelector(".scrollBtnsss").addEventListener("click", (e) => {
        let btn2 = e.target; 
        if (btn2.className != "scrollBtnsss") {
            changePoster2(e.target.id.split("").slice(11).join(""))
        }
    })

    document.querySelector(".postersScrollContainerr").addEventListener("click", (e) => {
        let btn2 = e.target;
        if (btn2.className == "posterImg2") {
            changePoster2(e.target.id.split("").slice(11).join(""))
        }
    })

    let lastPoster2 = 2;
    let left2 = 0;

    function changePoster2(idshnikkk) {
        resetBtn2()
        resetPoster2()
        document.getElementById(`circleBtnnn` + idshnikkk).classList.add("pickeddd")
        console.log(document.getElementById(`circleBtnnn` + idshnikkk))
        movePosters2(idshnikkk)
        setTimeout(() => {
            document.getElementById(`posterImggg` + idshnikkk).classList.add("bigPosterrr")
        }, 300);
    }

    function resetBtn2() {
        let btns2 = document.querySelectorAll(".circleBtn2");
        for (i = 0; i < btns2.length; i++) {
            if (btns2[i].className.includes("pickeddd")) {
                btns2[i].classList.remove("pickeddd")
            }
        }
    }

    function resetPoster2() {
        let posters2 = document.querySelectorAll(".posterImg2");
        for (i = 0; i < posters2.length; i++) {
            if (posters2[i].className.includes("bigPosterrr")) {
                posters2[i].classList.remove("bigPosterrr")
            }
        }
    }

    function movePosters2(idshnikkk) {
        if (lastPoster2 > idshnikkk) {
            let differensss = lastPoster2 - idshnikkk;
            console.log( lastPoster2, idshnikkk)
            document.querySelector(".postersScrollContainerrr").style.left=`${left2 + (window.innerWidth / 100 * 0.8 * differensss)}vw`
            left2 = left2 + (window.innerWidth / 100 * 0.8 * differensss)
            lastPoster2 = idshnikkk
        } else if (lastPoster2 < idshnikkk) {
            let differensss = idshnikkk - lastPoster2;
            console.log( lastPoster2, idshnikkk)
            document.querySelector(".postersScrollContainerrr").style.left=`${left2 - (window.innerWidth / 100 * 0.8 * differensss)}vw`
            left2 = left2 - (window.innerWidth / 100 * 0.8 * differensss)
            lastPoster2 = idshnikkk;
        }
    }




})
