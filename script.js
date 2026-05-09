(function () {
    'use strict';

    var translations = {
        it: {
            nav: {
                home: "Home",
                about: "Chi sono",
                blog: "Blog",
                cv: "Curriculum",
                masterclass: "Masterclass",
                books: "Libri",
                contact: "Contatti"
            },
            hero: {
                prompt: "> chi \u00e8 Rosario Moscato?",
                name: "Rosario Moscato",
                role: "AI Engineer & Divulgatore",
                tagline: "Costruisco agenti AI che pensano, pianificano e sviluppano in autonomia.",
                location: "// Italia",
                cta: "Prenota una consulenza gratuita \u2192"
            },
            bio: {
                prompt: "> about",
                p1: "AI Engineer specializzato in <span class='highlight'>sistemi autonomi</span> e <span class='highlight'>agentic coding</span>. Costruisco agenti AI che vanno oltre il chat \u2014 sistemi che pianificano task multi-step, utilizzano strumenti, eseguono codice e si correggono autonomamente quando qualcosa va storto.",
                p2: "Il mio lavoro spazia da architetture agentiche in produzione a strumenti open source e starter kit che aiutano altri sviluppatori a costruirli pi\u00f9 velocemente. Ho sviluppato framework per agentic coding, pipeline di automazione e workflow di sviluppo autonomo.",
                p3: "Oltre a costruire prodotti, sono attivo come <span class='highlight'>trainer</span> e <span class='highlight'>speaker</span> in eventi e universit\u00e0, e scrivo <span class='highlight'>libri tecnici</span> sull'Intelligenza Artificiale pubblicati da editori internazionali."
            },
            masterclass: {
                prompt: "> masterclass",
                title: "MASTERCLASS: AGENTIC CODING",
                desc: "Impara a costruire sistemi AI autonomi che pianificano, eseguono e si correggono da soli. Dalla progettazione di architetture agentiche al deployment in produzione.",
                b1: "Architetture multi-agente e pattern di progettazione",
                b2: "Tool use, planning e self-correction loops",
                b3: "Workflow di sviluppo autonomo con Claude Code, Cursor e oltre",
                b4: "Pipeline di automazione production-ready",
                cta: "ISCRIVITI ORA"
            },
            books: {
                prompt: "> books",
                buy: "Acquista su Amazon \u2192",
                title1: "Robocrazia: Episodio 1",
                desc1: "Un viaggio narrativo nel futuro della relazione tra umani e intelligenza artificiale.",
                title2: "POST-UMANI E NUOVI DEI",
                desc2: "Piccola guida al possibile futuro che ci aspetta.",
                title3: "Web App Development Made Simple with Streamlit",
                desc3: "Guida pratica allo sviluppo, deployment e scalabilit\u00e0 di web app.",
                title4: "Mastering ChatGPT and Google Colab for Machine Learning",
                desc4: "Automatizza workflow AI con ChatGPT, Google Colab e Python.",
                title5: "Natural Language Processing Cookbook",
                desc5: "Soluzioni pratiche passo-passo per sbloccare il potenziale dell'NLP."
            },
            contact: {
                prompt: "> contact",
                consultancy_label: "consulenza:",
                consultancy_value: "clicca qui per prenotare una consulenza gratuita",
                email_label: "mailto:",
                github_label: "github:",
                linkedin_label: "linkedin:",
                amazon_label: "amazon:"
            },
            footer: {
                copy: "\u00a9 2026 Rosario Moscato. Tutti i diritti riservati."
            }
        },
        en: {
            nav: {
                home: "Home",
                about: "About",
                blog: "Blog",
                cv: "Resume",
                masterclass: "Masterclass",
                books: "Books",
                contact: "Contact"
            },
            hero: {
                prompt: "> who is Rosario Moscato?",
                name: "Rosario Moscato",
                role: "AI Engineer & Author",
                tagline: "Building AI agents that think, plan, and ship autonomously.",
                location: "// Italy",
                cta: "Book a free consultancy \u2192"
            },
            bio: {
                prompt: "> about",
                p1: "AI Engineer specializing in <span class='highlight'>autonomous systems</span> and <span class='highlight'>agentic coding</span> workflows. I build AI agents that go beyond chat \u2014 systems that plan multi-step tasks, use tools, execute code, and self-correct when things go wrong.",
                p2: "My work spans from production agent architectures to open-source tools and starter kits that help other developers build them faster. I've shipped agentic coding frameworks, automation pipelines, and autonomous development workflows.",
                p3: "Beyond building products, I'm active as a <span class='highlight'>trainer</span> and <span class='highlight'>speaker</span> at events and universities, and I write <span class='highlight'>technical books</span> on Artificial Intelligence published by international publishers."
            },
            masterclass: {
                prompt: "> masterclass",
                title: "MASTERCLASS: AGENTIC CODING",
                desc: "Learn to build autonomous AI systems that plan, execute, and self-correct. From agentic architecture design to production deployment.",
                b1: "Multi-agent architectures and design patterns",
                b2: "Tool use, planning, and self-correction loops",
                b3: "Autonomous development workflows with Claude Code, Cursor, and beyond",
                b4: "Production-ready automation pipelines",
                cta: "ENROLL NOW"
            },
            books: {
                prompt: "> books",
                buy: "Buy on Amazon \u2192",
                title1: "Robocrazia: Episodio 1",
                desc1: "A narrative journey into the future of the relationship between humans and artificial intelligence.",
                title2: "POST-UMANI E NUOVI DEI",
                desc2: "A short guide to the possible future that awaits us.",
                title3: "Web App Development Made Simple with Streamlit",
                desc3: "A web developer's guide to effortless web app development, deployment, and scalability.",
                title4: "Mastering ChatGPT and Google Colab for Machine Learning",
                desc4: "Automate AI workflows and fast-track your machine learning tasks with ChatGPT, Google Colab, and Python.",
                title5: "Natural Language Processing Cookbook",
                desc5: "Step-by-step practical solution for unlocking the power of natural language processing potential."
            },
            contact: {
                prompt: "> contact",
                consultancy_label: "consultancy:",
                consultancy_value: "click here to book a free consultancy",
                email_label: "mailto:",
                github_label: "github:",
                linkedin_label: "linkedin:",
                amazon_label: "amazon:"
            },
            footer: {
                copy: "\u00a9 2026 Rosario Moscato. All rights reserved."
            }
        }
    };

    var currentLang = localStorage.getItem('lang') || 'it';

    function getNestedValue(obj, key) {
        return key.split('.').reduce(function (o, k) {
            return o && o[k] !== undefined ? o[k] : null;
        }, obj);
    }

    function applyTranslations(data) {
        var elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            var value = getNestedValue(data, key);
            if (value !== null) {
                el.textContent = value;
            }
        });

        var htmlElements = document.querySelectorAll('[data-i18n-html]');
        htmlElements.forEach(function (el) {
            var key = el.getAttribute('data-i18n-html');
            var value = getNestedValue(data, key);
            if (value !== null) {
                el.innerHTML = value;
            }
        });
    }

    function loadLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;

        var data = translations[lang];
        if (data) {
            applyTranslations(data);
            startTyping(data.hero.tagline);
            updateLangButtons();
        }
    }

    function updateLangButtons() {
        var buttons = document.querySelectorAll('.lang-btn');
        buttons.forEach(function (btn) {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
        });
    }

    function startTyping(text) {
        var el = document.getElementById('typing-text');
        if (!el) return;
        el.textContent = '';
        var i = 0;
        var speed = 35;

        function type() {
            if (i < text.length) {
                el.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }

        setTimeout(type, 800);
    }

    function initLangSwitcher() {
        var buttons = document.querySelectorAll('.lang-btn');
        buttons.forEach(function (btn) {
            btn.addEventListener('click', function () {
                var lang = btn.getAttribute('data-lang');
                if (lang !== currentLang) {
                    loadLanguage(lang);
                }
            });
        });
    }

    function initMobileMenu() {
        var toggle = document.getElementById('mobile-toggle');
        var menu = document.getElementById('mobile-menu');
        if (!toggle || !menu) return;

        toggle.addEventListener('click', function () {
            toggle.classList.toggle('active');
            menu.classList.toggle('open');
            document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
        });

        var links = menu.querySelectorAll('a[href^="#"]');
        links.forEach(function (link) {
            link.addEventListener('click', function () {
                toggle.classList.remove('active');
                menu.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    function initScrollReveal() {
        var reveals = document.querySelectorAll('.reveal');
        if (!reveals.length) return;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            reveals.forEach(function (el) { el.classList.add('revealed'); });
            return;
        }

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        reveals.forEach(function (el) {
            observer.observe(el);
        });
    }

    function initSmoothScroll() {
        var anchors = document.querySelectorAll('a[href^="#"]');
        anchors.forEach(function (anchor) {
            anchor.addEventListener('click', function (e) {
                var href = anchor.getAttribute('href');
                if (href === '#') return;
                var target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    function initHeaderScroll() {
        var header = document.getElementById('site-header');

        window.addEventListener('scroll', function () {
            var currentScroll = window.pageYOffset;
            if (currentScroll > 100) {
                header.style.borderBottomColor = 'var(--border-light)';
            } else {
                header.style.borderBottomColor = 'var(--border)';
            }
        }, { passive: true });
    }

    function init() {
        initLangSwitcher();
        initMobileMenu();
        initScrollReveal();
        initSmoothScroll();
        initHeaderScroll();
        loadLanguage(currentLang);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
