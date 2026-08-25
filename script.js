/* =========================================
   DANNY PORTFOLIO
   Premium Portfolio Stylesheet
========================================= */

:root {
    --bg: #07111f;
    --bg-secondary: #0b1728;
    --surface: rgba(17, 32, 52, 0.72);
    --surface-solid: #101f34;
    --border: rgba(148, 163, 184, 0.14);

    --text: #f5f7fb;
    --text-soft: #a9b6c8;
    --text-muted: #718096;

    --accent: #7dd3fc;
    --accent-secondary: #a78bfa;
    --accent-soft: rgba(125, 211, 252, 0.12);

    --success: #86efac;

    --max-width: 1180px;

    --font-display: "Space Grotesk", sans-serif;
    --font-body: "Inter", sans-serif;

    --radius-sm: 12px;
    --radius-md: 20px;
    --radius-lg: 28px;

    --transition: 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}


/* =========================================
   RESET
========================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    min-height: 100vh;

    background:
        radial-gradient(
            circle at 20% 10%,
            rgba(56, 189, 248, 0.08),
            transparent 28%
        ),
        radial-gradient(
            circle at 85% 35%,
            rgba(139, 92, 246, 0.08),
            transparent 30%
        ),
        var(--bg);

    color: var(--text);

    font-family: var(--font-body);

    line-height: 1.7;

    overflow-x: hidden;
}

a {
    color: inherit;
    text-decoration: none;
}

button,
a {
    -webkit-tap-highlight-color: transparent;
}

img {
    max-width: 100%;
    display: block;
}


/* =========================================
   GLOBAL
========================================= */

.container {
    width: min(
        calc(100% - 40px),
        var(--max-width)
    );

    margin-inline: auto;
}

.section {
    position: relative;
    padding: 130px 0;
}

.section-heading {
    max-width: 760px;
    margin-bottom: 70px;
}

.section-label {
    display: inline-block;

    margin-bottom: 18px;

    color: var(--accent);

    font-size: 0.75rem;
    font-weight: 700;

    letter-spacing: 0.2em;
}

.section-heading h2 {
    font-family: var(--font-display);

    font-size: clamp(
        2.4rem,
        5vw,
        4.2rem
    );

    line-height: 1.05;

    letter-spacing: -0.045em;
}

.section-heading h2 span {
    display: block;
    color: var(--text-soft);
}

.section-heading p {
    margin-top: 24px;

    max-width: 620px;

    color: var(--text-soft);

    font-size: 1.05rem;
}


/* =========================================
   BACKGROUND
========================================= */

.background-grid {
    position: fixed;
    inset: 0;

    pointer-events: none;

    opacity: 0.23;

    background-image:
        linear-gradient(
            rgba(148, 163, 184, 0.035) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(148, 163, 184, 0.035) 1px,
            transparent 1px
        );

    background-size: 60px 60px;

    mask-image: linear-gradient(
        to bottom,
        black,
        transparent 80%
    );

    z-index: -2;
}

.glow {
    position: fixed;

    width: 420px;
    height: 420px;

    border-radius: 50%;

    filter: blur(110px);

    opacity: 0.12;

    pointer-events: none;

    z-index: -1;
}

.glow-one {
    top: 5%;
    left: -180px;
    background: #38bdf8;
}

.glow-two {
    top: 45%;
    right: -200px;
    background: #8b5cf6;
}


/* =========================================
   NAVIGATION
========================================= */

.navbar {
    position: fixed;

    top: 0;
    left: 0;

    width: 100%;

    z-index: 1000;

    background: rgba(7, 17, 31, 0.7);

    backdrop-filter: blur(18px);

    border-bottom: 1px solid rgba(
        148,
        163,
        184,
        0.08
    );
}

.nav-container {
    min-height: 78px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 30px;
}

.logo {
    font-family: var(--font-display);

    font-size: 1.15rem;

    font-weight: 700;

    letter-spacing: -0.04em;

    white-space: nowrap;
}

.logo-symbol {
    color: var(--accent);
}

