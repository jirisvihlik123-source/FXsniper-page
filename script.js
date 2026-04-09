// 🔥 TEXTY
const translations = {
    cz: {
        title: "Vítej na naší stránce",
        btn1: "Start",
        btn2: "O nás",
        join: "PŘIDEJ SE"
    },
    en: {
        title: "Welcome to our page",
        btn1: "Start",
        btn2: "About Us",
        join: "JOIN US"
    }
};

// 🔄 změna jazyka
function setLang(lang) {
    localStorage.setItem("lang", lang);

    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        el.innerText = translations[lang][key] || key;
    });
}

// 🔥 načtení jazyka
window.onload = () => {
    const savedLang = localStorage.getItem("lang") || "cz";
    setLang(savedLang);
};

// 🚀 navigace
function goStart() {
    window.location.href = "start.html";
}

function goAbout() {
    window.location.href = "pribeh.html";
}
