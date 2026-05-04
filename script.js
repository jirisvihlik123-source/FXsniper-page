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

        // BUTTONS (START)
        teamBtn: "O týmu",
        reqBtn: "Požadavky",

        // TEAM PAGE
        t1_title: "Náš příběh",
        t1_text: "Každý člověk chce být bohatý a finančně zabezpečený, ale pro většinu lidí se to zdá těžké nebo nedosažitelné.",

        t2_text: "Rozhodli jsme se, že když už se delší dobu zajímáme o trading a vše kolem něj, vytvoříme software pro každého – vlastní cestou, bez podvodů, protože víme, kolik jich dnes existuje.",

        t3_text: "Spojení nás tří mladých kluků nebylo těžké, ale museli jsme si k sobě najít cestu. Každý z nás má jiný pohled na svět a stále se navzájem posouváme dál.",

        t4_text: "Naším hlavním cílem je pomoci našim klientům a zároveň se sami stát úspěšnými a finančně nezávislými. Proto jsme vytvořili tento projekt – pro každého.",

        backBtn: "Zpět"
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

        // BUTTONS (START)
        teamBtn: "About the Team",
        reqBtn: "Requirements",

        // TEAM PAGE
        t1_title: "Our Story",
        t1_text: "Everyone wants to be wealthy and financially secure, but for most people it feels difficult or unreachable.",

        t2_text: "Since we have been interested in trading and everything around it for a long time, we decided to create software for everyone – in our own way, without scams, because we know how many of them exist today.",

        t3_text: "Bringing the three of us together wasn’t difficult, but we had to find our path. Each of us has a different perspective on life, and we continue to push each other forward.",

        t4_text: "Our main goal is to help our clients while also becoming successful and financially independent ourselves. That’s why we created this project – for everyone.",

        backBtn: "Back"
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

function goInstagram() {
    window.open("https://www.instagram.com/_fxsniper/", "_blank");
}