.nav-links {
    display: flex;
    align-items: center;

    gap: 28px;
}

.nav-links a {
    position: relative;

    color: var(--text-soft);

    font-size: 0.84rem;
    font-weight: 500;

    transition: var(--transition);
}

.nav-links a::after {
    content: "";

    position: absolute;

    left: 0;
    bottom: -7px;

    width: 0;
    height: 1px;

    background: var(--accent);

    transition: var(--transition);
}

.nav-links a:hover {
    color: var(--text);
}

.nav-links a:hover::after {
    width: 100%;
}

.nav-button {
    padding: 11px 18px;

    border: 1px solid var(--border);

    border-radius: 100px;

    background: rgba(
        125,
        211,
        252,
        0.05
    );

    color: var(--text);

    font-size: 0.8rem;
    font-weight: 600;

    transition: var(--transition);
}

.nav-button:hover {
    border-color: rgba(
        125,
        211,
        252,
        0.4
    );

    background: var(--accent-soft);

    transform: translateY(-2px);
}


/* =========================================
   HERO
========================================= */

.hero {
    min-height: 100vh;

    display: flex;
    align-items: center;

    padding-top: 150px;
    padding-bottom: 100px;
}

.hero-container {
    display: grid;

    grid-template-columns:
        1.05fr
        0.95fr;

    align-items: center;

    gap: 70px;
}

.status-badge {
    display: inline-flex;
    align-items: center;

    gap: 10px;

    padding: 8px 14px;

    margin-bottom: 28px;

    border: 1px solid var(--border);

    border-radius: 100px;

    background: rgba(
        125,
        211,
        252,
        0.045
    );

    color: var(--text-soft);

    font-size: 0.76rem;
    font-weight: 500;

    animation: fadeUp 0.8s ease both;
}

.status-dot {
    width: 7px;
    height: 7px;

    border-radius: 50%;

    background: var(--success);

    box-shadow:
        0 0 0 5px
        rgba(134, 239, 172, 0.08);

    animation: pulse 2s infinite;
}

.hero-intro {
    margin-bottom: 4px;

    color: var(--accent);

    font-size: 1rem;
    font-weight: 600;

    animation: fadeUp 0.8s 0.08s ease both;
}

.hero h1 {
    font-family: var(--font-display);

    font-size: clamp(
        4rem,
        9vw,
        7.6rem
    );

    line-height: 0.9;

    letter-spacing: -0.07em;

    animation: fadeUp 0.8s 0.16s ease both;
}

.hero h1 span {
    display: block;

    background: linear-gradient(
        100deg,
        var(--accent),
        var(--accent-secondary)
    );

    -webkit-background-clip: text;
    background-clip: text;

    color: transparent;
}

.hero h2 {
    max-width: 720px;

    margin-top: 32px;

    font-family: var(--font-display);

    font-size: clamp(
        1.35rem,
        3vw,
        2.25rem
    );

    line-height: 1.25;

    letter-spacing: -0.035em;

    animation: fadeUp 0.8s 0.24s ease both;
}

.hero h2 span {
    color: var(--text-soft);
}

.hero-description {
    max-width: 650px;

    margin-top: 24px;

    color: var(--text-soft);

    font-size: 1rem;

    animation: fadeUp 0.8s 0.32s ease both;
}

.hero-actions {
    display: flex;
    flex-wrap: wrap;

    gap: 14px;

    margin-top: 36px;

    animation: fadeUp 0.8s 0.4s ease both;
}

.primary-button,
.secondary-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    gap: 12px;

    min-height: 50px;

    padding: 0 22px;

    border-radius: 100px;

    font-size: 0.84rem;
    font-weight: 600;

    transition: var(--transition);
}

.primary-button {
    background: var(--text);

    color: var(--bg);

    box-shadow:
        0 10px 35px
        rgba(0, 0, 0, 0.2);
}

.primary-button:hover {
    transform: translateY(-4px);

    box-shadow:
        0 15px 40px
        rgba(0, 0, 0, 0.3);
}

