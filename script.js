const translations = {
    cz: {
        title: "Vítej na naší stránce",
        btn1: "Start",
        btn2: "Příběh",
        btn3: "Kontakt",
        back: "Zpět",
        startText: "Brzy tu něco bude..."
    },
    en: {
        title: "Welcome to our page",
        btn1: "Start",
        btn2: "Story",
        btn3: "Contact",
        back: "Back",
        startText: "Something will be here soon..."
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

// 🚀 přechody
function goStart() {
    window.location.href = "start.html";
}

function goBack() {
    window.location.href = "index.html";
}
