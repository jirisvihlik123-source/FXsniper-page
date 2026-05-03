const translations = {
    cz: {
        // MAIN PAGE
        main: "FXSNIPER",
        desc: "Automatický Forex bot analyzující trh v reálném čase.",

        precision: "PRECISION",
        precisionText: "Pouze kvalitní vstupy. Žádné zbytečné trady.",

        performance: "PERFORMANCE",
        performanceText: "Statistiky, winrate a kontrolovaný risk management.",

        welcome: "Vítejte v FXsniper",
        startBtn: "Start",
        joinTop: "PŘIDEJ SE",

        // START PAGE
        s1_title: "O produktu",
        s1_text: "FXSniper je automatický trading bot, který analyzuje trh v reálném čase a sleduje více měnových párů současně. Pomocí pokročilé analýzy vyhledává nejkvalitnější obchodní příležitosti a posílá přesné signály pro vstup do obchodu.",

        s2_text: "Reaguje okamžitě na změny trhu a využívá kombinaci price action, support/resistance a statistického vyhodnocení.",

        s3_text: "Každý signál obsahuje jasně definovaný stop-loss a take-profit.",

        // BUTTONS
        teamBtn: "O týmu",
        reqBtn: "Požadavky"
    },

    en: {
        // MAIN PAGE
        main: "FXSNIPER",
        desc: "Automated Forex bot analyzing the market in real time.",

        precision: "PRECISION",
        precisionText: "Only high-quality entries.",

        performance: "PERFORMANCE",
        performanceText: "Track statistics and performance.",

        welcome: "Welcome to FXsniper",
        startBtn: "Start",
        joinTop: "JOIN",

        // START PAGE
        s1_title: "About the Product",
        s1_text: "FXSniper is an automated trading bot that analyzes the market in real time and monitors multiple currency pairs simultaneously. It uses advanced analysis to find high-quality trading opportunities and sends precise entry signals.",

        s2_text: "It reacts instantly to market changes using a combination of price action, support/resistance, and statistical evaluation.",

        s3_text: "Each signal includes clearly defined stop-loss and take-profit levels.",

        // BUTTONS
        teamBtn: "About the Team",
        reqBtn: "Requirements"
    }
};

// 🔄 změna jazyka
function setLang(lang) {
    localStorage.setItem("lang", lang);

    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });
}

// 🔥 načtení jazyka při startu
window.onload = function () {
    const savedLang = localStorage.getItem("lang") || "cz";
    setLang(savedLang);
};

// 🚀 navigace
function goStart() {
    window.location.href = "start.html";
}

function goTelegram() {
    window.open("https://t.me/+KAlz7OTd-_kyNzk0", "_blank");
}

function goTeam() {
    window.location.href = "team.html";
}

function goRequirements() {
    window.location.href = "requirements.html";
}