.primary-button span {
    font-size: 1.1rem;

    transition: var(--transition);
}

.primary-button:hover span {
    transform: translateX(4px);
}

.secondary-button {
    border: 1px solid var(--border);

    color: var(--text-soft);
}

.secondary-button:hover {
    color: var(--text);

    border-color: rgba(
        125,
        211,
        252,
        0.35
    );

    background: var(--accent-soft);

    transform: translateY(-4px);
}

.hero-meta {
    display: flex;
    align-items: center;

    gap: 22px;

    margin-top: 55px;

    animation: fadeUp 0.8s 0.48s ease both;
}

.meta-item {
    display: flex;
    flex-direction: column;
}

.meta-item strong {
    font-family: var(--font-display);

    font-size: 1.45rem;

    line-height: 1;

    color: var(--text);
}

.meta-item span {
    margin-top: 5px;

    color: var(--text-muted);

    font-size: 0.68rem;

    text-transform: uppercase;

    letter-spacing: 0.08em;
}

.meta-divider {
    width: 1px;
    height: 35px;

    background: var(--border);
}


/* =========================================
   HERO VISUAL
========================================= */

.hero-visual {
    position: relative;

    min-height: 520px;

    display: flex;
    align-items: center;
    justify-content: center;
}

.ai-card {
    position: relative;

    width: min(
        100%,
        510px
    );

    overflow: hidden;

    border: 1px solid rgba(
        148,
        163,
        184,
        0.16
    );

    border-radius: var(--radius-lg);

    background:
        linear-gradient(
            145deg,
            rgba(19, 37, 60, 0.95),
            rgba(8, 18, 32, 0.94)
        );

    box-shadow:
        0 40px 100px
        rgba(0, 0, 0, 0.35),

        inset 0 1px 0
        rgba(255, 255, 255, 0.04);

    transform:
        perspective(1000px)
        rotateY(-5deg)
        rotateX(3deg);

    transition: var(--transition);

    z-index: 3;

    animation:
        floatCard
        7s
        ease-in-out
        infinite;
}

.ai-card:hover {
    transform:
        perspective(1000px)
        rotateY(0deg)
        rotateX(0deg)
        translateY(-8px);
}

.ai-card-header {
    height: 52px;

    display: flex;
    align-items: center;

    gap: 7px;

    padding: 0 18px;

    border-bottom: 1px solid var(--border);

    background: rgba(
        255,
        255,
        255,
        0.015
    );
}

.terminal-dot {
    width: 8px;
    height: 8px;

    border-radius: 50%;

    background: rgba(
        255,
        255,
        255,
        0.18
    );
}

.terminal-title {
    margin-left: 12px;

    color: var(--text-muted);

    font-size: 0.72rem;

    font-family: monospace;
}

.ai-card-body {
    padding: 35px 28px;
}

.code-line {
    display: flex;
    align-items: center;

    gap: 9px;

    margin-bottom: 17px;

    font-family: monospace;

    font-size: 0.85rem;

    color: var(--text-soft);
}

.code-number {
    width: 25px;

    color: #42546b;

    user-select: none;
}

.code-purple {
    color: #c4b5fd;
}

.code-blue {
    color: #7dd3fc;
}

.code-green {
    color: #86efac;
}

.cursor {
    display: inline-block;

    width: 7px;
    height: 17px;

    background: var(--accent);

    animation: blink 1s infinite;
}

.ai-card-footer {
    display: flex;
    align-items: center;

    gap: 9px;

    padding: 15px 20px;

    border-top: 1px solid var(--border);

    color: var(--text-muted);

    font-size: 0.68rem;

    font-family: monospace;
}

.pulse {
    width: 6px;
    height: 6px;

    border-radius: 50%;

    background: var(--success);

    box-shadow:
        0 0 12px
        rgba(134, 239, 172, 0.6);
}

.orbit {
    position: absolute;

    border: 1px solid rgba(
        125,
        211,
        252,
        0.08
    );

    border-radius: 50%;

    animation:
        spin
        20s
        linear
        infinite;
}

