(function () {
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

  const countryToLang = {
    AU: "en",
    AT: "de",
    BE: "nl",
    CA: "en",
    DK: "da",
    FI: "fi",
    FR: "fr",
    DE: "de",
    IT: "it",
    NL: "nl",
    ES: "es",
    SE: "sv",
    CH: "de",
    GB: "en",
    US: "en",
    JP: "ja",
    NO: "no",
    PT: "pt",
    NZ: "en",
    TW: "zh",
    CZ: "cs",
  };

  fetch("https://get.geojs.io/v1/ip/country.json")
    .then((res) => res.json())
    .then((data) => {
      const country = data.country;
      const lang = countryToLang[country] || "en";
      const translated = translations[lang] || translations["en"];
      document.querySelectorAll(".watch-text").forEach((el) => {
        el.textContent = translated;
      });
    });
})();
