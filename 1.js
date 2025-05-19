(function () {
  const translations = {
    en: "Click to watch",
    es: "Haz clic para ver",
    fr: "Cliquez pour regarder",
    de: "Klicken zum Ansehen",
    it: "Clicca per guardare",
    pt: "Clique para assistir",
    ru: "Нажмите, чтобы посмотреть",
    zh: "点击观看",
    ja: "クリックして視聴",
    ko: "시청하려면 클릭하세요",
    ar: "انقر للمشاهدة",
    hi: "देखने के लिए क्लिक करें",
    id: "Klik untuk menonton",
    ms: "Klik untuk menonton",
    th: "คลิกเพื่อดู",
    tr: "İzlemek için tıklayın",
    vi: "Nhấn để xem",
    pl: "Kliknij, aby obejrzeć",
    uk: "Натисніть, щоб переглянути",
    ro: "Click pentru a viziona",
    nl: "Klik om te kijken",
    sv: "Klicka för att titta",
    fi: "Klikkaa katsellaksesi",
    cs: "Klikněte pro sledování",
    el: "Κάντε κλικ για να παρακολουθήσετε",
    he: "לחץ כדי לצפות"
  };

  function getLanguage() {
    const lang = navigator.language || navigator.userLanguage;
    const code = lang.split('-')[0];
    return translations[code] || translations['en'];
  }

  window.getTranslatedWatchText = function () {
    return getLanguage();
  };

  // Optional: auto insert into .watch-text elements
  document.querySelectorAll(".watch-text").forEach(el => {
    el.innerText = getLanguage();
  });
})();
