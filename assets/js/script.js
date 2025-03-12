document.addEventListener("DOMContentLoaded", function () {
    const langToggle = document.getElementById("lang-toggle");
    const elements = {
        title: document.getElementById("title"),
        intro: document.getElementById("intro"),
        shop: document.getElementById("shop"),
        recipes: document.getElementById("recipes"),
        research: document.getElementById("research"),
        future: document.getElementById("future"),
        impressum: document.getElementById("impressum"),
        // Impressum page elements
        impressumTitle: document.getElementById("impressum-title"),
        businessNameLabel: document.getElementById("business-name-label"),
        addressLabel: document.getElementById("address-label"),
        phoneLabel: document.getElementById("phone-label"),
        emailLabel: document.getElementById("email-label"),
        representativesLabel: document.getElementById("representatives-label"),
        supervisoryLabel: document.getElementById("supervisory-label"),
        registrationLabel: document.getElementById("registration-label"),
        vatLabel: document.getElementById("vat-label"),
    };

    const translations = {
        en: {
            title: "Lion's Mane Mushrooms",
            intro: "Welcome to our site! Learn more about Lion's Mane mushrooms.",
            shop: "Shop Dried Mushrooms",
            recipes: "Recipes",
            research: "Research & Benefits",
            future: "Future Products",
            impressum: "Impressum",
            // Impressum page translations
            impressumTitle: "Impressum",
            businessNameLabel: "Business Name:",
            addressLabel: "Address:",
            phoneLabel: "Phone:",
            emailLabel: "Email:",
            representativesLabel: "Authorized Representatives:",
            supervisoryLabel: "Supervisory Authority:",
            registrationLabel: "Company Registration:",
            vatLabel: "VAT ID:",
            button: "Switch to German",
        },
        de: {
            title: "Löwenmähne Pilze",
            intro: "Willkommen auf unserer Website! Erfahren Sie mehr über Löwenmähne-Pilze.",
            shop: "Getrocknete Pilze kaufen",
            recipes: "Rezepte",
            research: "Forschung & Vorteile",
            future: "Zukünftige Produkte",
            impressum: "Impressum",
            // Impressum page translations
            impressumTitle: "Impressum",
            businessNameLabel: "Firmenname:",
            addressLabel: "Adresse:",
            phoneLabel: "Telefon:",
            emailLabel: "E-Mail:",
            representativesLabel: "Vertretungsberechtigte:",
            supervisoryLabel: "Aufsichtsbehörde:",
            registrationLabel: "Handelsregister:",
            vatLabel: "USt-ID:",
            button: "Wechseln zu Englisch",
        },
    };

    let currentLang = "en";

    langToggle.addEventListener("click", function () {
        currentLang = currentLang === "en" ? "de" : "en";
        langToggle.textContent = translations[currentLang].button;
        Object.keys(elements).forEach(key => {
            if (elements[key] && translations[currentLang][key]) {
                elements[key].textContent = translations[currentLang][key];
            }
        });
    });
}); 