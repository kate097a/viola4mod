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

    document.getElementById("title8").addEventListener("mouseover", (e) => {
        document.getElementById("title8").animate({
            width: '15vw'
        }, {
            duration: 100,
            fill: "forwards"
        })
    })
    
    document.getElementById("title8").addEventListener("mouseleave", (e) => {
        document.getElementById("title8").animate({
            width: '10vw'
        }, {
            duration: 500,
            fill: "forwards"
        })
    })


    


    document.getElementById("title10").addEventListener("mouseover", (e) => {
        document.getElementById("title10").animate({
            width: '15vw'
        }, {
            duration: 100,
            fill: "forwards"
        })
    })
    
    document.getElementById("title10").addEventListener("mouseleave", (e) => {
        document.getElementById("title10").animate({
            width: '20vw'
        }, {
            duration: 500,
            fill: "forwards"
        })
    })






    
    let paged = {
        1: "./img/page1.png",
        2: "./img/page2.png",
        3: "./img/page3.png",
        4: "./img/page4.png",
        5: "./img/page5.png",
        6: "./img/page6.png",
        7: "./img/page7.png",
        8: "./img/page8.png",
        9: "./img/page9.png",
        10: "./img/page10.png",
        11: "./img/page11.png",
        12: "./img/page12.png",
        13: "./img/page13.png",
        14: "./img/page14.png",
        15: "./img/page15.png",
    }

    let countPages = 0;

    let directions = [-1, 1]


    let pii = document.querySelector(".pii")
    pii.addEventListener("mouseover", (e) => {
        eId = e.target.id;
        clickSwap(eId, "pi")
    })


    let zoness = document.querySelector(".zonesss")
    zoness.addEventListener("mouseover", (e) => {
        eId = e.target.id;
        clickSwap(eId, "zone")
    })
    


    function clickSwap(numOfElem, clas) {
        document.getElementById(numOfElem).addEventListener("mouseleave", (e) => {
            for (let i = 0; i < ar.length; i++) {
                if (ar[i].id != numOfElem) {
                    ar[i].style.opacity="1"
                    ar[i].style.filter="blur(0px)"
                }
            }
            return
        })
        let ar = document.getElementsByClassName(clas)
        for (let i = 0; i < ar.length ; i++) {
            if (ar[i].id != numOfElem) {
                ar[i].style.filter="blur(5px) brightness(0.6)"
            }
        }
    }


    let angle = [randomAngle(), randomAngle(), randomAngle()];
    document.getElementById("book1").style.transform=`rotate(${angle[0][0] * angle[0][1]}deg)`

    document.getElementById("book2").style.transform=`rotate(${angle[1][0] * angle[1][1]}deg)`

    document.getElementById("book3").style.transform=`rotate(${angle[2][0] * angle[2][1]}deg)`


    document.querySelector("#right").addEventListener("click", (e) => {
        bookPagesNext(paged)
    })

    document.querySelector("#left").addEventListener("click", (e) => {
        bookPagesBefore(paged)
    })

    function bookPagesNext(arr) {

        countPages += 1;

        const styles1 = window.getComputedStyle(document.getElementById("book1")).transform
        const styles2 = window.getComputedStyle(document.getElementById("book2")).transform
        const styles3 = window.getComputedStyle(document.getElementById("book3")).transform


        
        if (countPages >= 3) {            
            document.getElementById("book2").style.backgroundImage=`url(${paged[countPages - 1]})`
            document.getElementById("book3").style.backgroundImage=`url(${paged[countPages - 2]})`

            document.getElementById("book2").style.transform=styles1
            document.getElementById("book3").style.transform=styles2
        } else if (countPages == 2) {
            document.getElementById("book2").style.backgroundImage=`url(${paged[countPages - 1]})`
            document.getElementById("book3").style.backgroundImage=`url(${paged[15]})`

            document.getElementById("book2").style.transform=styles1
            document.getElementById("book3").style.transform=styles2
        } else if (countPages == 1) {
            document.getElementById("book2").style.backgroundImage=`url(${paged[15]})`
            document.getElementById("book3").style.backgroundImage=`url(${paged[14]})`

            document.getElementById("book2").style.transform=styles1
            document.getElementById("book3").style.transform=styles2
        }


        if (countPages != 15) {
    
            
            document.getElementById("book1").style.backgroundImage=`url(${paged[countPages]})`
            let angle = randomAngle();
            document.getElementById("book1").style.transform=`rotate(${angle[0] * angle[1]}deg)`
        
        } else {
            document.getElementById("book1").style.backgroundImage=`url(${paged[countPages]})`
            countPages = 1
            document.getElementById("book1").style.backgroundImage=`url(${paged[countPages]})`
    
        }

    }


    function randomAngle() {
        let angle = Math.floor(Math.random() * 10);
        let direction = Math.floor(Math.random() * 2);
        console.log(angle, directions[direction])
        return [angle, directions[direction]]
    }


    function bookPagesBefore(arr) {

        countPages -= 1;

        const styles1 = window.getComputedStyle(document.getElementById("book1")).transform
        const styles2 = window.getComputedStyle(document.getElementById("book2")).transform
        const styles3 = window.getComputedStyle(document.getElementById("book3")).transform

        if (countPages >= 3) {            
            document.getElementById("book2").style.backgroundImage=`url(${paged[countPages - 1]})`
            document.getElementById("book3").style.backgroundImage=`url(${paged[countPages - 2]})`

            document.getElementById("book2").style.transform=styles1
            document.getElementById("book3").style.transform=styles2
        } else if (countPages == 2) {
            document.getElementById("book2").style.backgroundImage=`url(${paged[countPages - 1]})`
            document.getElementById("book3").style.backgroundImage=`url(${paged[15]})`

            document.getElementById("book2").style.transform=styles1
            document.getElementById("book3").style.transform=styles2
        } else if (countPages == 1) {
            document.getElementById("book2").style.backgroundImage=`url(${paged[15]})`
            document.getElementById("book3").style.backgroundImage=`url(${paged[14]})`

            document.getElementById("book2").style.transform=styles1
            document.getElementById("book3").style.transform=styles2
        }



        if (countPages != 0 && countPages != 1) {
            document.getElementById("book1").style.backgroundImage=`url(${paged[countPages]})`;
            let angle = randomAngle();
            document.getElementById("book1").style.transform=`rotate(${angle[0] * angle[1]}deg)`

        } else {
            countPages = 15;
            document.getElementById("book1").style.backgroundImage=`url(${paged[countPages]})`
            let angle = randomAngle();
            document.getElementById("book1").style.transform=`rotate(${angle[0] * angle[1]}deg)`
        }

    }

    function bookPagesSwap() {
        
    }

    bookPagesSwap()

})

