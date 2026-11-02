
(() => {
 const labels={home:['Home','Home'],about:['Chi sono','About'],lightsout:['Metodo e strumenti','Method & tools'],books:['Libri e blog','Books & blog'],cv:['Curriculum','Resume'],contact:['Contatti','Contact']};
 const titles=Object.fromEntries([...document.querySelectorAll('[data-legal-lang]')].map(article=>[article.dataset.legalLang,article.querySelector('h1').textContent]));
 const setLanguage=lang=>{
   const en=lang==='en';document.documentElement.lang=lang;document.title=titles[lang]+' — Rosario Moscato';
   document.querySelectorAll('[data-legal-lang]').forEach(article=>article.hidden=article.dataset.legalLang!==lang);
   document.querySelectorAll('nav [data-i18n]').forEach(el=>{const key=el.dataset.i18n.split('.').pop();if(labels[key])el.textContent=labels[key][en?1:0];});
   document.querySelectorAll('[data-legal-label]').forEach(el=>el.textContent=el.dataset.legalLabel==='privacy'?(en?'Privacy & cookies':'Privacy e cookie'):(en?'Legal notice':'Note legali'));
   document.querySelectorAll('.lang-btn').forEach(button=>{const active=button.dataset.lang===lang;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
   document.querySelector('#mobile-toggle').setAttribute('aria-label',en?'Open or close the menu':'Apri o chiudi il menu');
   try{localStorage.setItem('lang',lang);}catch(_){}
 };
 document.querySelectorAll('.lang-btn').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.lang)));
 let initial='it';try{if(localStorage.getItem('lang')==='en')initial='en';}catch(_){}setLanguage(initial);
})();
