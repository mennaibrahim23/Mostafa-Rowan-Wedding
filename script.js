document.addEventListener("DOMContentLoaded", () => {


    // =========================
    // OPEN ENVELOPE
    // =========================

    const envelopeWrapper = document.getElementById("openEnvelope");
    const envelopeScreen = document.getElementById("envelope-screen");
    const mainContent = document.getElementById("main-content");

    const bgMusic = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicToggle");


    if (envelopeWrapper) {

        envelopeWrapper.addEventListener("click", () => {


            envelopeWrapper.classList.add("opened");


            setTimeout(() => {

                envelopeScreen.style.opacity = "0";


                setTimeout(() => {

                    envelopeScreen.style.display = "none";

                    mainContent.classList.remove("hidden");

                    triggerScrollAnimation();


                },800);


            },700);



            if(bgMusic){

                bgMusic.play()
                .then(()=>{

                    if(musicBtn)
                    musicBtn.classList.add("playing");

                })
                .catch(()=>{

                    console.log("Music blocked");

                });

            }


        });

    }






    // =========================
    // MUSIC BUTTON
    // =========================


    if(musicBtn && bgMusic){

        musicBtn.addEventListener("click",()=>{


            if(bgMusic.paused){

                bgMusic.play();

                musicBtn.classList.add("playing");


            }else{


                bgMusic.pause();

                musicBtn.classList.remove("playing");


            }


        });

    }








    // =========================
    // FALLING PETALS
    // =========================


    const petalsContainer =
    document.getElementById("petals-container");


    if(petalsContainer){


        for(let i=0;i<18;i++){


            const petal =
            document.createElement("div");


            petal.classList.add("petal");


            petal.style.left =
            Math.random()*100+"%";


            petal.style.width =
            Math.random()*12+8+"px";


            petal.style.height =
            Math.random()*12+8+"px";


            petal.style.animationDuration =
            Math.random()*5+5+"s";


            petal.style.animationDelay =
            Math.random()*5+"s";



            petalsContainer.appendChild(petal);


        }


    }








    // =========================
    // COUNTDOWN
    // =========================


    const weddingDate =
    new Date("September 6, 2026 18:00:00")
    .getTime();



    function updateCountdown(){


        const now =
        new Date().getTime();


        const distance =
        weddingDate-now;



        if(distance < 0){

            document.querySelector(".countdown-container").innerHTML =
            "<h3>It's The Big Day! 🎉</h3>";

            return;

        }



        const days =
        Math.floor(distance/(1000*60*60*24));


        const hours =
        Math.floor(
        (distance%(1000*60*60*24))
        /(1000*60*60)
        );


        const minutes =
        Math.floor(
        (distance%(1000*60*60))
        /(1000*60)
        );


        const seconds =
        Math.floor(
        (distance%(1000*60))
        /1000
        );



        document.getElementById("days").innerHTML =
        String(days).padStart(2,"0");


        document.getElementById("hours").innerHTML =
        String(hours).padStart(2,"0");


        document.getElementById("minutes").innerHTML =
        String(minutes).padStart(2,"0");


        document.getElementById("seconds").innerHTML =
        String(seconds).padStart(2,"0");

    }



    updateCountdown();

    setInterval(updateCountdown,1000);








    // =========================
    // SCROLL ANIMATION
    // =========================


    function triggerScrollAnimation(){


        const elements =
        document.querySelectorAll(".fade-in");


        const observer =
        new IntersectionObserver((entries)=>{


            entries.forEach(entry=>{


                if(entry.isIntersecting){

                    entry.target.classList.add("visible");

                }


            });


        },{threshold:.2});



        elements.forEach(el=>{
            observer.observe(el);
        });


    }



});
