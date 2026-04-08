// 🔥 VŠECHNY TEXTY NA JEDNOM MÍSTĚ
const translations = {
    cz: {
        title: "Vítej na naší stránce",
        btn1: "Start",
        btn2: "Příběh",
        btn3: "Kontakt"
    },
    en: {
        title: "Welcome to our page",
        btn1: "Start",
        btn2: "Story",
        btn3: "Contact"
    }
};

// 🔄 ZMĚNA JAZYKA
function setLang(lang) {
    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        el.innerText = translations[lang][key];
    });
}

// 🚀 PŘECHOD NA DALŠÍ STRÁNKU
function goStart() {
    window.location.href = "start.html";
}
