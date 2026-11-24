// --- 2026 Warm Tech-Minimalist (HorizonX / Rabbit R1) Portfolio Logic ---

// Projects Database
const PROJECTS_DATA = [
  {
    name: "AI Navigation System",
    short_desc: "Architected a real-time conversational navigation and location tracking engine utilizing FastAPI, React Native, and PostgreSQL. Implemented destination coordinate identification, geographic dataset processing, dynamic GIS route algorithms, and voice guidance.",
    status: "STABLE",
    version: "v1.0.4",
    github: "https://github.com/zyed-110/AI-Navigation-System",
    live_demo: "",
    tech_stack: ["Python", "FastAPI", "React Native", "TypeScript", "PostgreSQL", "GIS APIs", "NLP"],
    key_capabilities: [
      "Intelligent destination and location identification",
      "Location dataset containing destination names and geographic coordinates",
      "Latitude and longitude coordinate processing and geofencing",
      "Turn-by-turn navigation and live location tracking functionality"
    ],
    media: [
      { type: "image", src: "Screenshots/AI Navigation/Navigator/WhatsApp Image 2026-07-17 at 4.48.12 PM.jpeg", caption: "Navigator View — Real-Time Turn-by-Turn Route Guidance" },
      { type: "image", src: "Screenshots/AI Navigation/Navigator/WhatsApp Image 2026-07-17 at 4.48.13 PM.jpeg", caption: "Navigator View — Destination Coordinates & Geolocation Tracking" },
      { type: "image", src: "Screenshots/AI Navigation/Navigator/WhatsApp Image 2026-07-17 at 4.48.14 PM.jpeg", caption: "Navigator View — Dynamic Route Calculation & Arrival Estimation" },
      { type: "image", src: "Screenshots/AI Navigation/Admin/WhatsApp Image 2026-07-17 at 4.48.12 PM (1).jpeg", caption: "Admin Dashboard — Destination Dataset & Geographic Coordinate Hub" },
      { type: "image", src: "Screenshots/AI Navigation/Guardian/WhatsApp Image 2026-07-17 at 4.48.13 PM (1).jpeg", caption: "Guardian Portal — Remote Location Telemetry & User Safety Monitoring" },
      { type: "video", src: "Screenshots/AI Navigation/Navigator/Screenrecording_20260717_161823.mp4", caption: "Navigator App Demo — Live Interactive Route Navigation" },
      { type: "video", src: "Screenshots/AI Navigation/Guardian/Screenrecording_20260717_162036.mp4", caption: "Guardian App Demo — Live User Tracking & Geofence Verification" },
      { type: "video", src: "Screenshots/AI Navigation/Admin/Screenrecording_20260717_162300.mp4", caption: "Admin App Demo — Dataset Management & Route Config" }
    ]
  },
  {
    name: "NeuroCare AI",
    short_desc: "Clinical machine learning screening platform for early Parkinson's disease and autism detection. Built with Python and Streamlit, featuring patient data management and longitudinal progress visualization.",
    status: "PROTOTYPE",
    version: "v1.0.0",
    github: "",
    live_demo: "",
    tech_stack: ["Python", "Machine Learning", "Streamlit", "Scikit-Learn", "Pandas", "NumPy"],
    key_capabilities: [
      "Early Parkinson's disease and autism screening models",
      "Machine learning-based risk assessment and prediction pipelines",
      "Comprehensive patient information and clinical record management",
      "Interactive patient progress tracking and longitudinal health visualization",
      "Streamlit and Python-based rapid deployment interface"
    ],
    media: [
      { type: "placeholder", title: "NeuroCare AI Diagnostic Dashboard", caption: "Early Parkinson's & Autism Screening ML Architecture with Patient Progress Tracking [Screenshots Coming Soon]" }
    ]
  },
  {
    name: "EV – Personal AI Assistant",
    short_desc: "Architected a real-time personal AI assistant with conversational voice interaction, persistent context memory, intelligent multi-model routing, and operating system / browser automation.",
    status: "PROTOTYPE",
    version: "v2.5.0",
    github: "",
    live_demo: "",
    tech_stack: ["Python", "FastAPI", "React", "TypeScript", "Supabase", "WebSockets", "Selenium", "PyAutoGUI"],
    key_capabilities: [
      "Conversational voice interaction with low-latency Speech-to-Text and Text-to-Speech",
      "Persistent memory architecture with Supabase PostgreSQL state storage",
      "Intelligent multi-model routing selecting optimal AI models based on query complexity",
      "Browser and desktop automation using Selenium and PyAutoGUI",
      "Application and terminal command orchestration"
    ],
    media: [
      { type: "image", src: "Screenshots/EV Assistant/1.png", caption: "EV Assistant — Core Voice & Command Architecture" },
      { type: "image", src: "Screenshots/EV Assistant/2.png", caption: "EV Assistant — Real-Time Model Routing & Speech Processing" },
      { type: "image", src: "Screenshots/EV Assistant/3.png", caption: "EV Assistant — Browser Automation & Application Control" },
      { type: "image", src: "Screenshots/EV Assistant/4.png", caption: "EV Assistant — Persistent Context Memory & Supabase Backend" },
      { type: "image", src: "Screenshots/EV Assistant/5.png", caption: "EV Assistant — Interactive Desktop Workflow Automation" }
    ]
  },
  {
    name: "TOYA – Water Delivery Application",
    short_desc: "An on-demand water delivery logistics ecosystem comprising dedicated customer and driver mobile applications with real-time dispatch, location tracking, and OTP-verified delivery.",
    status: "MOBILE SUITE",
    version: "v1.2.0",
    github: "",
    live_demo: "",
    tech_stack: ["React Native", "Node.js", "Python", "PostgreSQL", "Geolocation APIs"],
    key_capabilities: [
      "Customer and driver mobile applications with dedicated user workflows",
      "Real-time order placement and instant driver acceptance queue",
      "Location-based delivery tracking with live route updates",
      "OTP-based delivery confirmation for secure, verified order handoffs",
      "End-to-end payment workflow and automated order status management"
    ],
    media: [
      { type: "placeholder", title: "TOYA Logistics Workflow", caption: "Customer & Driver Mobile Architecture with Real-Time Geolocation & OTP Handoff [Screenshots Coming Soon]" }
    ]
  }
];

let activeProjectIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  initGridDots();
  initCursorGlow();
  initRobotBackgroundZoom();
  initCardTilts();
  initScrollspyAndNavbar();
  initRevealOnScroll();
  initMobileMenu();
  initThemeToggle();
  initCertToggle();
  initDottedSphere();

  // Render initial project
  renderConsoleProject(activeProjectIndex);
});

/* Certificates Toggle */
function initCertToggle() {
  const btn = document.getElementById('view-more-certs-btn');
  const hiddenContainer = document.getElementById('hidden-certs');
  if (!btn || !hiddenContainer) return;

  btn.addEventListener('click', () => {
    hiddenContainer.classList.toggle('visible');
    if (hiddenContainer.classList.contains('visible')) {
      btn.innerHTML = 'View Less Certifications <i class="fa-solid fa-chevron-up"></i>';
    } else {
      btn.innerHTML = 'View More Certifications <i class="fa-solid fa-chevron-down"></i>';
    }
  });
}

/* Custom Cursor Glow */
function initCursorGlow() {
  const glow = document.getElementById('cursor-glow');
  if (!glow) return;

  window.addEventListener('mousemove', (e) => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  });
}

/* Anime.js Interactive Dot Matrix Grid */
function initGridDots() {
  const gridContainer = document.getElementById('grid-dots');
  if (!gridContainer) return;

  const cols = 25;
  const rows = 14;
  const dotCount = cols * rows;

  gridContainer.style.gridTemplateColumns = `repeat(${cols}, 40px)`;
  gridContainer.style.gridTemplateRows = `repeat(${rows}, 40px)`;
  gridContainer.innerHTML = '';

  for (let i = 0; i < dotCount; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.dataset.index = i;
    gridContainer.appendChild(dot);
  }

  gridContainer.addEventListener('click', (e) => {
    if (!e.target.classList.contains('dot')) return;

    const clickIndex = parseInt(e.target.dataset.index);

    anime({
      targets: '#grid-dots .dot',
      scale: [
        { value: 2.5, easing: 'easeOutSine', duration: 300 },
        { value: 1, easing: 'easeInOutQuad', duration: 900 }
      ],
      backgroundColor: [
        { value: '#06b6d4', easing: 'easeOutSine', duration: 300 },
        { value: '#ec4899', easing: 'easeInQuad', duration: 400 },
        { value: '#a855f7', easing: 'easeOutQuad', duration: 500 },
        { value: '#f3f4f6', easing: 'easeOutQuad', duration: 400 }
      ],
      opacity: [
        { value: 0.8, easing: 'easeOutSine', duration: 200 },
        { value: 0.12, easing: 'easeOutQuad', duration: 1000 }
      ],
      delay: anime.stagger(60, {
        grid: [cols, rows],
        from: clickIndex
      })
    });
  });

  anime({
    targets: '#grid-dots .dot',
    scale: [
      { value: 1.25, easing: 'easeInOutSine', duration: 1000 },
      { value: 1, easing: 'easeInOutSine', duration: 1200 }
    ],
    opacity: [
      { value: 0.3, easing: 'easeInOutSine', duration: 1000 },
      { value: 0.12, easing: 'easeInOutSine', duration: 1200 }
    ],
    delay: anime.stagger(50, {
      grid: [cols, rows],
      from: 'center'
    }),
    loop: true
  });
}

/* Scroll Zoom effect */
function initRobotBackgroundZoom() {
  const robotImg = document.getElementById('robot-bg-img');
  if (!robotImg) return;

  window.addEventListener('scroll', () => {
    const scrollMax = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollMax <= 0) return;

    const fraction = window.scrollY / scrollMax;
    const zoomScale = 1 + fraction * 0.28;
    const translateY = fraction * -50;

    robotImg.style.transform = `scale(${zoomScale}) translateY(${translateY}px)`;
  });
}

/* 3D Tilt Hover */
function initCardTilts() {
  const cards = document.querySelectorAll('.spec-card, .cert-card-schematic');

  cards.forEach(card => {
    card.style.transformStyle = 'preserve-3d';

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const tiltX = -(y - centerY) / 8;
      const tiltY = (x - centerX) / 8;

      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
  });
}

