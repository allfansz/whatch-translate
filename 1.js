document.addEventListener("DOMContentLoaded", function () {
  const lang = navigator.language || navigator.userLanguage;

  const translations = {
          en: "Click to watch",
          de: "Klicken Sie zum Ansehen",
          nl: "Klik om te kijken",
          da: "Klik for at se",
          fi: "Klikkaa katsoaksesi",
          fr: "Cliquez pour regarder",
          it: "Clicca per guardare",
          es: "Haz clic para ver",
          sv: "Klicka för att titta",
          ja: "クリックして見る",
          no: "Klikk for å se",
          pt: "Clique para assistir",
          zh: "点击观看",
          cs: "Klikněte pro sledování",
  };

  const selectedTranslation = translations[lang.slice(0, 2)] || translations["en"];

  // Ganti semua elemen dengan teks "Click to watch"
  document.querySelectorAll("*").forEach(function (el) {
    if (el.childNodes.length === 1 && el.childNodes[0].nodeType === 3) {
      if (el.textContent.trim() === "Click to watch") {
        el.textContent = selectedTranslation;
      }
    }
  });
});
