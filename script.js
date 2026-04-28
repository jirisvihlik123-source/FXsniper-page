const translations = {
    cz: {
        main: "FXSNIPER",
        desc: "Automatický Forex bot analyzující trh v reálném čase.",

        precision: "PRECISION",
        precisionText: "Pouze kvalitní vstupy. Žádné zbytečné trady.",

        performance: "PERFORMANCE",
        performanceText: "Statistiky, winrate a kontrolovaný risk management.",

        welcome: "Vítejte v FXsniper",
        startBtn: "Start",
        joinTop: "PŘIDEJ SE"
    },

    en: {
        main: "FXSNIPER",
        desc: "Automated Forex bot analyzing the market in real time.",

        precision: "PRECISION",
        precisionText: "Only high-quality entries.",

        performance: "PERFORMANCE",
        performanceText: "Track statistics and performance.",

        welcome: "Welcome to FXsniper",
        startBtn: "Start",
        joinTop: "JOIN"
    }
};

function setLang(lang) {
    localStorage.setItem("lang", lang);

    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });
}

window.onload = function () {
    const savedLang = localStorage.getItem("lang") || "cz";
    setLang(savedLang);
};

function goStart() {
    window.location.href = "start.html";
}

function goTelegram() {
    window.open("https://t.me/+KAlz7OTd-_kyNzk0", "_blank");
}
