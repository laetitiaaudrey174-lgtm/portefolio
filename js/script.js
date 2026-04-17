// Main Javascript File

const translations = {
    fr: {
        nav_home: "Accueil",
        nav_about: "À propos",
        nav_skills: "Compétences",
        nav_education: "Formation",
        nav_portfolio: "Réalisations",
        nav_contact: "Contact",
        hero_hello: "Bonjour, je suis",
        hero_desc: "Passionnée par le design graphique, je crée des expériences visuelles modernes et engageantes.",
        hero_btn_projects: "Voir Mes Projets",
        hero_btn_about: "En Savoir Plus",
        about_tag: "Design",
        about_tag_sub: "Passionnée",
        about_subtitle: "À propos de moi",
        about_title_1: "Créer avec passion &",
        about_title_2: "innovation",
        about_desc: "Je suis une designer passionnée par la création graphique. Je m'efforce de donner vie à des idées créatives à travers des conceptions visuelles captivantes et des interfaces intuitives.",
        about_bullet_1: "Conception de Logos & Identité Visuelle",
        about_bullet_2: "Design UI/UX Moderne",
        about_bullet_3: "Création de Contenus pour Réseaux Sociaux",
        about_btn: "Mes Compétences <i class='fas fa-arrow-right ms-2'></i>",
        skills_subtitle: "Mon Expertise",
        skills_title: "Mes <span class='text-gradient'>Compétences</span>",
        skills_desc: "Cliquez sur une compétence pour en savoir plus sur mon approche et mon parcours passionné dans le design.",
        skill_1_title: "Design Graphique",
        skill_1_desc: "Création visuelle & Identité",
        skill_2_title: "Design UI/UX",
        skill_2_desc: "Interfaces utilisateur intuitives",
        skill_3_title: "Création de Logos",
        skill_3_desc: "Marques mémorables",
        skill_4_title: "Intégration Web",
        skill_4_desc: "HTML / CSS / JS",
        skill_5_title: "Motion Design",
        skill_5_desc: "Animation & Vidéo",
        skill_6_title: "Print Designer",
        skill_6_desc: "Supports Imprimés",
        edu_subtitle: "Mon Parcours",
        edu_title: "Ma <span class='text-gradient'>Formation</span>",
        edu_desc: "Aperçu de mon parcours académique et de mes apprentissages.",
        edu_1_title: "BTS / HND Design Graphique et Web",
        edu_1_school: "IUGET, Bonaberi",
        edu_1_desc: "Études en design visuel et web. Localisation : 4-stage Bonaberi, Douala, Cameroun.",
        edu_2_title: "Advanced Level en Sciences",
        edu_2_school: "NABICO, Bonaberi",
        edu_2_desc: "Formation scientifique. Localisation : Ancienne Route Bonaberi, Douala, Cameroun.",
        portf_subtitle: "Mon Travail",
        portf_title: "Mes <span class='text-gradient'>Réalisations</span>",
        portf_desc: "Un aperçu de mes récents projets de design. Cliquez pour découvrir les détails !",
        portf_1_tag: "Logo & Branding",
        portf_1_title: "Conception de Logo",
        portf_view: "Voir les détails",
        portf_2_tag: "Web Design",
        portf_2_title: "Maquette Responsive",
        portf_3_tag: "Print & Communication",
        portf_3_title: "Supports Marketing",
        portf_4_tag: "Animation & Vidéo",
        portf_4_title: "Motion Graphic",
        portf_5_tag: "Print Design",
        portf_5_title: "Création Print",
        contact_subtitle: "Me Contacter",
        contact_title: "Travaillons <span class='text-gradient'>Ensemble</span>",
        contact_desc: "N'hésitez pas à me laisser un message pour un projet, une opportunité ou simplement pour dire bonjour !",
        form_name: "Votre nom",
        form_email: "Votre email",
        form_message: "Votre message",
        form_submit: "Envoyer le Message <i class='fas fa-paper-plane ms-2'></i>",
        footer_copy: "&copy; 2026 Youmakouecho Laetitia Audrey. Tous droits réservés.",
        modal_quote: "\"Créative et passionnée par le design graphique et l'innovation visuelle.\",",
        modal_desc: "Mon parcours de designer me permet d'explorer les multiples facettes de la conception créative. Je m'attache à créer des designs qui ont du sens, en mêlant créativité, stratégie de marque et une forte orientation utilisateur. Mon objectif est d'apprendre au quotidien et d'apporter ma touche unique à chaque projet sur lequel je travaille."
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_skills: "Skills",
        nav_education: "Education",
        nav_portfolio: "Portfolio",
        nav_contact: "Contact",
        hero_hello: "Hello, I am",
        hero_desc: "Passionate about graphic design, creating modern and engaging visual experiences.",
        hero_btn_projects: "View My Projects",
        hero_btn_about: "Learn More",
        about_tag: "Design",
        about_tag_sub: "Passionate",
        about_subtitle: "About me",
        about_title_1: "Creating with passion &",
        about_title_2: "innovation",
        about_desc: "I am a designer passionate about graphic creation. I strive to bring creative ideas to life through captivating visual designs and intuitive interfaces.",
        about_bullet_1: "Logo & Visual Identity Design",
        about_bullet_2: "Modern UI/UX Design",
        about_bullet_3: "Social Media Content Creation",
        about_btn: "My Skills <i class='fas fa-arrow-right ms-2'></i>",
        skills_subtitle: "My Expertise",
        skills_title: "My <span class='text-gradient'>Skills</span>",
        skills_desc: "Click on a skill to learn more about my approach and my passionate journey in design.",
        skill_1_title: "Graphic Design",
        skill_1_desc: "Visual creation & Identity",
        skill_2_title: "UI/UX Design",
        skill_2_desc: "Intuitive user interfaces",
        skill_3_title: "Logo Design",
        skill_3_desc: "Memorable brands",
        skill_4_title: "Web Development",
        skill_4_desc: "HTML / CSS / JS",
        skill_5_title: "Motion Graphic Designer",
        skill_5_desc: "Animation & Video",
        skill_6_title: "Print Designer",
        skill_6_desc: "Print Materials",
        edu_subtitle: "My Background",
        edu_title: "My <span class='text-gradient'>Education</span>",
        edu_desc: "Overview of my academic journey and learning path.",
        edu_1_title: "HND in Graphic Web Design",
        edu_1_school: "IUGET, Bonaberi",
        edu_1_desc: "Studies in graphic design and web development. Location: 4-stage Bonaberi, Douala, Cameroon.",
        edu_2_title: "Advanced Level in Science",
        edu_2_school: "NABICO, Bonaberi",
        edu_2_desc: "Science formation. Location: Ancient Route Bonaberi, Douala, Cameroon.",
        portf_subtitle: "My Work",
        portf_title: "My <span class='text-gradient'>Portfolio</span>",
        portf_desc: "A glimpse of my recent design projects. Click to see the details!",
        portf_1_tag: "Logo & Branding",
        portf_1_title: "Logo Design",
        portf_view: "View Details",
        portf_2_tag: "Web Design",
        portf_2_title: "Responsive Mockup",
        portf_3_tag: "Print & Communication",
        portf_3_title: "Marketing Assets",
        portf_4_tag: "Animation & Video",
        portf_4_title: "Motion Graphic",
        portf_5_tag: "Print Design",
        portf_5_title: "Print Creation",
        contact_subtitle: "Contact Me",
        contact_title: "Let's Work <span class='text-gradient'>Together</span>",
        contact_desc: "Feel free to leave me a message for a project, an opportunity, or just to say hi!",
        form_name: "Your Name",
        form_email: "Your Email",
        form_message: "Your Message",
        form_submit: "Send Message <i class='fas fa-paper-plane ms-2'></i>",
        footer_copy: "&copy; 2026 Youmakouecho Laetitia Audrey. All rights reserved.",
        modal_quote: "\"Creative and passionate about graphic design and visual innovation.\",",
        modal_desc: "My journey as a designer allows me to explore the many facets of creative design. I aim to create designs that make sense, blending creativity, brand strategy, and a strong user focus. My goal is to learn every day and bring my unique touch to every project I work on."
    }
};

