function toggleLang() {
  var current = localStorage.getItem('lang') || 'en';
  setLang(current === 'en' ? 'da' : 'en');
}

function setLang(lang) {
  localStorage.setItem('lang', lang);
  document.documentElement.setAttribute('data-lang', lang);
  var btn = document.getElementById('langToggle');
  if (btn) btn.textContent = lang === 'en' ? 'Dansk' : 'English';
}

(function () {
  var lang = localStorage.getItem('lang') || 'en';
  setLang(lang);
})();