.orbit-one {
    width: 470px;
    height: 470px;
}

.orbit-two {
    width: 600px;
    height: 300px;

    transform: rotate(55deg);
}

.scroll-indicator {
    position: absolute;

    bottom: 35px;
    left: 50%;

    transform: translateX(-50%);

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 8px;

    color: var(--text-muted);

    font-size: 0.65rem;

    text-transform: uppercase;

    letter-spacing: 0.14em;
}

.scroll-line {
    width: 1px;
    height: 35px;

    background: linear-gradient(
        to bottom,
        var(--text-muted),
        transparent
    );
}


/* =========================================
   ABOUT
========================================= */

.about-section {
    background:
        linear-gradient(
            to bottom,
            transparent,
            rgba(13, 31, 52, 0.35),
            transparent
        );
}

.about-grid {
    display: grid;

    grid-template-columns:
        1.4fr
        0.8fr;

    gap: 22px;
}

.about-main-card,
.about-side-card {
    position: relative;

    padding: 42px;

    border: 1px solid var(--border);

    border-radius: var(--radius-lg);

    background: var(--surface);

    backdrop-filter: blur(20px);

    transition: var(--transition);
}

.about-main-card:hover,
.about-side-card:hover {
    border-color: rgba(
        125,
        211,
        252,
        0.25
    );

    transform: translateY(-6px);
}

.card-number {
    position: absolute;

    top: 30px;
    right: 35px;

    color: rgba(
        125,
        211,
        252,
        0.25
    );

    font-family: var(--font-display);

    font-size: 2rem;

    font-weight: 700;
}

.about-main-card h3,
.about-side-card h3 {
    margin-bottom: 18px;

    font-family: var(--font-display);

    font-size: 1.8rem;

    letter-spacing: -0.04em;
}

.about-main-card p {
    max-width: 700px;

    margin-top: 15px;

    color: var(--text-soft);
}

.mini-icon {
    width: 52px;
    height: 52px;

    display: grid;
    place-items: center;

    margin-bottom: 25px;

    border: 1px solid rgba(
        125,
        211,
        252,
        0.2
    );

    border-radius: 15px;

    background: var(--accent-soft);

    color: var(--accent);

    font-family: var(--font-display);

    font-weight: 700;
}

.about-side-card ul {
    display: flex;
    flex-direction: column;

    gap: 13px;

    list-style: none;
}

.about-side-card li {
    position: relative;

    padding-left: 18px;

    color: var(--text-soft);

    font-size: 0.9rem;
}

.about-side-card li::before {
    content: "";

    position: absolute;

    left: 0;
    top: 11px;

    width: 5px;
    height: 5px;

    border-radius: 50%;

    background: var(--accent);
}


/* =========================================
   EDUCATION
========================================= */

.timeline {
    position: relative;

    max-width: 900px;

    margin-left: 25px;

    padding-left: 45px;

    border-left: 1px solid var(--border);
}

.timeline-item {
    position: relative;

    margin-bottom: 70px;
}

.timeline-item:last-child {
    margin-bottom: 0;
}

.timeline-marker {
    position: absolute;

    left: -72px;
    top: 0;

    width: 52px;
    height: 52px;

    display: grid;
    place-items: center;

    border: 1px solid rgba(
        125,
        211,
        252,
        0.25
    );

    border-radius: 50%;

    background: var(--bg-secondary);

    color: var(--accent);

    font-family: var(--font-display);

    font-size: 0.8rem;
    font-weight: 700;
}

.timeline-content {
    padding: 35px;

    border: 1px solid var(--border);

    border-radius: var(--radius-md);

    background: var(--surface);

    transition: var(--transition);
}

.timeline-content:hover {
    transform: translateX(8px);

    border-color: rgba(
        125,
        211,
        252,
        0.22
    );
}

.timeline-year {
    color: var(--accent);

    font-size: 0.7rem;
    font-weight: 700;

    letter-spacing: 0.16em;
}

.timeline-content h3 {
    margin-top: 10px;

    font-family: var(--font-display);

    font-size: 1.8rem;

    letter-spacing: -0.04em;
}

