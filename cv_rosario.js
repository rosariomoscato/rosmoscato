
(() => {
  const italian = {
    back: '← torna alla home',
    prompt: '// curriculum_vitae.json — aggiornato a maggio 2026',
    headline: 'Chief AI Officer | Eticista dell\'IA | Speaker TEDx | Autore',
    tedx_link: 'Guarda il mio talk TEDxNTUA ↗',
    location: 'Napoli, Italia — 9 gen 1972',
    core_skills: 'Competenze chiave',
    work_experience: 'Esperienza professionale',
    education: 'Formazione', languages: 'Lingue', publications: 'Pubblicazioni',
    teaching: 'Didattica e lezioni',
    skills: ['Orchestrazione di agenti a lunga esecuzione', 'Agentic Coding', 'Claude Code', 'Open Code', 'Codex', 'Metodologia Lights-Out', 'Machine Learning', 'Deep Learning', 'NLP', 'IA generativa', 'Etica dell\'IA', 'Computer Vision', 'MLOps', 'Vercel', 'Docker / Podman', 'Applicazioni web', 'Iperautomazione', 'PWA', 'No-code'],
    dates: ["mag 2026 — <span class=\"present\">in corso</span>","apr 2026 — <span class=\"present\">in corso</span>","nov 2024 — <span class=\"present\">in corso</span>","giu 2024 — <span class=\"present\">in corso</span>","set 2023 — <span class=\"present\">in corso</span>","gen 2023 — giu 2026","mar 2022 — dic 2022","feb 2020 — feb 2022","lug 2018 — lug 2020","gen 2015 — giu 2018","dic 2013 — dic 2014","mag 2007 — giu 2013","giu 2006 — giu 2007","giu 2004 — giu 2006","mag 2000 — mag 2004"],
    roles: ["Responsabile Innovazione e Sostenibilità","Membro del Consiglio","Presidente e Chief AI Officer","Autore della sezione IA","Coordinatore — Neurobioetica e IA","CTO / CAIO","Senior Data Scientist","Senior Technical Account Manager","Titolare — Studio Modelli IA e POC","Vicepresidente Estero","Direttore Europa Meridionale","Direttore Dispositivi Mobili","Program Manager","Responsabile di progetto — Gruppo R&S","Analista software e DBA"],
    degrees: ['Master post-laurea — Scienza e Fede <span class="laude">M.c.L.</span>', 'Diploma in Apologetica <span class="laude">M.c.L.</span>', 'Master post-laurea — Progettazione software Internet', 'Ingegneria Elettronica (Biomedica)'],
    educationDates: ['ott 2017 – giu 2019', 'ott 2011 – giu 2012', 'mag 2000 – dic 2000', 'ott 1990 – mar 1999'],
    thesis: 'Tesi: "Impiego di sistemi di videoconferenza in applicazioni di telemedicina"',
    languageTags: ['Italiano — Madrelingua', 'Inglese — C2'],
    lectures: ['Modulo tecnico-informatico del corso "Metafisica dell\'Algoritmo"', 'Produzione autonoma di software', '"Neurobioetica e Intelligenza Artificiale", corso "Elementi di Neurobioetica"', 'Elaborazione del linguaggio naturale: modulo pratico', 'Introduzione all\'Intelligenza Artificiale', 'Introduzione all\'elaborazione del linguaggio naturale', 'NLP · Etica dell\'IA · Streamlit · Gradio · PyGame'],
    lectureWhere: ['Laurea magistrale in Filosofia · Ateneo Pontificio Regina Apostolorum — 2026', 'Master IA e Data Science · Università della Calabria — 2026', 'Ateneo Pontificio Regina Apostolorum — 2026', 'Master IA e Data Science · Università della Calabria — 2025', 'Master in Scienza e Fede — Ateneo Pontificio Regina Apostolorum — dal 2019<br>Corso di Perfezionamento in Neurobioetica — Ateneo Pontificio Regina Apostolorum — dal 2019', 'Università Europea di Roma · Universidad Francisco de Vitoria · Universidad Anáhuac Online — 2020', 'corsi online su Udemy'],
    availability: 'disponibile per consulenze e interventi come speaker',
    legal: 'Autorizzo il trattamento dei dati personali ai sensi dell\'art. 13 d.lgs. 30/06/2006 · GDPR 679/16'
  };
  const englishOverrides = {
    back: '← back to home', prompt: '// curriculum_vitae.json — updated May 2026',
    headline: 'Chief AI Officer | AI Ethicist | TEDx Speaker | Books Author', tedx_link: 'Watch my TEDxNTUA talk ↗', location: 'Napoli, Italy — 9 Jan 1972',
    core_skills: 'Core skills', work_experience: 'Professional experience',
    skill1: 'Long Running Agents Harnessing', skill6: 'Lights-Out Methodology', skill11: 'AI Ethics', skill16: 'Web Apps'
  };
  const english = {
    skills: ['Long Running Agents Harnessing', 'Agentic Coding', 'Claude Code', 'Open Code', 'Codex', 'Lights-Out Methodology', 'Machine Learning', 'Deep Learning', 'NLP', 'Generative AI', 'AI Ethics', 'Computer Vision', 'MLOps', 'Vercel', 'Docker / Podman', 'Web Apps', 'Hyperautomation', 'PWA', 'No-code'],
    dates: ["May 2026 — <span class=\"present\">present</span>","Apr 2026 — <span class=\"present\">present</span>","Nov 2024 — <span class=\"present\">present</span>","Jun 2024 — <span class=\"present\">present</span>","Sep 2023 — <span class=\"present\">present</span>","Jan 2023 — Jun 2026","Mar 2022 — Dec 2022","Feb 2020 — Feb 2022","Jul 2018 — Jul 2020","Jan 2015 — Jun 2018","Dec 2013 — Dec 2014","May 2007 — Jun 2013","Jun 2006 — Jun 2007","Jun 2004 — Jun 2006","May 2000 — May 2004"],
    roles: ["Head of Innovation & Sustainability","Board Member","President & Chief AI Officer","AI Section Author","Coordinator — Neurobioethics & AI","CTO / CAIO","Senior Data Scientist","Senior Technical Account Manager","Owner — AI Models & POCs Studio","Vice President Overseas","South Europe Director","Mobile Devices Director","Program Manager","Project Leader — R&D Group","Software Analyst & DBA"],
    degrees: ['Postgrad. Master — Scienza e Fede <span class="laude">M.c.L.</span>', 'Diploma in Apologetica <span class="laude">M.c.L.</span>', 'Postgrad. Master — Internet Software Design', 'Ingegneria Elettronica (Biomedica)'],
    educationDates: ['Oct 2017 – Jun 2019', 'Oct 2011 – Jun 2012', 'May 2000 – Dec 2000', 'Oct 1990 – Mar 1999'],
    languageTags: ['Italian — Native', 'English — C2'],
    lectures: ['Modulo Tecnico-Informatico corso "Metafisica dell\'Algoritmo"', 'Autonomous Software Manufacturing', '"Neurobioetica e Intelligenza Artificiale" corso "Elementi di Neurobioetica"', 'Natural Language Processing: Modulo Pratico', 'Introduzione all\'Intelligenza Artificiale', 'Introduction to Natural Language Processing', 'NLP · AI Ethics · Streamlit · Gradio · PyGame'],
    lectureWhere: ['Laurea Magistrale in Filosofia · Ateneo Pontificio Regina Apostolorum — 2026', 'Master AI & Data Science · Università della Calabria — 2026', 'Ateneo Pontificio Regina Apostolorum — 2026', 'Master AI & Data Science · Università della Calabria — 2025', 'Master in Scienza e Fede — Ateneo Pontificio Regina Apostolorum — since 2019<br>Corso di Perfezionamento in Neurobioetica — Ateneo Pontificio Regina Apostolorum — since 2019', 'Università Europea di Roma · Universidad Francisco de Vitoria · Universidad Anáhuac Online — 2020', 'online courses on Udemy']
  };
  const text = (selector, key, value, html = false) => {
    const element = document.querySelector(selector);
    if (!element) return;
    element.dataset.i18n = key;
    element.dataset.en = englishOverrides[key] || (html ? element.innerHTML : element.textContent);
    element.dataset.it = value;
    element.dataset.html = html;
  };
  const list = (selector, prefix, values, englishValues, html = false) => document.querySelectorAll(selector).forEach((element, index) => {
    const key = `${prefix}${index}`;
    element.dataset.i18n = key;
    element.dataset.en = englishValues[index];
    element.dataset.it = values[index];
    element.dataset.html = html;
  });

  text('.back-link', 'back', italian.back); text('.prompt', 'prompt', italian.prompt);
  text('.title-line span', 'headline', italian.headline); text('.tedx-link', 'tedx_link', italian.tedx_link); text('.contact-item span', 'location', italian.location);
  text('.section-label', 'core_skills', italian.core_skills);
  document.querySelectorAll('.section-label').forEach((element, index) => {
    const keys = ['core_skills', 'work_experience', 'education', 'languages', 'publications', 'teaching'];
    const values = [italian.core_skills, italian.work_experience, italian.education, italian.languages, italian.publications, italian.teaching];
    const key = keys[index]; element.dataset.i18n = key; element.dataset.en = englishOverrides[key] || element.textContent; element.dataset.it = values[index];
  });
  list('.skills-grid .skill-tag', 'skill', italian.skills, english.skills);
  list('.date-range', 'date', italian.dates, english.dates, true); list('.entry-title', 'role', italian.roles, english.roles);
  list('.edu-degree', 'degree', italian.degrees, english.degrees, true); list('.edu-date:not([style])', 'educationDate', italian.educationDates, english.educationDates);
  text('.edu-date[style]', 'thesis', italian.thesis);
  document.querySelectorAll('.edu-item + div .skill-tag').forEach((element, index) => {
    const key = `language${index}`; element.dataset.i18n = key; element.dataset.en = english.languageTags[index]; element.dataset.it = italian.languageTags[index];
  });
  list('.lecture-name', 'lecture', italian.lectures, english.lectures); list('.lecture-where', 'lectureWhere', italian.lectureWhere, english.lectureWhere, true);
  text('.status-bar', 'availability', `<div class="status-dot"></div> ${italian.availability}`, true);
  text('.footer > div:last-child', 'legal', italian.legal);

  const metadata = {
    it: {
      title: 'Rosario Moscato — Curriculum Vitae | AI Engineer, Autore e Speaker',
      description: 'Curriculum vitae di Rosario Moscato — AI Engineer, autore, speaker e consulente specializzato in sistemi autonomi, agentic coding, etica AI e neurobioetica.',
      ogTitle: 'Rosario Moscato — Curriculum Vitae', ogDescription: 'AI Engineer, autore, speaker specializzato in sistemi autonomi, agentic coding, etica AI e neurobioetica.', locale: 'it_IT'
    },
    en: {
      title: 'Rosario Moscato — CV | AI Engineer, Author & Speaker',
      description: 'Curriculum vitae of Rosario Moscato — AI Engineer, author, speaker and consultant specializing in autonomous systems, agentic coding, AI ethics and neurobioethics.',
      ogTitle: 'Rosario Moscato — Curriculum Vitae', ogDescription: 'AI Engineer, author and speaker specializing in autonomous systems, agentic coding, AI ethics and neurobioethics.', locale: 'en_US'
    }
  };
  const setMeta = (selector, value) => document.querySelector(selector).setAttribute('content', value);
  const setLanguage = (lang) => {
    const selected = lang === 'en' ? 'en' : 'it';
    document.documentElement.lang = selected;
    document.querySelectorAll('.page [data-i18n]').forEach((element) => {
      const value = element.dataset[selected];
      if (element.dataset.html === 'true') element.innerHTML = value;
      else element.textContent = value;
    });
    document.querySelectorAll('.lang-btn').forEach((button) => {
      const active = button.dataset.lang === selected;
      button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active));
    });
    document.querySelector('.lang-switch').setAttribute('aria-label', selected === 'it' ? 'Seleziona lingua' : 'Select language');
    const meta = metadata[selected]; document.title = meta.title;
    setMeta('meta[name="description"]', meta.description); setMeta('meta[property="og:title"]', meta.ogTitle);
    setMeta('meta[property="og:description"]', meta.ogDescription); setMeta('meta[property="og:locale"]', meta.locale);
    setMeta('meta[name="twitter:title"]', meta.ogTitle); setMeta('meta[name="twitter:description"]', meta.ogDescription);
    try { localStorage.setItem('lang', selected); } catch (_) { /* Storage may be unavailable. */ }
  };
  let initial = 'it'; try { initial = localStorage.getItem('lang') === 'en' ? 'en' : 'it'; } catch (_) { /* Italian is the fallback. */ }
  document.querySelectorAll('.lang-btn').forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
  setLanguage(initial);
})();



(() => {
 const labels = {home:['Home','Home'],about:['Chi sono','About'],lightsout:['Metodo e strumenti','Method & tools'],books:['Libri e blog','Books & blog'],cv:['Curriculum','Resume'],contact:['Contatti','Contact']};
 const update = () => {
  const en=document.documentElement.lang==='en';
  document.querySelectorAll('[data-nav-key]').forEach(el=>{ const key=el.dataset.navKey.split('.').pop(); if(labels[key])el.textContent=labels[key][en?1:0]; });
  document.querySelectorAll('.lang-switch,.mobile-lang').forEach(el=>el.setAttribute('aria-label',en?'Select language':'Seleziona lingua'));
  document.querySelectorAll('[data-legal-label]').forEach(el=>el.textContent=el.dataset.legalLabel==='privacy'?(en?'Privacy & cookies':'Privacy e cookie'):(en?'Legal notice':'Note legali'));
  document.querySelector('#mobile-toggle').setAttribute('aria-label',en?'Open or close the menu':'Apri o chiudi il menu');
 };
 document.querySelectorAll('.lang-btn').forEach(button=>button.addEventListener('click',update)); update();
})();
