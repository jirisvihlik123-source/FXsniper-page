function setLang(lang) {

    if (lang === "cz") {
        document.getElementById("title").innerText = "Vítej na naší stránce";
        document.getElementById("btn1").innerText = "Start";
        document.getElementById("btn2").innerText = "Příběh";
        document.getElementById("btn3").innerText = "Kontakt";
    }

    if (lang === "en") {
        document.getElementById("title").innerText = "Welcome to our page";
        document.getElementById("btn1").innerText = "Start";
        document.getElementById("btn2").innerText = "Story";
        document.getElementById("btn3").innerText = "Contact";
    }

}
