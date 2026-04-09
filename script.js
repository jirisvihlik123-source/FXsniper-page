const translations = {
    cz: {
        title: "Vítej na naší stránce",
        btn1: "Start",
        btn2: "O nás",
        btn3: "Kontakt",
        back: "Zpět",
        startText: "Brzy tu něco bude...",
        aboutText: "Brzy tu něco bude..."
    },
    en: {
        title: "Welcome to our page",
        btn1: "Start",
        btn2: "About Us",
        btn3: "Contact",
        back: "Back",
        startText: "Something will be here soon...",
        aboutText: "Something will be here soon..."
    }
};

// 🔄 změna jazyka + uložení
function setLang(lang) {
    localStorage.setItem("lang", lang);

    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        el.innerText = translations[lang][key] || key;
    });
}

// 🔥 automatické načtení jazyka na každé stránce
window.onload = () => {
    const savedLang = localStorage.getItem("lang") || "cz";
    setLang(savedLang);
};

// 🚀 navigace mezi stránkami
function goStart() {
    window.location.href = "start.html";
}

function goAbout() {
    window.location.href = "pribeh.html";
}

function goTelegram() {
    window.open("https://t.me/+KAlz7OTd-_kyNzk0", "_blank");
}
    window.location.href = "index.html";
}