const typedTexts = {
    fr: ['Design Graphique', 'Design UI/UX', 'Création de Logos', 'Créativité & Innovation'],
    en: ['Graphic Design', 'UI/UX Design', 'Logo Design', 'Creativity & Innovation']
};


document.addEventListener('DOMContentLoaded', () => {

    /* --- Language Switcher --- */
    let currentLang = localStorage.getItem('portfolio_lang') || 'fr';
    const langToggleBtn = document.getElementById('langToggleBtn');
    const currentLangLabel = document.getElementById('currentLangLabel');

    function updateLanguage() {
        // Update DOM texts
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[currentLang] && translations[currentLang][key]) {
                // If it's a placeholder, update placeholder instead
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    // It actually has a label for form-floating. So we don't need placeholder translated necessarily if using standard markup, but let's do it for completeness if needed. 
                    if (el.hasAttribute('placeholder')) el.setAttribute('placeholder', translations[currentLang][key]);
                } else {
                    el.innerHTML = translations[currentLang][key];
                }
            }
        });

        // Update html lang attribute
        document.documentElement.lang = currentLang;

        // Update button text to show the OTHER language (what you switch to) or the CURRENT language. We'll show the alternative language to click.
        currentLangLabel.textContent = currentLang === 'fr' ? 'EN' : 'FR';

        // Update typing animation array
        textArray = typedTexts[currentLang];
        // Restart typing
        typedTextSpan.textContent = '';
        textArrayIndex = 0;
        charIndex = 0;
    }

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            currentLang = currentLang === 'fr' ? 'en' : 'fr';
            localStorage.setItem('portfolio_lang', currentLang);
            updateLanguage();
        });
    }


    /* --- Typing Animation --- */
    const typedTextSpan = document.querySelector('.typed-text');
    const cursorSpan = document.querySelector('.cursor');

    let textArray = typedTexts[currentLang];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (!typedTextSpan) return;
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (!typedTextSpan) return;
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 500);
        }
    }

    // Initial call
    updateLanguage(); // Also sets up language on first load
    if (textArray.length && typedTextSpan) {
        setTimeout(type, newTextDelay + 250);
    }


    /* --- Navbar Scroll Effect --- */
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* --- Smooth Scrolling --- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('data-bs-toggle') === 'collapse') return;

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                const navCollapse = document.querySelector('.navbar-collapse');
                if (navCollapse && navCollapse.classList.contains('show')) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
                    if (bsCollapse) bsCollapse.hide();
                }
            }
        });
    });

    /* --- ScrollSpy Nav Link Highlight --- */
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    /* --- Modal Dynamic Content --- */
    const bioModal = document.getElementById('bioModal');
    if (bioModal) {
        bioModal.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget;

            // Get title based on current language
            const titleFr = button.getAttribute('data-title-fr');
            const titleEn = button.getAttribute('data-title-en');
            const iconClass = button.getAttribute('data-icon');
            const imgStr = button.getAttribute('data-images');

            const modalTitle = bioModal.querySelector('.modal-title');
            const modalIcon = bioModal.querySelector('#modalIcon');
            const modalCarousel = bioModal.querySelector('#modalCarousel');
            const modalCarouselInner = bioModal.querySelector('#modalCarouselInner');

            if (currentLang === 'fr' && titleFr) modalTitle.textContent = titleFr;
            else if (currentLang === 'en' && titleEn) modalTitle.textContent = titleEn;

            if (iconClass) {
                modalIcon.className = 'fas text-white fs-1';
                modalIcon.classList.add(iconClass);
            }

            if (imgStr && modalCarouselInner) {
                const images = imgStr.split(',');
                modalCarouselInner.innerHTML = '';
                images.forEach((src, index) => {
                    const activeClass = index === 0 ? 'active' : '';
                    modalCarouselInner.innerHTML += `<div class="carousel-item ${activeClass} h-100">
                        <img src="${src.trim()}" class="d-block w-100 h-100" style="object-fit:cover;" alt="Preview">
                    </div>`;
                });
                modalCarousel.style.display = 'block';
            } else if (modalCarousel) {
                modalCarousel.style.display = 'none';
            }
        });
    }

    /* --- Form Submission --- */
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            const loadingText = currentLang === 'fr' ? 'Redirection...' : 'Redirecting...';
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> ' + loadingText;
            submitBtn.disabled = true;

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Construire l'URL WhatsApp
            let waText = "Bonjour, c'est " + name + " (" + email + ").\n\n" + message;
            let encodedString = encodeURIComponent(waText);
            let whatsappUrl = "https://wa.me/237686727318?text=" + encodedString;

            setTimeout(() => {
                window.open(whatsappUrl, '_blank');
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 800);
        });
    }

    /* --- Scroll Reveal Animation --- */
    const animatedElements = document.querySelectorAll('.hero-content, .about-content, .glass-box, .portfolio-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => observer.observe(el));
});