/* Active Navbar */
function initScrollspyAndNavbar() {
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link, .nav-anim-btn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.clientHeight;
      if (window.scrollY >= (top - 180)) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* Smooth Fade In and Out */
function initRevealOnScroll() {
  const elements = document.querySelectorAll('.scroll-reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const isCard = entry.target.classList.contains('spec-card') ||
        entry.target.classList.contains('cert-card-schematic') ||
        entry.target.classList.contains('project-card') ||
        entry.target.classList.contains('console-box') ||
        entry.target.classList.contains('contact-terminal') ||
        entry.target.classList.contains('contact-specs');

      if (entry.isIntersecting) {
        if (isCard) {
          anime.remove(entry.target);
          anime({
            targets: entry.target,
            rotateX: [65, 0],
            translateY: [40, 0],
            scale: [0.9, 1],
            opacity: [0, 1],
            easing: 'easeOutElastic(1, .85)',
            duration: 1100
          });
        } else {
          anime.remove(entry.target);
          anime({
            targets: entry.target,
            translateY: [35, 0],
            opacity: [0, 1],
            easing: 'easeOutCubic',
            duration: 900
          });
        }
        // Unobserve to prevent re-triggering animations endlessly
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
}

/* Console Project Switcher */
window.switchConsoleProject = function (index) {
  if (index === activeProjectIndex) return;

  document.querySelectorAll('.console-tab').forEach((tab, i) => {
    tab.classList.remove('active');
    if (i === index) tab.classList.add('active');
  });

  const workspace = document.getElementById('active-project-details');
  anime({
    targets: workspace,
    opacity: 0,
    translateX: -20,
    duration: 250,
    easing: 'easeInQuad',
    complete: () => {
      activeProjectIndex = index;
      renderConsoleProject(index);

      anime({
        targets: workspace,
        opacity: [0, 1],
        translateX: [20, 0],
        duration: 600,
        easing: 'easeOutElastic(1, .8)'
      });
    }
  });
};

const VIDEO_LOADER_SVG = `
<svg id="svg-global" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 94 136" height="136" width="94">
  <path stroke="#4B22B5" d="M87.3629 108.433L49.1073 85.3765C47.846 84.6163 45.8009 84.6163 44.5395 85.3765L6.28392 108.433C5.02255 109.194 5.02255 110.426 6.28392 111.187L44.5395 134.243C45.8009 135.004 47.846 135.004 49.1073 134.243L87.3629 111.187C88.6243 110.426 88.6243 109.194 87.3629 108.433Z" id="line-v1"></path>
  <path stroke="#5728CC" d="M91.0928 95.699L49.2899 70.5042C47.9116 69.6734 45.6769 69.6734 44.2986 70.5042L2.49568 95.699C1.11735 96.5298 1.11735 97.8767 2.49568 98.7074L44.2986 123.902C45.6769 124.733 47.9116 124.733 49.2899 123.902L91.0928 98.7074C92.4712 97.8767 92.4712 96.5298 91.0928 95.699Z" id="line-v2"></path>
  <g id="node-server">
    <path fill="url(#paint0_linear_204_217)" d="M2.48637 72.0059L43.8699 96.9428C45.742 98.0709 48.281 97.8084 50.9284 96.2133L91.4607 71.7833C92.1444 71.2621 92.4197 70.9139 92.5421 70.1257V86.1368C92.5421 86.9686 92.0025 87.9681 91.3123 88.3825C84.502 92.4724 51.6503 112.204 50.0363 113.215C48.2352 114.343 45.3534 114.343 43.5523 113.215C41.9261 112.197 8.55699 91.8662 2.08967 87.926C1.39197 87.5011 1.00946 86.5986 1.00946 85.4058V70.1257C1.11219 70.9289 1.49685 71.3298 2.48637 72.0059Z"></path>
    <path stroke="url(#paint2_linear_204_217)" fill="url(#paint1_linear_204_217)" d="M91.0928 68.7324L49.2899 43.5375C47.9116 42.7068 45.6769 42.7068 44.2986 43.5375L2.49568 68.7324C1.11735 69.5631 1.11735 70.91 2.49568 71.7407L44.2986 96.9356C45.6769 97.7663 47.9116 97.7663 49.2899 96.9356L91.0928 71.7407C92.4712 70.91 92.4712 69.5631 91.0928 68.7324Z"></path>
    <mask height="41" width="67" y="50" x="13" maskUnits="userSpaceOnUse" style="mask-type:luminance" id="mask0_204_217"><path fill="white" d="M78.3486 68.7324L49.0242 51.0584C47.6459 50.2276 45.4111 50.2276 44.0328 51.0584L14.7084 68.7324C13.3301 69.5631 13.3301 70.91 14.7084 71.7407L44.0328 89.4148C45.4111 90.2455 47.6459 90.2455 49.0242 89.4148L78.3486 71.7407C79.7269 70.91 79.727 69.5631 78.3486 68.7324Z"></path></mask>
    <g mask="url(#mask0_204_217)">
      <path fill="#332C94" d="M78.3486 68.7324L49.0242 51.0584C47.6459 50.2276 45.4111 50.2276 44.0328 51.0584L14.7084 68.7324C13.3301 69.5631 13.3301 70.91 14.7084 71.7407L44.0328 89.4148C45.4111 90.2455 47.6459 90.2455 49.0242 89.4148L78.3486 71.7407C79.7269 70.91 79.727 69.5631 78.3486 68.7324Z"></path>
      <mask height="29" width="48" y="56" x="23" maskUnits="userSpaceOnUse" style="mask-type:luminance" id="mask1_204_217"><path fill="white" d="M68.9898 68.7324L49.0242 56.699C47.6459 55.8683 45.4111 55.8683 44.0328 56.699L24.0673 68.7324C22.6889 69.5631 22.6889 70.91 24.0673 71.7407L44.0328 83.7741C45.4111 84.6048 47.6459 84.6048 49.0242 83.7741L68.9898 71.7407C70.3681 70.91 70.3681 69.5631 68.9898 68.7324Z"></path></mask>
      <g mask="url(#mask1_204_217)">
        <path fill="#5E5E5E" d="M68.9898 68.7324L49.0242 56.699C47.6459 55.8683 45.4111 55.8683 44.0328 56.699L24.0673 68.7324C22.6889 69.5631 22.6889 70.91 24.0673 71.7407L44.0328 83.7741C45.4111 84.6048 47.6459 84.6048 49.0242 83.7741L68.9898 71.7407C70.3681 70.91 70.3681 69.5631 68.9898 68.7324Z"></path>
        <path fill="#71B1C6" d="M70.1311 69.3884L48.42 56.303C47.3863 55.6799 45.7103 55.6799 44.6765 56.303L22.5275 69.6523C21.4938 70.2754 21.4938 71.2855 22.5275 71.9086L44.2386 84.994C45.2723 85.617 46.9484 85.617 47.9821 84.994L70.1311 71.6446C71.1648 71.0216 71.1648 70.0114 70.1311 69.3884Z"></path>
        <path fill="#80C0D4" d="M70.131 70.8923L48.4199 57.8069C47.3862 57.1839 45.7101 57.1839 44.6764 57.8069L22.5274 71.1562C21.4937 71.7793 21.4937 72.7894 22.5274 73.4125L44.2385 86.4979C45.2722 87.1209 46.9482 87.1209 47.982 86.4979L70.131 73.1486C71.1647 72.5255 71.1647 71.5153 70.131 70.8923Z"></path>
        <path fill="#89D3EB" d="M69.751 72.1675L48.4199 59.3111C47.3862 58.6881 45.7101 58.6881 44.6764 59.3111L23.2004 72.2548C22.1667 72.8779 22.1667 73.888 23.2004 74.5111L44.5315 87.3674C45.5653 87.9905 47.2413 87.9905 48.2751 87.3674L69.751 74.4238C70.7847 73.8007 70.7847 72.7905 69.751 72.1675Z"></path>
        <path fill="#97E6FF" d="M68.5091 72.9231L48.4199 60.8153C47.3862 60.1922 45.7101 60.1922 44.6764 60.8153L24.8146 72.7861C23.7808 73.4091 23.7808 74.4193 24.8146 75.0424L44.9038 87.1502C45.9375 87.7733 47.6135 87.7733 48.6473 87.1502L68.5091 75.1794C69.5428 74.5563 69.5428 73.5462 68.5091 72.9231Z"></path>
        <path fill="#97E6FF" d="M66.6747 73.3219L48.4199 62.3197C47.3862 61.6966 45.7101 61.6966 44.6764 62.3197L26.4412 73.3101C25.4075 73.9332 25.4075 74.9433 26.4412 75.5664L44.696 86.5686C45.7297 87.1917 47.4058 87.1917 48.4395 86.5686L66.6747 75.5782C67.7084 74.9551 67.7084 73.945 66.6747 73.3219Z"></path>
      </g>
      <path stroke-width="0.5" stroke="#F4F4F4" d="M68.9898 68.7324L49.0242 56.699C47.6459 55.8683 45.4111 55.8683 44.0328 56.699L24.0673 68.7324C22.6889 69.5631 22.6889 70.91 24.0673 71.7407L44.0328 83.7741C45.4111 84.6048 47.6459 84.6048 49.0242 83.7741L68.9898 71.7407C70.3681 70.91 70.3681 69.5631 68.9898 68.7324Z"></path>
    </g>
  </g>
  <g id="particles">
    <path fill="url(#paint3_linear_204_217)" d="M43.5482 32.558C44.5429 32.558 45.3493 31.7162 45.3493 30.6778C45.3493 29.6394 44.5429 28.7976 43.5482 28.7976C42.5535 28.7976 41.7471 29.6394 41.7471 30.6778C41.7471 31.7162 42.5535 32.558 43.5482 32.558Z" class="particle p1"></path>
    <path fill="url(#paint4_linear_204_217)" d="M50.0323 48.3519C51.027 48.3519 51.8334 47.5101 51.8334 46.4717C51.8334 45.4333 51.027 44.5915 50.0323 44.5915C49.0375 44.5915 48.2311 45.4333 48.2311 46.4717C48.2311 47.5101 49.0375 48.3519 50.0323 48.3519Z" class="particle p2"></path>
    <path fill="url(#paint5_linear_204_217)" d="M40.3062 62.6416C41.102 62.6416 41.7471 61.9681 41.7471 61.1374C41.7471 60.3067 41.102 59.6332 40.3062 59.6332C39.5104 59.6332 38.8653 60.3067 38.8653 61.1374C38.8653 61.9681 39.5104 62.6416 40.3062 62.6416Z" class="particle p3"></path>
    <path fill="url(#paint6_linear_204_217)" d="M50.7527 73.9229C52.1453 73.9229 53.2743 72.7444 53.2743 71.2906C53.2743 69.8368 52.1453 68.6583 50.7527 68.6583C49.3601 68.6583 48.2311 69.8368 48.2311 71.2906C48.2311 72.7444 49.3601 73.9229 50.7527 73.9229Z" class="particle p4"></path>
    <path fill="url(#paint7_linear_204_217)" d="M48.5913 76.9312C49.1882 76.9312 49.672 76.4262 49.672 75.8031C49.672 75.1801 49.1882 74.675 48.5913 74.675C47.9945 74.675 47.5107 75.1801 47.5107 75.8031C47.5107 76.4262 47.9945 76.9312 48.5913 76.9312Z" class="particle p5"></path>
    <path fill="url(#paint8_linear_204_217)" d="M52.9153 67.1541C53.115 67.1541 53.2768 66.9858 53.2768 66.7781C53.2768 66.5704 53.115 66.402 52.9153 66.402C52.7156 66.402 52.5538 66.5704 52.5538 66.7781C52.5538 66.9858 52.7156 67.1541 52.9153 67.1541Z" class="particle p6"></path>
    <path fill="url(#paint9_linear_204_217)" d="M52.1936 43.8394C52.7904 43.8394 53.2743 43.3344 53.2743 42.7113C53.2743 42.0883 52.7904 41.5832 52.1936 41.5832C51.5967 41.5832 51.1129 42.0883 51.1129 42.7113C51.1129 43.3344 51.5967 43.8394 52.1936 43.8394Z" class="particle p7"></path>
    <path fill="url(#paint10_linear_204_217)" d="M57.2367 29.5497C57.8335 29.5497 58.3173 29.0446 58.3173 28.4216C58.3173 27.7985 57.8335 27.2935 57.2367 27.2935C56.6398 27.2935 56.156 27.7985 56.156 28.4216C56.156 29.0446 56.6398 29.5497 57.2367 29.5497Z" class="particle p8"></path>
    <path fill="url(#paint11_linear_204_217)" d="M43.9084 34.8144C44.3063 34.8144 44.6289 34.4777 44.6289 34.0623C44.6289 33.647 44.3063 33.3102 43.9084 33.3102C43.5105 33.3102 43.188 33.647 43.188 34.0623C43.188 34.4777 43.5105 34.8144 43.9084 34.8144Z" class="particle p9"></path>
  </g>
  <g id="reflectores">
    <path fill-opacity="0.2" fill="url(#paint12_linear_204_217)" d="M49.2037 57.0009L68.7638 68.7786C69.6763 69.3089 69.7967 69.9684 69.794 70.1625V13.7383C69.7649 13.5587 69.6807 13.4657 69.4338 13.3096L48.4832 0.601307C46.9202 -0.192595 46.0788 -0.208238 44.6446 0.601307L23.6855 13.2118C23.1956 13.5876 23.1966 13.7637 23.1956 14.4904L23.246 70.1625C23.2948 69.4916 23.7327 69.0697 25.1768 68.2447L43.9084 57.0008C44.8268 56.4344 45.3776 56.2639 46.43 56.2487C47.5299 56.2257 48.1356 56.4222 49.2037 57.0009Z"></path>
    <path fill-opacity="0.2" fill="url(#paint13_linear_204_217)" d="M48.8867 27.6696C49.9674 26.9175 68.6774 14.9197 68.6774 14.9197C69.3063 14.5327 69.7089 14.375 69.7796 13.756V70.1979C69.7775 70.8816 69.505 71.208 68.7422 71.7322L48.9299 83.6603C48.2003 84.1258 47.6732 84.2687 46.5103 84.2995C45.3295 84.2679 44.8074 84.1213 44.0907 83.6603L24.4348 71.8149C23.5828 71.3313 23.2369 71.0094 23.2316 70.1979L23.1884 13.9816C23.1798 14.8398 23.4982 15.3037 24.7518 16.0874C24.7518 16.0874 42.7629 26.9175 44.2038 27.6696C45.6447 28.4217 46.0049 28.4217 46.5452 28.4217C47.0856 28.4217 47.806 28.4217 48.8867 27.6696Z"></path>
  </g>
  <g id="panel-rigth">
    <mask fill="white" id="path-26-inside-1_204_217"><path d="M72 91.8323C72 90.5121 72.9268 88.9068 74.0702 88.2467L87.9298 80.2448C89.0731 79.5847 90 80.1198 90 81.44V81.44C90 82.7602 89.0732 84.3656 87.9298 85.0257L74.0702 93.0275C72.9268 93.6876 72 93.1525 72 91.8323V91.8323Z"></path></mask>
    <path fill="#91DDFB" d="M72 91.8323C72 90.5121 72.9268 88.9068 74.0702 88.2467L87.9298 80.2448C89.0731 79.5847 90 80.1198 90 81.44V81.44C90 82.7602 89.0732 84.3656 87.9298 85.0257L74.0702 93.0275C72.9268 93.6876 72 93.1525 72 91.8323V91.8323Z"></path>
    <path mask="url(#path-26-inside-1_204_217)" fill="#489CB7" d="M72 89.4419L90 79.0496L72 89.4419ZM90.6928 81.44C90.6928 82.9811 89.6109 84.8551 88.2762 85.6257L74.763 93.4275C73.237 94.3085 72 93.5943 72 91.8323V91.8323C72 92.7107 72.9268 92.8876 74.0702 92.2275L87.9298 84.2257C88.6905 83.7865 89.3072 82.7184 89.3072 81.84L90.6928 81.44ZM72 94.2227V89.4419V94.2227ZM88.2762 80.0448C89.6109 79.2742 90.6928 79.8989 90.6928 81.44V81.44C90.6928 82.9811 89.6109 84.8551 88.2762 85.6257L87.9298 84.2257C88.6905 83.7865 89.3072 82.7184 89.3072 81.84V81.84C89.3072 80.5198 88.6905 79.8056 87.9298 80.2448L88.2762 80.0448Z"></path>
    <mask fill="white" id="path-28-inside-2_204_217"><path d="M67 94.6603C67 93.3848 67.8954 91.8339 69 91.1962V91.1962C70.1046 90.5584 71 91.0754 71 92.3509V92.5129C71 93.7884 70.1046 95.3393 69 95.977V95.977C67.8954 96.6147 67 96.0978 67 94.8223V94.6603Z"></path></mask>
    <path fill="#91DDFB" d="M67 94.6603C67 93.3848 67.8954 91.8339 69 91.1962V91.1962C70.1046 90.5584 71 91.0754 71 92.3509V92.5129C71 93.7884 70.1046 95.3393 69 95.977V95.977C67.8954 96.6147 67 96.0978 67 94.8223V94.6603Z"></path>
    <path mask="url(#path-28-inside-2_204_217)" fill="#489CB7" d="M67 92.3509L71 90.0415L67 92.3509ZM71.6928 92.5129C71.6928 94.0093 70.6423 95.8288 69.3464 96.577L69.3464 96.577C68.0505 97.3252 67 96.7187 67 95.2223V94.8223C67 95.6559 67.8954 95.8147 69 95.177L69 95.177C69.7219 94.7602 70.3072 93.7465 70.3072 92.9129L71.6928 92.5129ZM67 97.1317V92.3509V97.1317ZM69.2762 91.0367C70.6109 90.2661 71.6928 90.8908 71.6928 92.4319V92.5129C71.6928 94.0093 70.6423 95.8288 69.3464 96.577L69 95.177C69.7219 94.7602 70.3072 93.7465 70.3072 92.9129V92.7509C70.3072 91.4754 69.7219 90.7794 69 91.1962L69.2762 91.0367Z"></path>
  </g>
  <defs>
    <linearGradient gradientUnits="userSpaceOnUse" y2="92.0933" x2="92.5421" y1="92.0933" x1="1.00946" id="paint0_linear_204_217"><stop stop-color="#5727CC"></stop><stop stop-color="#4354BF" offset="1"></stop></linearGradient>
    <linearGradient gradientUnits="userSpaceOnUse" y2="91.1638" x2="6.72169" y1="70" x1="92.5" id="paint1_linear_204_217"><stop stop-color="#4559C4"></stop><stop stop-color="#332C94" offset="0.29"></stop><stop stop-color="#5727CB" offset="1"></stop></linearGradient>
    <linearGradient gradientUnits="userSpaceOnUse" y2="85.0762" x2="3.55544" y1="70" x1="92.5" id="paint2_linear_204_217"><stop stop-color="#91DDFB"></stop><stop stop-color="#8841D5" offset="1"></stop></linearGradient>
    <linearGradient gradientUnits="userSpaceOnUse" y2="32.558" x2="43.5482" y1="28.7976" x1="43.5482" id="paint3_linear_204_217"><stop stop-color="#5927CE"></stop><stop stop-color="#91DDFB" offset="1"></stop></linearGradient>
    <linearGradient gradientUnits="userSpaceOnUse" y2="48.3519" x2="50.0323" y1="44.5915" x1="50.0323" id="paint4_linear_204_217"><stop stop-color="#5927CE"></stop><stop stop-color="#91DDFB" offset="1"></stop></linearGradient>
    <linearGradient gradientUnits="userSpaceOnUse" y2="62.6416" x2="40.3062" y1="59.6332" x1="40.3062" id="paint5_linear_204_217"><stop stop-color="#5927CE"></stop><stop stop-color="#91DDFB" offset="1"></stop></linearGradient>
    <linearGradient gradientUnits="userSpaceOnUse" y2="73.9229" x2="50.7527" y1="68.6583" x1="50.7527" id="paint6_linear_204_217"><stop stop-color="#5927CE"></stop><stop stop-color="#91DDFB" offset="1"></stop></linearGradient>
    <linearGradient gradientUnits="userSpaceOnUse" y2="76.9312" x2="48.5913" y1="74.675" x1="48.5913" id="paint7_linear_204_217"><stop stop-color="#5927CE"></stop><stop stop-color="#91DDFB" offset="1"></stop></linearGradient>
    <linearGradient gradientUnits="userSpaceOnUse" y2="67.1541" x2="52.9153" y1="66.402" x1="52.9153" id="paint8_linear_204_217"><stop stop-color="#5927CE"></stop><stop stop-color="#91DDFB" offset="1"></stop></linearGradient>
    <linearGradient gradientUnits="userSpaceOnUse" y2="43.8394" x2="52.1936" y1="41.5832" x1="52.1936" id="paint9_linear_204_217"><stop stop-color="#5927CE"></stop><stop stop-color="#91DDFB" offset="1"></stop></linearGradient>
    <linearGradient gradientUnits="userSpaceOnUse" y2="29.5497" x2="57.2367" y1="27.2935" x1="57.2367" id="paint10_linear_204_217"><stop stop-color="#5927CE"></stop><stop stop-color="#91DDFB" offset="1"></stop></linearGradient>
    <linearGradient gradientUnits="userSpaceOnUse" y2="34.8144" x2="43.9084" y1="33.3102" x1="43.9084" id="paint11_linear_204_217"><stop stop-color="#5927CE"></stop><stop stop-color="#91DDFB" offset="1"></stop></linearGradient>
    <linearGradient gradientUnits="userSpaceOnUse" y2="16.0743" x2="62.9858" y1="88.5145" x1="67.8638" id="paint12_linear_204_217"><stop stop-color="#97E6FF"></stop><stop stop-opacity="0" stop-color="white" offset="1"></stop></linearGradient>
    <linearGradient gradientUnits="userSpaceOnUse" y2="39.4139" x2="31.4515" y1="88.0938" x1="36.2597" id="paint13_linear_204_217"><stop stop-color="#97E6FF"></stop><stop stop-opacity="0" stop-color="white" offset="1"></stop></linearGradient>
  </defs>
</svg>`;

let currentSlideIndex = 0;
let swipeStartX = 0;
let swipeEndX = 0;

function renderConsoleProject(index) {
  const workspace = document.getElementById('console-workspace');
  if (!workspace) return;

  const p = PROJECTS_DATA[index];
  currentSlideIndex = 0;
  const techStackHTML = p.tech_stack.map(sk => `<span class="tech-chip">${sk}</span>`).join('');

  // Format the tools/libraries/DB lists
  const buildList = (title, items) => {
    if (!items || items.length === 0) return '';
    return `<li><strong>${title}:</strong> ${items.join(', ')}</li>`;
  };

  const projectDetailsHTMLLeft = `
    <li><strong>Tech Stack:</strong> ${p.tech_stack.join(', ')}</li>
    ${buildList("AI & Voice", p.ai_voice)}
    ${buildList("Automation", p.automation)}
    ${buildList("Libraries/APIs", p.libraries)}
  `;

  const projectDetailsHTMLRight = `
    ${buildList("Databases", p.database)}
    ${buildList("Tools & Deployment", p.tools)}
  `;

  let capabilitiesHTML = '';
  if (p.key_capabilities && p.key_capabilities.length > 0) {
    const capsList = p.key_capabilities.map(cap => `<li><i class="fa-solid fa-check" style="color: var(--accent-cyan); margin-right: 8px;"></i>${cap}</li>`).join('');
    capabilitiesHTML = `
      <div class="project-capabilities tech-specs" style="margin-top: 25px;">
        <h4>Key Capabilities</h4>
        <ul class="tech-specs-list" style="list-style-type: none; padding-left: 0;">
          ${capsList}
        </ul>
      </div>
    `;
  }

  const githubBtn = p.github ? `<a href="${p.github}" target="_blank" class="btn-premium-primary">View GitHub <i class="fa-brands fa-github"></i></a>` : '';
  const liveDemoBtn = p.live_demo && p.live_demo !== "#" ? `<a href="${p.live_demo}" target="_blank" class="btn-premium-secondary">Live Demo <i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : '';

  let carouselSlides = '';
  let carouselDots = '';
  let mediaHTML = '';

  if (p.media && p.media.length > 0) {
    p.media.forEach((item, idx) => {
      const isActive = idx === 0 ? 'active' : '';
      carouselDots += `<span class="carousel-dot ${isActive}" data-slide="${idx}" onclick="goToSlide(${idx})"></span>`;

      if (item.type === 'video') {
        carouselSlides += `
          <div class="media-slide inline-slide ${isActive}" data-index="${idx}" data-type="video">
            <div class="video-loader-overlay" id="video-loader-${idx}">
              <div class="loader-svg-container">${VIDEO_LOADER_SVG}</div>
              <span class="loader-text">LOADING_MEDIA...</span>
            </div>
            <video class="slide-video inline-video" data-src="${item.src}" preload="none" controls playsinline muted>
              <source data-src="${item.src}" type="video/mp4">
            </video>
            <div class="video-play-badge"><i class="fa-solid fa-play"></i> VIDEO</div>
          </div>`;
      } else {
        carouselSlides += `
          <div class="media-slide inline-slide ${isActive}" data-index="${idx}" data-type="image">
            <img class="inline-img" src="${item.src}" alt="${p.name}" onerror="this.src='https://placehold.co/600x400/13141c/a855f7?text=${encodeURIComponent(p.name)}';">
          </div>`;
      }
    });

    const navArrows = p.media.length > 1 ? `
      <button class="nav-arrow-btn swipe-prev prev" onclick="navigateSlide(-1)">
        <div class="nav-arrow-box">
          <span class="nav-arrow-elem"><svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg"><path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path></svg></span>
          <span class="nav-arrow-elem"><svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg"><path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path></svg></span>
        </div>
      </button>
      <button class="nav-arrow-btn swipe-next next" onclick="navigateSlide(1)">
        <div class="nav-arrow-box">
          <span class="nav-arrow-elem"><svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg"><path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path></svg></span>
          <span class="nav-arrow-elem"><svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg"><path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path></svg></span>
        </div>
      </button>
    ` : '';
    const mediaCounter = '';

    mediaHTML = `
      <div class="inline-media-container">
        <div class="media-carousel-track" id="media-carousel-track">
          ${carouselSlides}
        </div>
        ${navArrows}
        ${mediaCounter}
        <div class="media-carousel-dots" id="media-carousel-dots">
          ${carouselDots}
        </div>
      </div>
    `;
  }

  workspace.innerHTML = `
    <div class="project-details" id="active-project-details">
      <div class="project-details-grid premium-project-grid ${mediaHTML ? 'media-active' : ''}" id="project-details-grid">
        <div class="project-details-text" id="project-text-col">
          <h3>${p.name}</h3>
          <p class="project-desc">${p.short_desc}</p>
          
          <div class="project-tech-stack">
            <h4 class="tech-stack-title">Tech Stack</h4>
            <div class="tech-chip-container">
              ${techStackHTML}
            </div>
          </div>

          <div class="project-achievements tech-specs">
            <h4>Technical Environment</h4>
            <ul class="tech-specs-list">
              ${projectDetailsHTMLLeft}
            </ul>
          </div>
          ${capabilitiesHTML}
          
          <div class="project-console-links" style="margin-top: 25px; display: flex; gap: 10px; flex-wrap: wrap;">
            ${!mediaHTML ? githubBtn : ''}
            ${liveDemoBtn}
          </div>
        </div>
        
        ${mediaHTML ? `
        <div class="project-details-media" id="project-media-col" style="display: block; opacity: 1;">
          ${mediaHTML}
          
          ${projectDetailsHTMLRight.trim() ? `
          <div class="project-achievements tech-specs" style="margin-top: 70px;">
            <ul class="tech-specs-list">
              ${projectDetailsHTMLRight}
            </ul>
          </div>
          ` : ''}
          <div class="project-console-links" style="margin-top: 25px; display: flex; gap: 10px; flex-wrap: wrap;">
            ${githubBtn}
          </div>
        </div>` : ''}
      </div>
    </div>
  `;

  if (mediaHTML) {
    initSwipeEvents();
    // Load first media if video
    const firstVideo = workspace.querySelector('.media-slide.active video');
    if (firstVideo) loadVideo(firstVideo);
  }
}

// Keeping goToSlide and navigateSlide exactly as they are below...
window.toggleVisualsInline = function (index) {
  // Deprecated, logic moved to renderConsoleProject
};

window.goToSlide = function (idx) {
  const slides = document.querySelectorAll('#media-carousel-track .media-slide');
  const dots = document.querySelectorAll('#media-carousel-dots .carousel-dot');
  if (!slides.length || idx < 0 || idx >= slides.length) return;

  const currentSlide = slides[currentSlideIndex];
  if (currentSlide && currentSlide.dataset.type === 'video') {
    const vid = currentSlide.querySelector('.slide-video');
    if (vid) vid.pause();
  }

  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));

  currentSlideIndex = idx;
  slides[idx].classList.add('active');
  dots[idx].classList.add('active');

  const counter = document.getElementById('slide-current');
  if (counter) counter.textContent = idx + 1;

  if (slides[idx].dataset.type === 'video') {
    loadVideoSlide(slides[idx], idx);
  }
};

window.navigateSlide = function (direction) {
  const slides = document.querySelectorAll('#media-carousel-track .media-slide');
  if (!slides.length) return;
  let newIdx = currentSlideIndex + direction;
  if (newIdx < 0) newIdx = slides.length - 1;
  if (newIdx >= slides.length) newIdx = 0;
  window.goToSlide(newIdx);
};

function loadVideoSlide(slideEl, idx) {
  const loader = document.getElementById(`video-loader-${idx}`);
  const video = slideEl.querySelector('.slide-video');
  const badge = slideEl.querySelector('.video-play-badge');

  if (!video || !loader) return;

  if (video.dataset.loaded === 'true') {
    loader.classList.add('hidden');
    if (badge) badge.classList.add('hidden');
    video.play().catch(() => { });
    return;
  }

  loader.classList.remove('hidden');
  if (badge) badge.classList.add('hidden');

  if (video.getAttribute('src') !== video.dataset.src) {
    const source = video.querySelector('source');
    if (source) source.src = source.dataset.src;
    video.src = video.dataset.src;
    video.load();
  }

  setTimeout(() => {
    loader.classList.add('hidden');
    video.dataset.loaded = 'true';
    video.play().catch(() => { });
  }, 2000);
}

function initSwipeEvents() {
  const track = document.getElementById('media-carousel-track');
  if (!track) return;

  track.addEventListener('touchstart', (e) => {
    swipeStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    swipeEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  let isDragging = false;
  track.addEventListener('mousedown', (e) => {
    isDragging = true;
    swipeStartX = e.screenX;
    track.style.cursor = 'grabbing';
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
  });

  track.addEventListener('mouseup', (e) => {
    if (!isDragging) return;
    isDragging = false;
    swipeEndX = e.screenX;
    track.style.cursor = 'grab';
    handleSwipe();
  });

  track.addEventListener('mouseleave', () => {
    isDragging = false;
    track.style.cursor = 'grab';
  });
}

function handleSwipe() {
  const threshold = 50;
  const diff = swipeStartX - swipeEndX;
  if (Math.abs(diff) < threshold) return;

  if (diff > 0) {
    window.navigateSlide(1);
  } else {
    window.navigateSlide(-1);
  }
}

/* PDF Certificates Modal Handler */
const certModal = document.getElementById('cert-modal');
const certIframe = document.getElementById('cert-iframe');
const certDownloadBtn = document.getElementById('cert-download-btn');

window.openCert = function (pdfPath) {
  if (!certModal || !certIframe) return;
  certIframe.src = pdfPath;
  if (certDownloadBtn) {
    certDownloadBtn.href = pdfPath;
  }
  certModal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeCert = function () {
  if (!certModal || !certIframe) return;
  certModal.classList.remove('active');
  certIframe.src = '';
  if (certDownloadBtn) certDownloadBtn.href = '';
  document.body.style.overflow = '';
};

window.downloadCert = function (pdfPath, filename) {
  const link = document.createElement('a');
  link.href = pdfPath;
  link.download = filename || 'certificate.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/* --------------------------------------------------------------------------
   Project Media Gallery Lightbox (Showcases Screenshots & Video Demos)
   -------------------------------------------------------------------------- */
let currentGalleryProject = null;
let currentGalleryIndex = 0;

window.openProjectGallery = function (projectIndex) {
  const p = PROJECTS_DATA[projectIndex];
  if (!p) return;
  currentGalleryProject = p;
  currentGalleryIndex = 0;

  const modal = document.getElementById('project-gallery-modal');
  if (!modal) return;

  const titleEl = document.getElementById('gallery-modal-title');
  if (titleEl) titleEl.textContent = p.name || 'Project Showcase';

  renderGallerySlide();
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeProjectGallery = function () {
  const modal = document.getElementById('project-gallery-modal');
  if (modal) {
    modal.classList.remove('active');
    const stage = document.getElementById('gallery-stage');
    if (stage) {
      const vid = stage.querySelector('video');
      if (vid) vid.pause();
    }
  }
  document.body.style.overflow = '';
};

window.galleryStep = function (delta) {
  if (!currentGalleryProject || !currentGalleryProject.media || currentGalleryProject.media.length === 0) return;
  const count = currentGalleryProject.media.length;
  currentGalleryIndex = (currentGalleryIndex + delta + count) % count;
  renderGallerySlide();
};

window.goToGallerySlide = function (idx) {
  if (!currentGalleryProject || !currentGalleryProject.media) return;
  currentGalleryIndex = idx;
  renderGallerySlide();
};

function renderGallerySlide() {
  if (!currentGalleryProject) return;
  const mediaList = currentGalleryProject.media || [];
  const stage = document.getElementById('gallery-stage');
  const counter = document.getElementById('gallery-counter');
  const caption = document.getElementById('gallery-caption');
  const indicators = document.getElementById('gallery-indicators');

  if (!stage) return;

  if (mediaList.length === 0) {
    stage.innerHTML = '<div style="color: var(--text-muted); padding: 40px; font-family: var(--font-mono); text-align: center;">Media gallery preview pending public release.</div>';
    if (counter) counter.textContent = '0 / 0';
    if (caption) caption.textContent = '';
    if (indicators) indicators.innerHTML = '';
    return;
  }

  const item = mediaList[currentGalleryIndex];
  if (counter) counter.textContent = `${currentGalleryIndex + 1} / ${mediaList.length}`;
  if (caption) caption.textContent = item.caption || item.title || `${currentGalleryProject.name} Asset ${currentGalleryIndex + 1}`;

  if (item.type === 'video') {
    stage.innerHTML = `<video src="${item.src}" controls autoplay playsinline style="max-width: 100%; max-height: 65vh; outline: none;"></video>`;
  } else if (item.type === 'placeholder') {
    stage.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px; text-align: center; gap: 16px;">
        <i class="fa-solid fa-laptop-code" style="font-size: 3rem; color: var(--accent-cyan);"></i>
        <h3 style="font-family: var(--font-display); color: var(--text-main); margin: 0;">${item.title || currentGalleryProject.name}</h3>
        <p style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-muted); max-width: 450px; line-height: 1.6;">${item.caption}</p>
        <span class="badge-status" style="margin-top: 8px;"><i class="fa-solid fa-clock"></i> Full Walkthrough & Screenshots Coming Soon</span>
      </div>
    `;
  } else {
    stage.innerHTML = `<img src="${item.src}" alt="${item.caption || currentGalleryProject.name}" style="max-width: 100%; max-height: 65vh; object-fit: contain;">`;
  }

  if (indicators) {
    indicators.innerHTML = mediaList.map((_, idx) => `
      <span class="gallery-dot ${idx === currentGalleryIndex ? 'active' : ''}" onclick="goToGallerySlide(${idx})"></span>
    `).join('');
  }
}

// Global Keyboard Navigation for Lightbox & Modals
document.addEventListener('keydown', (e) => {
  const galleryModal = document.getElementById('project-gallery-modal');
  if (galleryModal && galleryModal.classList.contains('active')) {
    if (e.key === 'Escape') closeProjectGallery();
    if (e.key === 'ArrowLeft') galleryStep(-1);
    if (e.key === 'ArrowRight') galleryStep(1);
    return;
  }
  const certM = document.getElementById('cert-modal');
  if (certM && certM.classList.contains('active')) {
    if (e.key === 'Escape') closeCert();
  }
});

/* Mobile Menu Toggle */
function initMobileMenu() {
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const ribbonPill = document.querySelector('.ribbon-pill');
  const navLinks = document.querySelector('.nav-links');

  if (!mobileBtn || !ribbonPill || !navLinks) return;

  mobileBtn.addEventListener('click', () => {
    ribbonPill.classList.toggle('expanded');
  });

  navLinks.querySelectorAll('.nav-link, .nav-anim-btn').forEach(link => {
    link.addEventListener('click', () => {
      ribbonPill.classList.remove('expanded');
    });
  });
}

/* Theme Toggle */
function initThemeToggle() {
  const toggle = document.getElementById('check');
  if (!toggle) return;

  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme === 'light') {
    document.documentElement.classList.add('light-theme');
    toggle.checked = true;
  }

  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      document.documentElement.classList.add('light-theme');
      localStorage.setItem('portfolio-theme', 'light');
    } else {
      document.documentElement.classList.remove('light-theme');
      localStorage.setItem('portfolio-theme', 'dark');
    }
  });
}