.timeline-content p {
    margin-top: 10px;

    color: var(--text-soft);
}

.achievement-tag,
.experiment-status {
    display: inline-block;

    margin-top: 20px;

    padding: 6px 11px;

    border: 1px solid rgba(
        125,
        211,
        252,
        0.15
    );

    border-radius: 100px;

    background: var(--accent-soft);

    color: var(--accent);

    font-size: 0.68rem;
    font-weight: 600;

    letter-spacing: 0.05em;
}

.timeline-item.upcoming
.timeline-marker {
    border-style: dashed;
}


/* =========================================
   ACHIEVEMENTS
========================================= */

.achievement-grid {
    display: grid;

    grid-template-columns:
        1.25fr
        1fr
        1fr;

    gap: 20px;
}

.achievement-card {
    display: flex;

    flex-direction: column;

    justify-content: space-between;

    min-height: 300px;

    padding: 32px;

    border: 1px solid var(--border);

    border-radius: var(--radius-lg);

    background: var(--surface);

    transition: var(--transition);
}

.achievement-card:hover {
    transform: translateY(-8px);

    border-color: rgba(
        125,
        211,
        252,
        0.25
    );
}

.achievement-card.featured {
    background:
        radial-gradient(
            circle at top right,
            rgba(
                125,
                211,
                252,
                0.1
            ),
            transparent 45%
        ),
        var(--surface);
}

.achievement-icon {
    width: 65px;
    height: 65px;

    display: grid;
    place-items: center;

    margin-bottom: 35px;

    border: 1px solid rgba(
        125,
        211,
        252,
        0.2
    );

    border-radius: 18px;

    background: var(--accent-soft);

    color: var(--accent);

    font-family: var(--font-display);

    font-size: 1.25rem;
    font-weight: 700;
}

.achievement-label {
    color: var(--text-muted);

    font-size: 0.66rem;
    font-weight: 700;

    letter-spacing: 0.15em;
}

.achievement-card h3 {
    margin-top: 8px;

    font-family: var(--font-display);

    font-size: 1.45rem;

    letter-spacing: -0.035em;
}

.achievement-card p {
    margin-top: 12px;

    color: var(--text-soft);

    font-size: 0.87rem;
}


/* =========================================
   AI
========================================= */

.ai-section {
    background:
        radial-gradient(
            circle at 50% 50%,
            rgba(
                125,
                211,
                252,
                0.035
            ),
            transparent 45%
        );
}

.skills-grid {
    display: grid;

    grid-template-columns:
        1.2fr
        1fr
        1fr;

    gap: 20px;
}

.skill-card {
    position: relative;

    min-height: 280px;

    padding: 34px;

    border: 1px solid var(--border);

    border-radius: var(--radius-lg);

    background:
        linear-gradient(
            145deg,
            rgba(18, 36, 58, 0.7),
            rgba(9, 21, 36, 0.7)
        );

    transition: var(--transition);

    overflow: hidden;
}

.skill-card::before {
    content: "";

    position: absolute;

    width: 160px;
    height: 160px;

    top: -90px;
    right: -70px;

    border-radius: 50%;

    background: var(--accent);

    filter: blur(70px);

    opacity: 0.08;

    transition: var(--transition);
}

.skill-card:hover {
    transform: translateY(-8px);

    border-color: rgba(
        125,
        211,
        252,
        0.25
    );
}

.skill-card:hover::before {
    opacity: 0.16;
}

.skill-card.large {
    grid-row: span 2;

    min-height: 580px;

    display: flex;

    flex-direction: column;

    justify-content: flex-end;
}

.skill-index {
    position: absolute;

    top: 25px;
    right: 28px;

    color: var(--text-muted);

    font-family: monospace;

    font-size: 0.7rem;
}

.skill-icon {
    width: 58px;
    height: 58px;

    display: grid;
    place-items: center;

    margin-bottom: 25px;

    border: 1px solid rgba(
        125,
        211,
        252,
        0.18
    );

    border-radius: 16px;

    background: var(--accent-soft);

    color: var(--accent);

    font-size: 1.4rem;
}

