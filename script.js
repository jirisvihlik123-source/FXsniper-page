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
        precisionText: "Only high-quality entries. No unnecessary trades.",

        performance: "PERFORMANCE",
        performanceText: "Track statistics, winrate and optimize risk management.",

        welcome: "Welcome to FXsniper",
        startBtn: "Start",
        joinTop: "JOIN"
    }
};

// změna jazyka
function setLang(lang) {
    localStorage.setItem("lang", lang);

    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });
}

// načtení při startu
window.onload = () => {
    const savedLang = localStorage.getItem("lang") || "cz";
    setLang(savedLang);
};

// navigace
function goStart() {
    window.location.href = "start.html";
}

// telegram
function goTelegram() {
    window.open("https://t.me/+KAlz7OTd-_kyNzk0", "_blank");
}
