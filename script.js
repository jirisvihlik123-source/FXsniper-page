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
        t1_text: "Tím, že víme, že dnes je cíl každého člověka být úspěšný a zabezpečený, což se může zdát těžké nebo nereálné, rozhodli jsme se, že když už se delší dobu zajímáme o trading a tvorbu softwaru, vytvoříme si vlastní produkt – ale svojí cestou, poctivě a bez podvodů, protože jsme si vědomi, kolik takových podvodů na světě je. Spojení nás tří mladých kluků nebylo těžké, ale potřebovali jsme se ještě sami něco přiučit. Jelikož nás tvorba tohoto produktu opravdu baví, začali jsme se bavit o všem, co je naším osobním cílem, a to nás dovedlo k domluvě, spojení a spolupráci.",

        t2_text: "Začátkem naší cesty byl nápad jednoho z nás. Vše to začalo v druhém ročníku střední školy. Každý z nás se uchopil nějakého úkolu a ty jsme postupně plnili, až jsme dospěli k prvnímu reálnému výsledku, který jsme následně obchodovali na platformě MetaTrader. Bohužel to tímto ale nekončí, jako ostatně u všeho co se snažíte vybudovat. Stále se snažíme náš produkt vylepšovat, a to na základě poctivosti, efektivity a dlouhodobé udržitelnosti.",

        t3_text: "Naším hlavním cílem je především pomoci našim klientům, ale také se sami stát úspěšnými, hlavně tedy díky pomoci jiným lidem. Díky tomu vznikl tento projekt, který nám pomůže dostat se tam, kam chceme, a budovat silnou komunitu lidí, kteří budou spokojení s naším produktem, ale také budovat něco nového, co se na světě moc nevidí.",

        backBtn: "Zpět",
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
        t1_text: "We understand that today, everyone’s goal is to become successful and financially secure, which can often seem difficult or unrealistic. Since we have been interested in trading and software development for a long time, we decided to create our own product – in our own way, honestly and without scams, because we are aware of how many of them exist in the world. Bringing the three of us together wasn’t difficult, but we still had a lot to learn. As we genuinely enjoy building this product, we started discussing our personal goals, which led us to an agreement, connection, and collaboration.",

        t2_text: "The beginning of our journey started with an idea from one of us. It all began during the second year of high school. Each of us took on a specific role, and step by step we worked towards our first real result, which we later traded on the MetaTrader platform. However, it doesn’t end there, just like anything you try to build. We continuously work on improving our product based on honesty, efficiency, and long-term sustainability.",

        t3_text: "Our main goal is to help our clients, while also becoming successful ourselves—primarily by helping others. This is how this project was created: to help us reach our goals and build a strong community of people who are satisfied with our product, while also creating something new that is rarely seen in today’s world.",

        backBtn: "Back",
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