.skill-card h3 {
    font-family: var(--font-display);

    font-size: 1.5rem;

    letter-spacing: -0.04em;
}

.skill-card p {
    margin-top: 10px;

    color: var(--text-soft);

    font-size: 0.86rem;
}


/* =========================================
   EXPERIMENTS
========================================= */

.experiment-grid {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 20px;
}

.experiment-card {
    min-height: 330px;

    padding: 30px;

    display: flex;
    flex-direction: column;

    border: 1px solid var(--border);

    border-radius: var(--radius-lg);

    background: var(--surface);

    transition: var(--transition);
}

.experiment-card:hover {
    transform: translateY(-8px);

    border-color: rgba(
        125,
        211,
        252,
        0.25
    );
}

.experiment-top {
    display: flex;
    justify-content: space-between;

    color: var(--text-muted);

    font-family: monospace;

    font-size: 0.63rem;

    letter-spacing: 0.08em;
}

.experiment-card h3 {
    margin-top: auto;

    font-family: var(--font-display);

    font-size: 1.7rem;

    letter-spacing: -0.045em;
}

.experiment-card p {
    margin-top: 12px;

    color: var(--text-soft);

    font-size: 0.85rem;
}

.future-card {
    border-style: dashed;
}


/* =========================================
   SCHOLARSHIP
========================================= */

.scholarship-section {
    background:
        linear-gradient(
            135deg,
            rgba(125, 211, 252, 0.035),
            rgba(167, 139, 250, 0.035)
        );
}

.scholarship-container {
    display: grid;

    grid-template-columns:
        1.3fr
        0.7fr;

    gap: 80px;

    align-items: center;
}

.scholarship-content h2 {
    max-width: 700px;

    font-family: var(--font-display);

    font-size: clamp(
        2.6rem,
        5vw,
        4.5rem
    );

    line-height: 1;

    letter-spacing: -0.055em;
}

.scholarship-content h2 span {
    color: var(--accent);
}

.scholarship-content > p {
    max-width: 700px;

    margin-top: 24px;

    color: var(--text-soft);
}

.scholarship-points {
    display: grid;

    grid-template-columns:
        1fr 1fr;

    gap: 15px;

    margin-top: 38px;
}

.scholarship-points div {
    display: flex;
    align-items: center;

    gap: 14px;

    padding: 14px;

    border: 1px solid var(--border);

    border-radius: 13px;

    background: rgba(
        255,
        255,
        255,
        0.015
    );
}

.scholarship-points strong {
    color: var(--accent);

    font-family: monospace;

    font-size: 0.72rem;
}

.scholarship-points span {
    color: var(--text-soft);

    font-size: 0.76rem;
}

.mit-card {
    position: relative;

    min-height: 390px;

    display: flex;

    flex-direction: column;

    justify-content: center;

    align-items: center;

    text-align: center;

    padding: 35px;

    border: 1px solid rgba(
        125,
        211,
        252,
        0.18
    );

    border-radius: 30px;

    background:
        radial-gradient(
            circle at center,
            rgba(
                125,
                211,
                252,
                0.1
            ),
            transparent 58%
        ),
        var(--surface);

    box-shadow:
        0 30px 80px
        rgba(0, 0, 0, 0.2);
}

.mit-small {
    color: var(--text-muted);

    font-size: 0.62rem;
    font-weight: 700;

    letter-spacing: 0.2em;
}

.mit-logo {
    margin: 18px 0;

    font-family: var(--font-display);

    font-size: 5rem;

    line-height: 1;

    font-weight: 800;

    letter-spacing: -0.1em;

    background: linear-gradient(
        135deg,
        var(--text),
        var(--accent)
    );

    -webkit-background-clip: text;
    background-clip: text;

    color: transparent;
}

.mit-card h3 {
    max-width: 250px;

    font-family: var(--font-display);

    font-size: 1.25rem;

    line-height: 1.2;
}

