const translations = {
    cz: {
        title: "Vítej na naší stránce",
        btn1: "Start",
        btn2: "O nás",
        join: "PŘIDEJ SE",
        back: "Zpět",
        startText: "Brzy tu něco bude...",
        aboutText: "Brzy tu něco bude..."
    },
    en: {
        title: "Welcome to our page",
        btn1: "Start",
        btn2: "About Us",
        join: "JOIN US",
        back: "Back",
        startText: "Something will be here soon...",
        aboutText: "Something will be here soon..."
    }
};

function setLang(lang) {
    localStorage.setItem("lang", lang);

    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        el.innerText = translations[lang][key];
    });
}

window.onload = () => {
    const lang = localStorage.getItem("lang") || "cz";
    setLang(lang);
};

function goStart() {
    window.location.href = "start.html";
}

function goAbout() {
    window.location.href = "pribeh.html";
}

function goBack() {
    window.location.href = "index.html";
}

function goTelegram() {
    window.open("https://t.me/+KAlz7OTd-_kyNzk0", "_blank");
}

function goAbout() {
    window.location.href = "pribeh.html";
}
