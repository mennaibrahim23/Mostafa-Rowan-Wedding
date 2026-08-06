// إزالة شاشة البداية بعد ثانيتين
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 2000);
});

// زر فتح الدعوة
document.getElementById("openInvitation").addEventListener("click", () => {
    document.getElementById("invitation").scrollIntoView({
        behavior: "smooth"
    });
});

// Countdown
const weddingDate = new Date("September 6, 2026 18:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("countdown").innerHTML =
        `${days} Days<br>${hours} Hours<br>${minutes} Minutes<br>${seconds} Seconds`;

},1000);