.mit-card p {
    margin-top: 10px;

    color: var(--text-muted);

    font-size: 0.75rem;
}

.mit-line {
    width: 50px;
    height: 1px;

    margin: 25px 0 18px;

    background: var(--accent);

    opacity: 0.5;
}

.mit-dream {
    color: var(--text-soft);

    font-family: var(--font-display);

    font-size: 0.8rem;

    font-style: italic;
}


/* =========================================
   VISION
========================================= */

.vision-grid {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 20px;
}

.vision-statement {
    position: relative;

    min-height: 350px;

    padding: 35px;

    border: 1px solid var(--border);

    border-radius: var(--radius-lg);

    background: var(--surface);

    transition: var(--transition);
}

.vision-statement:hover {
    transform: translateY(-8px);

    border-color: rgba(
        125,
        211,
        252,
        0.25
    );
}

.vision-number {
    color: var(--accent);

    font-family: monospace;

    font-size: 0.72rem;
}

.vision-statement h3 {
    margin-top: 100px;

    font-family: var(--font-display);

    font-size: 1.7rem;

    letter-spacing: -0.045em;
}

.vision-statement p {
    margin-top: 12px;

    color: var(--text-soft);

    font-size: 0.85rem;
}

.vision-statement.highlight {
    background:
        radial-gradient(
            circle at top right,
            rgba(
                125,
                211,
                252,
                0.12
            ),
            transparent 55%
        ),
        var(--surface);
}


/* =========================================
   CONTACT
========================================= */

.contact-section {
    padding-top: 170px;
    padding-bottom: 170px;

    text-align: center;
}

.contact-container {
    display: flex;
    justify-content: center;
}

.contact-content {
    max-width: 850px;
}

.contact-content .section-label {
    margin-bottom: 25px;
}

.contact-content h2 {
    font-family: var(--font-display);

    font-size: clamp(
        3.2rem,
        8vw,
        6.5rem
    );

    line-height: 0.95;

    letter-spacing: -0.07em;
}

.contact-content h2 span {
    display: block;

    color: var(--accent);
}

.contact-content p {
    max-width: 580px;

    margin: 30px auto 0;

    color: var(--text-soft);
}

.email-button {
    display: inline-flex;
    align-items: center;

    gap: 25px;

    margin-top: 38px;

    padding: 17px 22px;

    border: 1px solid var(--border);

    border-radius: 100px;

    background: var(--surface);

    color: var(--text);

    font-size: 0.85rem;
    font-weight: 600;

    transition: var(--transition);
}

.email-button:hover {
    border-color: rgba(
        125,
        211,
        252,
        0.4
    );

    background: var(--accent-soft);

    transform: translateY(-4px);
}

.email-arrow {
    color: var(--accent);

    font-size: 1.2rem;
}


/* =========================================
   FOOTER
========================================= */

.footer {
    padding: 45px 0 25px;

    border-top: 1px solid var(--border);

    background: rgba(
        4,
        11,
        20,
        0.4
    );
}

.footer-container {
    display: grid;

    grid-template-columns:
        1fr
        auto;

    gap: 35px;
}

.footer-brand p {
    margin-top: 8px;

    color: var(--text-muted);

    font-size: 0.75rem;
}

.footer-links {
    display: flex;
    align-items: center;

    gap: 25px;
}

.footer-links a {
    color: var(--text-muted);

    font-size: 0.72rem;

    transition: var(--transition);
}

.footer-links a:hover {
    color: var(--accent);
}

.footer-bottom {
    grid-column: 1 / -1;

    display: flex;
    justify-content: space-between;

    padding-top: 22px;

    border-top: 1px solid var(--border);

    color: var(--text-muted);

    font-size: 0.65rem;
}


/* =========================================
   ANIMATIONS
========================================= */

@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(25px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes floatCard {
    0%,
    100% {
        transform:
            perspective(1000px)
            rotateY(-5deg)
            rotateX(3deg)
            translateY(0);
    }

    50% {
        transform:
            perspective(1000px)
            rotateY(-3deg)
            rotateX(2deg)
            translateY(-12px);
    }
}

@keyframes pulse {
    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.45;
    }
}

