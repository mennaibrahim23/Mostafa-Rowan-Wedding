// إزالة شاشة البداية بعد ثانيتين
window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loader");
        if (loader) {
            loader.style.display = "none";
        }
    }, 2000);
});

// زر فتح الدعوة (Scroll ناعم)
document.getElementById("openInvitation")?.addEventListener("click", () => {
    document.getElementById("invitation")?.scrollIntoView({
        behavior: "smooth"
    });
});

// Countdown Timer
const weddingDate = new Date("September 6, 2026 18:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const countdownElement = document.getElementById("countdown");
    if (!countdownElement) return;

    // لو التاريخ جه خلاص
    if (distance < 0) {
        countdownElement.innerHTML = "It's the Big Day! 🥂🎉";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days} Days<br>${hours} Hours<br>${minutes} Minutes<br>${seconds} Seconds`;
}

// تشغيل العداد فوراً لمنع ظهور Loading...
updateCountdown();

// تحديث العداد كل ثانية
setInterval(updateCountdown, 1000);