/* Contact Routing Logic */
window.openContactChoice = function () {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;

  if (isMobile) {
    const modal = document.getElementById('contact-modal');
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  } else {
    // Desktop: Directly trigger email
    sendContact('email');
  }
};

window.closeContactModal = function () {
  const modal = document.getElementById('contact-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
};

window.sendContact = function (method) {
  const emailTo = 'zyed7094@gmail.com';
  const waNumber = '917019716064';
  const defaultText = 'Hello Zyed, I am reaching out from your portfolio.';
  const encodedText = encodeURIComponent(defaultText);

  if (method === 'whatsapp') {
    window.open(`https://wa.me/${waNumber}?text=${encodedText}`, '_blank');
  } else if (method === 'email') {
    window.location.href = `mailto:${emailTo}?subject=Portfolio%20Inquiry&body=${encodedText}`;
  }

  closeContactModal();
};

/* =========================================================
   Folding Particle Shell (Dotted Sphere) - WebGL2 Engine
   ========================================================= */
function initDottedSphere() {
  const root = document.getElementById('hero-sphere-container');
  const canvas = document.getElementById('dotted-sphere-canvas');
  if (!root || !canvas) return;

  const gl = canvas.getContext('webgl2', {
    antialias: false,
    alpha: true,
    premultipliedAlpha: true,
    preserveDrawingBuffer: false,
  });
  if (!gl) {
    console.warn('WebGL2 not supported, skipping FoldingParticleShell.');
    return;
  }

  const ADVANCED_DEFAULTS = {
    shellCount: 32500,
    shellSize: 28,
    centerX: 50,
    centerY: 50,
    foldScale: 232,
    ridge: 55,
    detail: 87,
    morph: 69,
    breathSec: 57,
    breathDepth: 45,
    pitDepth: 56,
    tilt: 7,
    lightAngle: 162,
    shellGlow: 71,
    backDim: 45,
    rim: 60,
    thickness: 7,
    pointSize: 77,
    halo: 61,
    shed: 66,
    speckCount: 0,
    speckColor: '#C9C7DA',
    speckBright: 0,
    speckSize: 0,
    bands: 0,
    bandScale: 100,
    drift: 0,
    driftAngle: 135,
    twinkle: 0,
    gap: 0,
    trailCount: 0,
    trailStart: 0,
    trailFall: 0,
    trailWidth: 0,
    trailBright: 0,
    seed: 7,
    hover: 100,
    grain: 0,
    vignette: 0,
  };

  const PROPS = {
    speed: 100,
    scale: 100,
    fold: 100,
    density: 50,
    color: '#FFFFFF',
    background: 'transparent',
    advanced: ADVANCED_DEFAULTS,
  };

  const MAX_SHELL = 60000;
  const MAX_SPECKS = 20000;
  const MAX_TRAIL = 80;

  const SNOISE = `
vec3 mod289(vec3 x){ return x - floor(x*(1.0/289.0))*289.0; }
vec4 mod289(vec4 x){ return x - floor(x*(1.0/289.0))*289.0; }
vec4 permute(vec4 x){ return mod289(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314*r; }
float snoise(vec3 v){
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
        i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0*floor(p*ns.z*ns.z);
  vec4 x_ = floor(j*ns.z);
  vec4 y_ = floor(j - 7.0*x_);
  vec4 x = x_*ns.x + ns.yyyy;
  vec4 y = y_*ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m*m;
  return 42.0*dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}
`;

  const SHELL_VS = `#version 300 es
precision highp float;
layout(location=0) in vec3 aDir;
layout(location=1) in vec4 aSeed;
uniform vec2 uRes;
uniform vec2 uCenter;
uniform float uRadius;
uniform float uTime;
uniform float uMorph;
uniform float uFreq;
uniform float uAmp;
uniform float uRidge;
uniform float uDetail;
uniform float uPit;
uniform vec3 uPitDir;
uniform vec2 uRot;
uniform vec3 uLight;
uniform float uBackDim;
uniform float uRim;
uniform float uThick;
uniform float uPointPx;
uniform float uIntensity;
uniform vec3 uColor;
uniform float uShed;
uniform vec2 uMouse;
uniform float uHover;
out vec3 vCol;
${SNOISE}
float field(vec3 p){
  float t = uTime*uMorph;
  float a = snoise(p*uFreq + vec3(0.0, t, t*0.7));
  float r = 1.0 - abs(snoise(p*(uFreq*2.3) + vec3(t*1.3, 4.1, -t)));
  float c = snoise(p*(uFreq*5.0) + vec3(-t*1.7, t, 9.0));
  float pit = uPit*exp((dot(p, uPitDir) - 1.0)*5.0);
  return uAmp*(a*0.62 + (r*r - 0.5)*uRidge*0.55 + c*uDetail*0.2) - pit;
}
mat3 rotY(float a){ float c = cos(a), s = sin(a); return mat3(c,0.0,-s, 0.0,1.0,0.0, s,0.0,c); }
mat3 rotX(float a){ float c = cos(a), s = sin(a); return mat3(1.0,0.0,0.0, 0.0,c,s, 0.0,-s,c); }
void main(){
  vec3 d = aDir;
  vec3 up = abs(d.y) < 0.95 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
  vec3 t1 = normalize(cross(d, up));
  vec3 t2 = cross(d, t1);
  const float e = 0.035;
  float f0 = field(d);
  float f1 = field(normalize(d + t1*e));
  float f2 = field(normalize(d + t2*e));
  vec3 grad = ((f1 - f0)*t1 + (f2 - f0)*t2)/e;
  vec3 n = normalize(d - grad/max(1.0 + f0, 0.2));
  float rad = uRadius*max(1.0 + f0, 0.15)*(1.0 + (aSeed.z - 0.5)*2.0*uThick);
  mat3 R = rotY(uRot.x)*rotX(uRot.y);
  vec3 p = R*(d*rad);
  n = R*n;
  vec2 s = vec2(p.x, -p.y);

  float lam = max(dot(n, uLight), 0.0);
  float fres = pow(1.0 - abs(n.z), 2.0);
  float face = mix(uBackDim, 1.0, smoothstep(-0.3, 0.3, n.z));
  float b = (0.2 + lam + uRim*fres*(0.35 + 0.65*lam))*face;
  float pitW = exp((dot(d, uPitDir) - 1.0)*5.0);
  b *= 1.0 - min(uPit*3.0, 0.75)*pitW;
  b *= 0.45 + 1.1*aSeed.x;
  float sparkle = step(0.985, aSeed.y);
  b *= 1.0 + sparkle*1.4;

  float shed = step(aSeed.w, uShed);
  float life = fract(uTime*0.06 + fract(aSeed.x*31.7 + aSeed.y*7.3));
  vec2 outward = normalize(s + vec2(0.001, 0.0007));
  s += shed*(outward*life*uRadius*0.9
      + vec2(sin(life*6.0 + aSeed.y*20.0), cos(life*5.0 + aSeed.z*17.0))*uRadius*0.1*life);
  b *= mix(1.0, (1.0 - life)*0.7, shed);

  vec2 sp = uCenter + s;
  vec2 mv = sp - uMouse;
  float md = length(mv);
  float h = uHover*exp(-md*md/(uRes.y*uRes.y*0.016));
  sp += mv/(md + 1.0)*h*uRes.y*0.06;
  b *= 1.0 + h*0.8;

  vCol = uColor*b*uIntensity;
  gl_PointSize = uPointPx*(0.8 + 0.4*aSeed.z)*(1.0 + sparkle*0.6);
  gl_Position = vec4(sp.x/uRes.x*2.0 - 1.0, 1.0 - sp.y/uRes.y*2.0, 0.0, 1.0);
}
`;

  const SPECK_VS = `#version 300 es
precision highp float;
layout(location=0) in vec2 aBase;
layout(location=1) in vec4 aSeed;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uDrift;
uniform float uTwinkle;
uniform float uBright;
uniform float uSize;
uniform vec3 uColor;
uniform vec2 uCenter;
uniform float uRadius;
uniform float uGap;
uniform vec2 uMouse;
uniform float uHover;
out vec3 vCol;
void main(){
  vec2 wob = vec2(sin(aBase.y*11.0 + uTime*0.37 + aSeed.x*6.2832),
                  cos(aBase.x*9.0 - uTime*0.31 + aSeed.y*6.2832))*0.004;
  vec2 uv = fract(aBase + uDrift*uTime + wob);
  vec2 p = uv*uRes;
  vec2 v = uMouse - p;
  float f = uHover*exp(-dot(v, v)/(uRes.y*uRes.y*0.03));
  p += v*f*0.3;
  float d = length(p - uCenter)/max(uRadius, 1.0);
  float g = mix(1.0 - uGap, 1.0, smoothstep(1.0, 1.5, d));
  float tw = 1.0 - uTwinkle*(0.5 + 0.5*sin(uTime*(3.0 + aSeed.z*9.0) + aSeed.w*40.0));
  float big = step(0.95, aSeed.y);
  float b = uBright*(0.3 + 0.7*aSeed.x*aSeed.x)*(1.0 + big*1.2)*tw*g*(1.0 + f*1.5);
  vCol = uColor*b;
  gl_PointSize = uSize*(1.0 + 0.6*aSeed.z + big*1.6);
  gl_Position = vec4(p.x/uRes.x*2.0 - 1.0, 1.0 - p.y/uRes.y*2.0, 0.0, 1.0);
}
`;

  const TRAIL_VS = `#version 300 es
precision highp float;
layout(location=0) in vec4 aSeed;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uOrigin;
uniform float uFall;
uniform float uSpan;
uniform float uWidth;
uniform float uStart;
uniform float uBright;
uniform float uSize;
uniform vec3 uColor;
out vec3 vCol;
void main(){
  float period = uSpan/max(uFall, 1.0) + 1.0;
  float age = mod(uTime + aSeed.x*period, period);
  float te = uTime - age;
  float alive = smoothstep(uStart, uStart + 1.5, te);
  float fr = clamp(age*uFall/max(uSpan, 1.0), 0.0, 1.0);
  vec2 p = uOrigin + vec2(
    (aSeed.y - 0.5)*uWidth*(0.35 + 0.65*fr) + sin(age*1.6 + aSeed.z*6.2832)*uWidth*0.12,
    age*uFall);
  float b = uBright*alive*(1.0 - fr)*smoothstep(0.0, 0.3, age)
          *(0.6 + 0.4*sin(uTime*5.0 + aSeed.w*30.0))*(0.5 + 0.5*aSeed.w);
  vCol = uColor*b;
  gl_PointSize = uSize*(0.8 + 0.5*aSeed.z);
  gl_Position = vec4(p.x/uRes.x*2.0 - 1.0, 1.0 - p.y/uRes.y*2.0, 0.0, 1.0);
}
`;

  const POINT_FS = `#version 300 es
precision highp float;
in vec3 vCol;
uniform float uHalo;
out vec4 o;
void main(){
  vec2 d = gl_PointCoord*2.0 - 1.0;
  float r2 = dot(d, d);
  if (r2 > 1.0) discard;
  float a = exp(-r2*10.0) + uHalo*exp(-r2*2.5)*(1.0 - r2);
  o = vec4(vCol*a, a);
}
`;

  const OVERLAY_VS = `#version 300 es
precision highp float;
void main(){
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  gl_Position = vec4(p*2.0 - 1.0, 0.0, 1.0);
}
`;

  const OVERLAY_FS = `#version 300 es
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform float uGrain;
uniform float uVignette;
out vec4 o;
float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233)))*43758.5453); }
void main(){
  vec2 uv = gl_FragCoord.xy/uRes;
  vec2 q = (uv - 0.5)*vec2(uRes.x/max(uRes.y, 1.0), 1.0);
  float v = uVignette*smoothstep(0.25, 1.0, length(q)*1.2);
  float n = hash(gl_FragCoord.xy + floor(uTime*24.0)*vec2(17.0, 31.0));
  float g = uGrain*0.18;
  o = vec4(vec3(n)*g*(1.0 - v), 1.0 - (1.0 - g)*(1.0 - v));
}
`;

  function parseColor(input, fallback) {
    if (typeof input !== 'string') return fallback;
    const m = input.match(/#[0-9a-fA-F]{3,8}\b|rgba?\([^)]*\)/);
    if (!m) return fallback;
    const s = m[0];
    if (s[0] === '#') {
      let h = s.slice(1);
      if (h.length === 3 || h.length === 4) h = h.split('').map((c) => c + c).join('');
      if (h.length < 6) return fallback;
      return [
        parseInt(h.slice(0, 2), 16) / 255,
        parseInt(h.slice(2, 4), 16) / 255,
        parseInt(h.slice(4, 6), 16) / 255,
      ];
    }
    const parts = s
      .replace(/rgba?\(|\)/g, '')
      .split(/[\s,/]+/)
      .filter(Boolean)
      .map((x) => Number.parseFloat(x));
    if (parts.length < 3 || parts.slice(0, 3).some((x) => Number.isNaN(x))) return fallback;
    return [parts[0] / 255, parts[1] / 255, parts[2] / 255];
  }

  function num(v, d) {
    return typeof v === 'number' && Number.isFinite(v) ? v : d;
  }

  function clamp(v, a, b) {
    return Math.min(b, Math.max(a, v));
  }

  function mulberry32(a) {
    return () => {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function hash3(i, j, s) {
    let h = (Math.imul(i, 374761393) + Math.imul(j, 668265263) + Math.imul(s, 1442695041)) | 0;
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    h ^= h >>> 16;
    return (h >>> 0) / 4294967296;
  }

  function pnoise(x, y, px, py, s) {
    const xi = Math.floor(x);
    const yi = Math.floor(y);
    const fx = x - xi;
    const fy = y - yi;
    const ux = fx * fx * (3 - 2 * fx);
    const uy = fy * fy * (3 - 2 * fy);
    const i0 = ((xi % px) + px) % px;
    const i1 = (i0 + 1) % px;
    const j0 = ((yi % py) + py) % py;
    const j1 = (j0 + 1) % py;
    const a = hash3(i0, j0, s);
    const b = hash3(i1, j0, s);
    const c = hash3(i0, j1, s);
    const d = hash3(i1, j1, s);
    return a + (b - a) * ux + (c - a) * uy + (a - b - c + d) * ux * uy;
  }

  function pfbm(x, y, px, py, s) {
    let sum = 0;
    let amp = 0.5;
    let norm = 0;
    let f = 1;
    for (let o = 0; o < 4; o++) {
      sum += amp * pnoise(x * f, y * f, px * f, py * f, s + o * 17);
      norm += amp;
      amp *= 0.5;
      f *= 2;
    }
    return sum / norm;
  }

  function genShell(seed) {
    const rnd = mulberry32(seed * 9973 + 1);
    const out = new Float32Array(MAX_SHELL * 7);
    for (let i = 0; i < MAX_SHELL; i++) {
      const o = i * 7;
      const z = rnd() * 2 - 1;
      const ph = rnd() * Math.PI * 2;
      const r = Math.sqrt(Math.max(0, 1 - z * z));
      out[o] = r * Math.cos(ph);
      out[o + 1] = z;
      out[o + 2] = r * Math.sin(ph);
      out[o + 3] = rnd();
      out[o + 4] = rnd();
      out[o + 5] = rnd();
      out[o + 6] = rnd();
    }
    return out;
  }

  function genSpecks(seed, fx, fy, band) {
    const rnd = mulberry32(seed * 7919 + 13);
    const out = new Float32Array(MAX_SPECKS * 6);
    for (let i = 0; i < MAX_SPECKS; i++) {
      let u = 0;
      let v = 0;
      for (let k = 0; k < 24; k++) {
        u = rnd();
        v = rnd();
        const wx = pfbm(u * fx + 3.1, v * fy + 7.7, fx, fy, seed + 101) - 0.5;
        const wy = pfbm(u * fx + 11.3, v * fy + 2.9, fx, fy, seed + 202) - 0.5;
        const n = pfbm(u * fx + wx * 1.6, v * fy + wy * 1.6, fx, fy, seed);
        const ridge = Math.pow(1 - Math.abs(2 * n - 1), 10);
        const acc = (1 - band) * 0.35 + band * ridge;
        if (rnd() < acc) break;
      }
      const o = i * 6;
      out[o] = u;
      out[o + 1] = v;
      out[o + 2] = rnd();
      out[o + 3] = rnd();
      out[o + 4] = rnd();
      out[o + 5] = rnd();
    }
    return out;
  }

  function genTrail(seed) {
    const rnd = mulberry32(seed * 6151 + 29);
    const out = new Float32Array(MAX_TRAIL * 4);
    for (let i = 0; i < out.length; i++) out[i] = rnd();
    return out;
  }

  function compile(gl, type, src) {
    const sh = gl.createShader(type);
    if (!sh) throw new Error('FoldingParticleShell: createShader failed');
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
      const log = gl.getShaderInfoLog(sh);
      gl.deleteShader(sh);
      throw new Error('FoldingParticleShell shader: ' + log);
    }
    return sh;
  }

  function program(gl, vs, fs) {
    const p = gl.createProgram();
    if (!p) throw new Error('FoldingParticleShell: createProgram failed');
    const v = compile(gl, gl.VERTEX_SHADER, vs);
    const f = compile(gl, gl.FRAGMENT_SHADER, fs);
    gl.attachShader(p, v);
    gl.attachShader(p, f);
    gl.linkProgram(p);
    gl.deleteShader(v);
    gl.deleteShader(f);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
      throw new Error('FoldingParticleShell link: ' + gl.getProgramInfoLog(p));
    }
    return p;
  }

  function uniforms(gl, p, names) {
    const out = {};
    for (const n of names) {
      const loc = gl.getUniformLocation(p, n);
      out[n] = loc;
    }
    return out;
  }

  try {
    const shellProg = program(gl, SHELL_VS, POINT_FS);
    const speckProg = program(gl, SPECK_VS, POINT_FS);
    const trailProg = program(gl, TRAIL_VS, POINT_FS);
    const overlayProg = program(gl, OVERLAY_VS, OVERLAY_FS);

    const shellU = uniforms(gl, shellProg, [
      'uRes', 'uCenter', 'uRadius', 'uTime', 'uMorph', 'uFreq', 'uAmp', 'uRidge',
      'uDetail', 'uPit', 'uPitDir', 'uRot', 'uLight', 'uBackDim', 'uRim', 'uThick',
      'uPointPx', 'uIntensity', 'uColor', 'uShed', 'uMouse', 'uHover', 'uHalo',
    ]);
    const speckU = uniforms(gl, speckProg, [
      'uRes', 'uTime', 'uDrift', 'uTwinkle', 'uBright', 'uSize', 'uColor', 'uCenter',
      'uRadius', 'uGap', 'uMouse', 'uHover', 'uHalo',
    ]);
    const trailU = uniforms(gl, trailProg, [
      'uRes', 'uTime', 'uOrigin', 'uFall', 'uSpan', 'uWidth', 'uStart', 'uBright',
      'uSize', 'uColor', 'uHalo',
    ]);
    const overlayU = uniforms(gl, overlayProg, ['uRes', 'uTime', 'uGrain', 'uVignette']);

    const shellBuf = gl.createBuffer();
    const shellVao = gl.createVertexArray();
    gl.bindVertexArray(shellVao);
    gl.bindBuffer(gl.ARRAY_BUFFER, shellBuf);
    gl.bufferData(gl.ARRAY_BUFFER, MAX_SHELL * 7 * 4, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 28, 0);
    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(1, 4, gl.FLOAT, false, 28, 12);

    const speckBuf = gl.createBuffer();
    const speckVao = gl.createVertexArray();
    gl.bindVertexArray(speckVao);
    gl.bindBuffer(gl.ARRAY_BUFFER, speckBuf);
    gl.bufferData(gl.ARRAY_BUFFER, MAX_SPECKS * 6 * 4, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 24, 0);
    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(1, 4, gl.FLOAT, false, 24, 8);

    const trailBuf = gl.createBuffer();
    const trailVao = gl.createVertexArray();
    gl.bindVertexArray(trailVao);
    gl.bindBuffer(gl.ARRAY_BUFFER, trailBuf);
    gl.bufferData(gl.ARRAY_BUFFER, MAX_TRAIL * 4 * 4, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 4, gl.FLOAT, false, 16, 0);

    const emptyVao = gl.createVertexArray();
    gl.bindVertexArray(null);

    let shellSeed = NaN;
    let trailSeed = NaN;
    let speckKey = '';

    let cssW = root.offsetWidth || 480;
    let cssH = root.offsetHeight || 480;
    const ro = new ResizeObserver(() => {
      cssW = root.offsetWidth || 480;
      cssH = root.offsetHeight || 480;
    });
    ro.observe(root);

    const mq = typeof window.matchMedia === 'function' ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
    let reduced = !!mq?.matches;
    mq?.addEventListener?.('change', () => {
      reduced = !!mq?.matches;
    });

    const ptr = { x: 0, y: 0, over: 0, down: 0, seen: false };
    const eased = { x: 0, y: 0, over: 0, down: 0 };
    const onMove = (e) => {
      const rect = root.getBoundingClientRect();
      ptr.x = e.clientX - rect.left;
      ptr.y = e.clientY - rect.top;
      ptr.over = 1;
      if (!ptr.seen) {
        eased.x = ptr.x;
        eased.y = ptr.y;
        ptr.seen = true;
      }
    };
    const onLeave = () => {
      ptr.over = 0;
      ptr.down = 0;
    };
    const onDown = (e) => {
      onMove(e);
      ptr.down = 1;
    };
    const onUp = () => {
      ptr.down = 0;
    };

    root.addEventListener('pointermove', onMove);
    root.addEventListener('pointerenter', onMove);
    root.addEventListener('pointerleave', onLeave);
    root.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointercancel', onUp);

    const pitDir = (() => {
      const v = [0.12, 0.3, 0.95];
      const l = Math.hypot(v[0], v[1], v[2]);
      return [v[0] / l, v[1] / l, v[2] / l];
    })();

    let last = -1;
    let t = 0;

    const frame = (now) => {
      requestAnimationFrame(frame);
      const dt = last < 0 ? 0 : Math.min((now - last) / 1000, 1 / 20);
      last = now;
      if (gl.isContextLost()) return;

      const L = PROPS;
      const adv = { ...ADVANCED_DEFAULTS, ...(L.advanced || {}) };

      const rate = reduced ? 0 : Math.max(0, num(L.speed, 50)) / 50;
      t += dt * rate;
      const ts = t % 3600;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const W = Math.max(1, Math.round(cssW * dpr));
      const H = Math.max(1, Math.round(cssH * dpr));
      if (canvas.width !== W || canvas.height !== H) {
        canvas.width = W;
        canvas.height = H;
      }
      if (cssW < 2 || cssH < 2) return;

      const seed = Math.round(num(adv.seed, 7));
      if (seed !== shellSeed) {
        shellSeed = seed;
        gl.bindBuffer(gl.ARRAY_BUFFER, shellBuf);
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, genShell(seed));
      }
      if (seed !== trailSeed) {
        trailSeed = seed;
        gl.bindBuffer(gl.ARRAY_BUFFER, trailBuf);
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, genTrail(seed));
      }
      const bandFreq = Math.max(1, Math.round(2.5 * clamp(num(adv.bandScale, 100), 20, 400) / 100));
      const fy = bandFreq;
      const fx = Math.max(1, Math.round(bandFreq * (W / H)));
      const band = clamp(num(adv.bands, 70) / 100, 0, 1);
      const key = `${seed}|${fx}|${fy}|${band}`;
      if (key !== speckKey) {
        speckKey = key;
        gl.bindBuffer(gl.ARRAY_BUFFER, speckBuf);
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, genSpecks(seed, fx, fy, band));
      }

      const k = 1 - Math.exp(-dt * 6);
      const sx = W / Math.max(cssW, 1);
      eased.x += (ptr.x - eased.x) * k;
      eased.y += (ptr.y - eased.y) * k;
      eased.over += (ptr.over - eased.over) * k;
      eased.down += (ptr.down - eased.down) * (1 - Math.exp(-dt * 10));
      const mx = eased.x * sx;
      const my = eased.y * sx;
      const hs = eased.over * Math.max(0, num(adv.hover, 50)) / 50;
      const hover = hs * (1 + 0.8 * eased.down);

      const sc = Math.max(0.1, num(L.scale, 100) / 100);
      const cx = (W * num(adv.centerX, 50)) / 100;
      const cy = (H * num(adv.centerY, 49)) / 100;
      const R = Math.min((H * num(adv.shellSize, 16)) / 100, W * 0.32) * sc;

      const dens = Math.max(0, num(L.density, 70)) / 70;
      const shellN = clamp(Math.round(num(adv.shellCount, 20000) * dens), 0, MAX_SHELL);
      const speckN = clamp(Math.round(num(adv.speckCount, 7000) * dens), 0, MAX_SPECKS);
      const trailN = clamp(Math.round(num(adv.trailCount, 30)), 0, MAX_TRAIL);

      const breath = Math.max(1, num(adv.breathSec, 24));
      const depth = clamp(num(adv.breathDepth, 45) / 100, 0, 1);
      const crumple = 1 - depth * (0.5 + 0.5 * Math.cos((2 * Math.PI * t) / breath));

      const col = parseColor(L.color, [0.831, 0.824, 0.894]);
      const speckCol = parseColor(adv.speckColor, [0.788, 0.78, 0.855]);

      gl.viewport(0, 0, W, H);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.enable(gl.BLEND);
      gl.blendFuncSeparate(gl.ONE, gl.ONE, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

      // Background specks
      if (speckN > 0 && speckProg) {
        const da = (num(adv.driftAngle, 135) * Math.PI) / 180;
        const dr = num(adv.drift, 18) / 1000;
        gl.useProgram(speckProg);
        if (speckU.uRes) gl.uniform2f(speckU.uRes, W, H);
        if (speckU.uTime) gl.uniform1f(speckU.uTime, ts);
        if (speckU.uDrift) gl.uniform2f(speckU.uDrift, Math.cos(da) * dr, Math.sin(da) * dr * (W / H));
        if (speckU.uTwinkle) gl.uniform1f(speckU.uTwinkle, clamp(num(adv.twinkle, 50) / 100, 0, 1));
        if (speckU.uBright) gl.uniform1f(speckU.uBright, (num(adv.speckBright, 60) / 100) * 2.0);
        if (speckU.uSize) gl.uniform1f(speckU.uSize, 4.5 * dpr * Math.max(0.1, num(adv.speckSize, 100) / 100));
        if (speckU.uColor) gl.uniform3f(speckU.uColor, speckCol[0], speckCol[1], speckCol[2]);
        if (speckU.uCenter) gl.uniform2f(speckU.uCenter, cx, cy);
        if (speckU.uRadius) gl.uniform1f(speckU.uRadius, R);
        if (speckU.uGap) gl.uniform1f(speckU.uGap, clamp(num(adv.gap, 60) / 100, 0, 1));
        if (speckU.uMouse) gl.uniform2f(speckU.uMouse, mx, my);
        if (speckU.uHover) gl.uniform1f(speckU.uHover, hover);
        if (speckU.uHalo) gl.uniform1f(speckU.uHalo, 0.2);
        gl.bindVertexArray(speckVao);
        gl.drawArrays(gl.POINTS, 0, speckN);
      }

      // Falling trail
      if (trailN > 0 && trailProg) {
        const oy = cy + R * 0.95;
        gl.useProgram(trailProg);
        if (trailU.uRes) gl.uniform2f(trailU.uRes, W, H);
        if (trailU.uTime) gl.uniform1f(trailU.uTime, ts);
        if (trailU.uOrigin) gl.uniform2f(trailU.uOrigin, cx + H * 0.02, oy);
        if (trailU.uFall) gl.uniform1f(trailU.uFall, Math.max(1, (num(adv.trailFall, 5) / 100) * H));
        if (trailU.uSpan) gl.uniform1f(trailU.uSpan, Math.max(1, H - oy));
        if (trailU.uWidth) gl.uniform1f(trailU.uWidth, (num(adv.trailWidth, 5) / 100) * H);
        if (trailU.uStart) gl.uniform1f(trailU.uStart, num(adv.trailStart, 3));
        if (trailU.uBright) gl.uniform1f(trailU.uBright, (num(adv.trailBright, 80) / 100) * 1.4);
        if (trailU.uSize) gl.uniform1f(trailU.uSize, 10 * dpr * Math.max(0.1, num(adv.pointSize, 100) / 100));
        if (trailU.uColor) gl.uniform3f(trailU.uColor, col[0], col[1], col[2]);
        if (trailU.uHalo) gl.uniform1f(trailU.uHalo, 0.5);
        gl.bindVertexArray(trailVao);
        gl.drawArrays(gl.POINTS, 0, trailN);
      }

      // Shell
      if (shellN > 0 && shellProg) {
        const tilt = (num(adv.tilt, 3) * Math.PI) / 180;
        const la = (num(adv.lightAngle, 160) * Math.PI) / 180;
        const lx = Math.cos(la);
        const ly = -Math.sin(la);
        const lz = 0.75;
        const ll = Math.hypot(lx, ly, lz);
        const px01 = mx / W - 0.5;
        const py01 = my / H - 0.5;
        gl.useProgram(shellProg);
        if (shellU.uRes) gl.uniform2f(shellU.uRes, W, H);
        if (shellU.uCenter) gl.uniform2f(shellU.uCenter, cx, cy);
        if (shellU.uRadius) gl.uniform1f(shellU.uRadius, R);
        if (shellU.uTime) gl.uniform1f(shellU.uTime, ts);
        if (shellU.uMorph) gl.uniform1f(shellU.uMorph, num(adv.morph, 30) / 500);
        if (shellU.uFreq) gl.uniform1f(shellU.uFreq, Math.max(0.1, num(adv.foldScale, 140) / 100));
        if (shellU.uAmp) gl.uniform1f(shellU.uAmp, (Math.max(0, num(L.fold, 60)) / 100) * 0.42 * crumple);
        if (shellU.uRidge) gl.uniform1f(shellU.uRidge, num(adv.ridge, 55) / 100);
        if (shellU.uDetail) gl.uniform1f(shellU.uDetail, num(adv.detail, 45) / 100);
        if (shellU.uPit) gl.uniform1f(shellU.uPit, (num(adv.pitDepth, 40) / 100) * 0.3 * crumple * crumple);
        if (shellU.uPitDir) gl.uniform3f(shellU.uPitDir, pitDir[0], pitDir[1], pitDir[2]);
        if (shellU.uRot) {
          gl.uniform2f(
            shellU.uRot,
            tilt * Math.sin(t * 0.13) + px01 * 0.3 * hs,
            tilt * 0.6 * Math.sin(t * 0.09 + 1) + py01 * 0.25 * hs
          );
        }
        if (shellU.uLight) gl.uniform3f(shellU.uLight, lx / ll, ly / ll, lz / ll);
        if (shellU.uBackDim) gl.uniform1f(shellU.uBackDim, clamp(num(adv.backDim, 35) / 100, 0, 1));
        if (shellU.uRim) gl.uniform1f(shellU.uRim, num(adv.rim, 60) / 60);
        if (shellU.uThick) gl.uniform1f(shellU.uThick, num(adv.thickness, 4) / 100);
        if (shellU.uPointPx) gl.uniform1f(shellU.uPointPx, 5.4 * dpr * Math.max(0.1, num(adv.pointSize, 100) / 100));
        if (shellU.uIntensity) gl.uniform1f(shellU.uIntensity, num(adv.shellGlow, 55) / 40);
        if (shellU.uColor) gl.uniform3f(shellU.uColor, col[0], col[1], col[2]);
        if (shellU.uShed) gl.uniform1f(shellU.uShed, (clamp(num(adv.shed, 25), 0, 100) / 100) * 0.2);
        if (shellU.uMouse) gl.uniform2f(shellU.uMouse, mx, my);
        if (shellU.uHover) gl.uniform1f(shellU.uHover, hover);
        if (shellU.uHalo) gl.uniform1f(shellU.uHalo, (num(adv.halo, 35) / 100) * 0.15);
        gl.bindVertexArray(shellVao);
        gl.drawArrays(gl.POINTS, 0, shellN);
      }

      // Grain + vignette overlay
      const grain = clamp(num(adv.grain, 0) / 100, 0, 1);
      const vig = clamp(num(adv.vignette, 0) / 100, 0, 1);
      if ((grain > 0 || vig > 0) && overlayProg) {
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        gl.useProgram(overlayProg);
        if (overlayU.uRes) gl.uniform2f(overlayU.uRes, W, H);
        if (overlayU.uTime) gl.uniform1f(overlayU.uTime, now / 1000);
        if (overlayU.uGrain) gl.uniform1f(overlayU.uGrain, grain);
        if (overlayU.uVignette) gl.uniform1f(overlayU.uVignette, vig);
        gl.bindVertexArray(emptyVao);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
      }
      gl.bindVertexArray(null);
    };

    requestAnimationFrame(frame);
  } catch (err) {
    console.error('FoldingParticleShell error:', err);
  }
}