@keyframes blink {
    0%,
    45% {
        opacity: 1;
    }

    46%,
    100% {
        opacity: 0;
    }
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}


/* =========================================
   RESPONSIVE — TABLET
========================================= */

@media (max-width: 1000px) {

    .nav-links {
        display: none;
    }

    .hero-container {
        grid-template-columns: 1fr;

        gap: 80px;
    }

    .hero-content {
        text-align: center;
    }

    .hero-description {
        margin-inline: auto;
    }

    .hero-actions {
        justify-content: center;
    }

    .hero-meta {
        justify-content: center;
    }

    .hero-visual {
        min-height: 450px;
    }

    .about-grid,
    .scholarship-container {
        grid-template-columns: 1fr;
    }

    .achievement-grid {
        grid-template-columns: 1fr 1fr;
    }

    .achievement-card.featured {
        grid-column: 1 / -1;
    }

    .skills-grid {
        grid-template-columns: 1fr 1fr;
    }

    .skill-card.large {
        grid-row: auto;

        min-height: 350px;
    }

    .experiment-grid,
    .vision-grid {
        grid-template-columns: 1fr 1fr;
    }

    .scholarship-container {
        gap: 55px;
    }
}


/* =========================================
   RESPONSIVE — MOBILE
========================================= */

@media (max-width: 650px) {

    .container {
        width: min(
            calc(100% - 28px),
            var(--max-width)
        );
    }

    .section {
        padding: 90px 0;
    }

    .nav-container {
        min-height: 70px;
    }

    .nav-button {
        display: none;
    }

    .hero {
        padding-top: 120px;
    }

    .hero h1 {
        font-size: clamp(
            3.6rem,
            17vw,
            5.5rem
        );
    }

    .hero h2 {
        font-size: 1.3rem;
    }

    .hero-meta {
        gap: 13px;
    }

    .meta-divider {
        height: 30px;
    }

    .meta-item span {
        font-size: 0.55rem;
    }

    .hero-visual {
        min-height: 350px;
    }

    .ai-card {
        transform: none;

        width: 100%;
    }

    .ai-card:hover {
        transform: translateY(-5px);
    }

    .ai-card-body {
        padding: 25px 15px;
    }

    .code-line {
        gap: 5px;

        font-size: 0.65rem;
    }

    .orbit-one,
    .orbit-two {
        display: none;
    }

    .scroll-indicator {
        display: none;
    }

    .about-main-card,
    .about-side-card {
        padding: 28px;
    }

    .timeline {
        margin-left: 15px;

        padding-left: 30px;
    }

    .timeline-marker {
        left: -56px;

        width: 42px;
        height: 42px;
    }

    .timeline-content {
        padding: 25px;
    }

    .achievement-grid,
    .skills-grid,
    .experiment-grid,
    .vision-grid {
        grid-template-columns: 1fr;
    }

    .achievement-card.featured {
        grid-column: auto;
    }

    .achievement-card {
        min-height: 250px;
    }

    .skill-card,
    .skill-card.large {
        min-height: 280px;
    }

    .scholarship-points {
        grid-template-columns: 1fr;
    }

    .mit-card {
        min-height: 330px;
    }

    .mit-logo {
        font-size: 4rem;
    }

    .vision-statement {
        min-height: 300px;
    }

    .vision-statement h3 {
        margin-top: 70px;
    }

    .email-button {
        max-width: 100%;

        font-size: 0.7rem;

        gap: 12px;
    }

    .footer-container {
        grid-template-columns: 1fr;
    }

    .footer-links {
        flex-wrap: wrap;

        gap: 15px;
    }

    .footer-bottom {
        flex-direction: column;

        gap: 8px;
    }
}


/* =========================================
   ACCESSIBILITY
========================================= */

@media (prefers-reduced-motion: reduce) {

    *,
    *::before,
    *::after {
        scroll-behavior: auto !important;

        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;

        transition-duration: 0.01ms !important;
    }
}
