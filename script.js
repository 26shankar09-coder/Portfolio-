/* =====================================================
   AYUSHI SHANKAR — COSMIC PORTFOLIO CORE ENGINE
   Deep Space Canvas • Stardust Comet Cursor • Kinetic Infinity
   100% Vanilla JavaScript • Zero External Dependencies • 60 FPS
===================================================== */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

/* =====================================================
   10 FASCINATING COSMIC UNIVERSES
===================================================== */

const universes = [
    {
        id: "orion",
        name: "Orion Nebula",
        desc: "Deep Space // Cyan × Electric Orchid",
        bg: "#070810",
        surface: "#0e101a",
        surfaceHover: "#141724",
        surfaceGlass: "rgba(14, 16, 26, 0.72)",
        border: "rgba(255, 255, 255, 0.09)",
        borderHover: "rgba(0, 242, 255, 0.35)",
        borderAccent: "rgba(0, 242, 255, 0.45)",
        text: "#f4f5fa",
        textMuted: "#8e94a8",
        accent: "#00f2ff",
        accent2: "#ff2a8d",
        glow: "rgba(0, 242, 255, 0.28)",
        glow2: "rgba(255, 42, 141, 0.22)"
    },
    {
        id: "supernova",
        name: "Supernova Flare",
        desc: "Solar Burst // Blazing Amber × Gold",
        bg: "#0e0906",
        surface: "#18110b",
        surfaceHover: "#22180f",
        surfaceGlass: "rgba(24, 17, 11, 0.72)",
        border: "rgba(255, 255, 255, 0.09)",
        borderHover: "rgba(245, 158, 11, 0.35)",
        borderAccent: "rgba(245, 158, 11, 0.45)",
        text: "#fdf8f4",
        textMuted: "#a39587",
        accent: "#f59e0b",
        accent2: "#ff5e1a",
        glow: "rgba(245, 158, 11, 0.28)",
        glow2: "rgba(255, 94, 26, 0.22)"
    },
    {
        id: "aurora",
        name: "Boreal Aurora",
        desc: "Arctic Deep // Glacial Mint × Ice Cyan",
        bg: "#040d12",
        surface: "#081720",
        surfaceHover: "#0e2230",
        surfaceGlass: "rgba(8, 23, 32, 0.72)",
        text: "#ecfcff",
        textMuted: "#7ca4b5",
        accent: "#25f4c0",
        accent2: "#00b8ff",
        glow: "rgba(37, 244, 192, 0.3)",
        glow2: "rgba(0, 184, 255, 0.22)"
    },
    {
        id: "singularity",
        name: "Event Horizon",
        desc: "Accretion Disk // Pure Void × Relativistic Gold",
        bg: "#060608",
        surface: "#101014",
        surfaceHover: "#17171d",
        surfaceGlass: "rgba(16, 16, 20, 0.75)",
        border: "rgba(255, 255, 255, 0.1)",
        borderHover: "rgba(234, 179, 8, 0.35)",
        borderAccent: "rgba(234, 179, 8, 0.45)",
        text: "#ffffff",
        textMuted: "#8f919a",
        accent: "#eab308",
        accent2: "#38bdf8",
        glow: "rgba(234, 179, 8, 0.25)",
        glow2: "rgba(56, 189, 248, 0.22)"
    },
    {
        id: "tokyo",
        name: "Tokyo Cyberpunk",
        desc: "High Neon // Laser Cyan × Hot Magenta",
        bg: "#07080e",
        surface: "#0f101c",
        surfaceHover: "#171828",
        surfaceGlass: "rgba(15, 16, 28, 0.72)",
        border: "rgba(255, 255, 255, 0.09)",
        borderHover: "rgba(6, 182, 212, 0.35)",
        borderAccent: "rgba(6, 182, 212, 0.45)",
        text: "#f3f4fa",
        textMuted: "#8b90a8",
        accent: "#06b6d4",
        accent2: "#ec4899",
        glow: "rgba(6, 182, 212, 0.3)",
        glow2: "rgba(236, 72, 153, 0.25)"
    },
    {
        id: "andromeda",
        name: "Andromeda Royal",
        desc: "Deep Violet // Ultraviolet × Starlight",
        bg: "#090714",
        surface: "#120e24",
        surfaceHover: "#1b1535",
        surfaceGlass: "rgba(18, 14, 36, 0.72)",
        text: "#f7f4ff",
        textMuted: "#9b92b8",
        accent: "#8b5cf6",
        accent2: "#c084fc",
        glow: "rgba(139, 92, 246, 0.3)",
        glow2: "rgba(192, 132, 252, 0.22)"
    },
    {
        id: "blood-moon",
        name: "Crimson Eclipse",
        desc: "Eclipse Noir // Blood Ruby × Rose Quartz",
        bg: "#0c0608",
        surface: "#180a0f",
        surfaceHover: "#230e16",
        surfaceGlass: "rgba(24, 10, 15, 0.72)",
        text: "#fff1f5",
        textMuted: "#b38997",
        accent: "#ef4444",
        accent2: "#f43f5e",
        glow: "rgba(239, 68, 68, 0.3)",
        glow2: "rgba(244, 63, 94, 0.22)"
    },
    {
        id: "abyss",
        name: "Bioluminescent Sea",
        desc: "Deep Ocean // Electric Aqua × Sea Sapphire",
        bg: "#030c14",
        surface: "#071724",
        surfaceHover: "#0c2134",
        surfaceGlass: "rgba(7, 23, 36, 0.72)",
        text: "#ecfcff",
        textMuted: "#79a3b6",
        accent: "#06b6d4",
        accent2: "#3b82f6",
        glow: "rgba(6, 182, 212, 0.3)",
        glow2: "rgba(59, 130, 246, 0.22)"
    },
    {
        id: "stardust-gold",
        name: "Liquid Gold Dust",
        desc: "Luxury Cosmos // 24k Gold × Amber",
        bg: "#0c0a07",
        surface: "#18130d",
        surfaceHover: "#241d14",
        surfaceGlass: "rgba(24, 19, 13, 0.72)",
        text: "#fdfaf2",
        textMuted: "#a99c8a",
        accent: "#d4af37",
        accent2: "#fbbf24",
        glow: "rgba(212, 175, 55, 0.3)",
        glow2: "rgba(251, 191, 36, 0.22)"
    },
    {
        id: "exoplanet",
        name: "Emerald Exoplanet",
        desc: "Alien Forest // Phosphor Green × Cyber Jade",
        bg: "#040d08",
        surface: "#09170f",
        surfaceHover: "#0e2217",
        surfaceGlass: "rgba(9, 23, 15, 0.72)",
        text: "#eafff3",
        textMuted: "#77a688",
        accent: "#10b981",
        accent2: "#34d399",
        glow: "rgba(16, 185, 129, 0.3)",
        glow2: "rgba(52, 211, 153, 0.22)"
    }
];

let currentUniverse = universes[0];
let currentUniverseIndex = 0;

function applyUniverse(uni, playSound = false) {
    currentUniverse = uni;
    currentUniverseIndex = universes.findIndex(u => u.id === uni.id);
    const root = document.documentElement;

    root.style.setProperty("--bg", uni.bg);
    root.style.setProperty("--surface", uni.surface);
    root.style.setProperty("--surface-hover", uni.surfaceHover);
    root.style.setProperty("--surface-glass", uni.surfaceGlass);
    root.style.setProperty("--border", uni.border);
    root.style.setProperty("--border-hover", uni.borderHover);
    root.style.setProperty("--border-accent", uni.borderAccent);
    root.style.setProperty("--text", uni.text);
    root.style.setProperty("--text-muted", uni.textMuted);
    root.style.setProperty("--accent", uni.accent);
    root.style.setProperty("--accent2", uni.accent2);
    root.style.setProperty("--glow", uni.glow);
    root.style.setProperty("--glow2", uni.glow2);

    const nameDisplay = $("#universeNameDisplay");
    if (nameDisplay) nameDisplay.textContent = uni.name;

    localStorage.setItem("ayushi-cosmic-universe", uni.id);

    $$(".universe-card").forEach(el => {
        el.classList.toggle("active", el.dataset.id === uni.id);
    });

    if (playSound) {
        soundEngine.playCosmicChime();
    }
}

function cycleUniverse() {
    const nextIdx = (currentUniverseIndex + 1) % universes.length;
    applyUniverse(universes[nextIdx], true);
}

// Build Universe Drawer Grid
const universeGrid = $("#universeGrid");
if (universeGrid) {
    universes.forEach(uni => {
        const card = document.createElement("button");
        card.className = "universe-card";
        card.dataset.id = uni.id;
        card.innerHTML = `
            <div class="universe-dot" style="background: linear-gradient(135deg, ${uni.accent}, ${uni.accent2});"></div>
            <b>${uni.name}</b>
            <small>${uni.desc}</small>
        `;
        card.addEventListener("click", () => applyUniverse(uni, true));
        universeGrid.appendChild(card);
    });
}

// Load Saved Universe
const savedUniverseId = localStorage.getItem("ayushi-cosmic-universe");
const initialUniverse = universes.find(u => u.id === savedUniverseId) || universes[0];
applyUniverse(initialUniverse);

// Universe Drawer Toggle
const themePanelBtn = $("#themePanelBtn");
const universeDrawer = $("#universeDrawer");
const closeDrawerBtn = $("#closeDrawerBtn");
const quickUniverseCycleBtn = $("#quickUniverseCycleBtn");

if (themePanelBtn && universeDrawer) {
    themePanelBtn.addEventListener("click", () => {
        universeDrawer.classList.toggle("open");
        soundEngine.playChirp(680, 0.04);
    });
}
if (closeDrawerBtn && universeDrawer) {
    closeDrawerBtn.addEventListener("click", () => {
        universeDrawer.classList.remove("open");
    });
}
if (quickUniverseCycleBtn) {
    quickUniverseCycleBtn.addEventListener("click", cycleUniverse);
}
document.addEventListener("click", (e) => {
    if (universeDrawer && themePanelBtn && !universeDrawer.contains(e.target) && !themePanelBtn.contains(e.target)) {
        universeDrawer.classList.remove("open");
    }
});

// Keyboard Hotkey 'T' to cycle universes
window.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    if (e.key.toLowerCase() === "t") {
        cycleUniverse();
    }
});


/* =====================================================
   INTERACTIVE SYNTHESIZED SOUND FX (Web Audio API)
===================================================== */

class SoundFX {
    constructor() {
        this.ctx = null;
        this.enabled = false;
    }

    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                this.ctx = new AudioContext();
            }
        }
        if (this.ctx && this.ctx.state === "suspended") {
            this.ctx.resume();
        }
    }

    toggle() {
        this.init();
        this.enabled = !this.enabled;
        if (this.enabled) {
            this.playChirp(840, 0.08);
        }
        return this.enabled;
    }

    playChirp(freq = 640, duration = 0.05) {
        if (!this.enabled || !this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now);
        osc.frequency.exponentialRampToValueAtTime(freq * 1.4, now + duration);

        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + duration);
    }

    playCosmicChime() {
        if (!this.enabled || !this.ctx) return;
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, idx) => {
            const now = this.ctx.currentTime + idx * 0.06;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = "sine";
            osc.frequency.setValueAtTime(freq, now);

            gain.gain.setValueAtTime(0.05, now);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.35);
        });
    }
}

const soundEngine = new SoundFX();
const soundToggleBtn = $("#soundToggleBtn");
const soundIcon = $("#soundIcon");

if (soundToggleBtn) {
    soundToggleBtn.addEventListener("click", () => {
        const isActive = soundEngine.toggle();
        soundIcon.textContent = isActive ? "🔊" : "🔈";
        soundToggleBtn.title = isActive ? "Sound FX: ON" : "Sound FX: OFF";
    });
}


/* =====================================================
   MAGNETIC DUAL CURSOR & STARDUST COMET TRAIL
===================================================== */

const cursorDot = $("#cursorDot");
const cursorRing = $("#cursorRing");
const cursorAmbientGlow = $("#cursorAmbientGlow");
const cursorCanvas = $("#cursorCanvas");
const cctx = cursorCanvas ? cursorCanvas.getContext("2d") : null;

let mouseX = -100;
let mouseY = -100;
let ringX = -100;
let ringY = -100;
let prevMouseX = -100;
let prevMouseY = -100;
let cometSparks = [];

function resizeCursorCanvas() {
    if (!cursorCanvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    cursorCanvas.width = innerWidth * dpr;
    cursorCanvas.height = innerHeight * dpr;
    cursorCanvas.style.width = innerWidth + "px";
    cursorCanvas.style.height = innerHeight + "px";
    cctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
resizeCursorCanvas();
window.addEventListener("resize", resizeCursorCanvas);

window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (cursorDot) {
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
    }

    if (cursorAmbientGlow) {
        cursorAmbientGlow.style.left = `${mouseX}px`;
        cursorAmbientGlow.style.top = `${mouseY}px`;
    }

    const vx = mouseX - prevMouseX;
    const vy = mouseY - prevMouseY;
    const speed = Math.hypot(vx, vy);

    if (speed > 1.2 && cctx) {
        const count = Math.min(5, Math.floor(speed / 4) + 1);
        for (let i = 0; i < count; i++) {
            cometSparks.push({
                x: mouseX + (Math.random() - 0.5) * 6,
                y: mouseY + (Math.random() - 0.5) * 6,
                vx: -vx * 0.12 + (Math.random() - 0.5) * 1.5,
                vy: -vy * 0.12 + (Math.random() - 0.5) * 1.5,
                size: Math.random() * 2.8 + 1,
                life: 1.0,
                decay: Math.random() * 0.035 + 0.02,
                color: Math.random() > 0.4 ? currentUniverse.accent : currentUniverse.accent2
            });
        }
    }

    prevMouseX = mouseX;
    prevMouseY = mouseY;
});

// Click shockwave particle explosion
window.addEventListener("click", (e) => {
    soundEngine.playChirp(720, 0.04);
    if (!cctx) return;

    for (let i = 0; i < 18; i++) {
        const angle = (Math.PI * 2 / 18) * i + Math.random() * 0.2;
        const blastSpeed = Math.random() * 4 + 2;
        cometSparks.push({
            x: e.clientX,
            y: e.clientY,
            vx: Math.cos(angle) * blastSpeed,
            vy: Math.sin(angle) * blastSpeed,
            size: Math.random() * 3 + 1.2,
            life: 1.0,
            decay: Math.random() * 0.03 + 0.015,
            color: Math.random() > 0.5 ? currentUniverse.accent : "#ffffff"
        });
    }
});

function animateCursorSystem() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;

    if (cursorRing) {
        cursorRing.style.left = `${ringX}px`;
        cursorRing.style.top = `${ringY}px`;
    }

    if (cctx && cursorCanvas) {
        cctx.clearRect(0, 0, innerWidth, innerHeight);

        for (let i = cometSparks.length - 1; i >= 0; i--) {
            const p = cometSparks[i];
            p.x += p.vx;
            p.y += p.vy;
            p.life -= p.decay;

            if (p.life <= 0) {
                cometSparks.splice(i, 1);
                continue;
            }

            cctx.save();
            cctx.beginPath();
            cctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
            cctx.fillStyle = p.color;
            cctx.globalAlpha = p.life * 0.85;
            cctx.shadowColor = p.color;
            cctx.shadowBlur = 8;
            cctx.fill();
            cctx.restore();
        }
    }

    requestAnimationFrame(animateCursorSystem);
}
requestAnimationFrame(animateCursorSystem);

// Magnetic Hover on Interactive Elements
$$(".magnetic, a, button, .cosmic-card").forEach((el) => {
    el.addEventListener("mouseenter", () => {
        if (cursorRing) cursorRing.classList.add("active");
    });

    el.addEventListener("mousemove", (e) => {
        if (!el.classList.contains("magnetic")) return;
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) * 0.2;
        const deltaY = (e.clientY - centerY) * 0.2;
        el.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    });

    el.addEventListener("mouseleave", () => {
        if (cursorRing) cursorRing.classList.remove("active");
        if (el.classList.contains("magnetic")) {
            el.style.transform = "";
        }
    });
});


/* =====================================================
   DEEP SPACE CELESTIAL BACKGROUND CANVAS
   Multi-layered twinkling stars, drifting nebulae & shooting meteors
===================================================== */

const spaceCanvas = $("#spaceCanvas");
const sctx = spaceCanvas ? spaceCanvas.getContext("2d") : null;

let stars = [];
let meteors = [];
let nebulae = [];
let parallaxX = 0;
let parallaxY = 0;
let targetParallaxX = 0;
let targetParallaxY = 0;

function resizeSpaceCanvas() {
    if (!spaceCanvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    spaceCanvas.width = innerWidth * dpr;
    spaceCanvas.height = innerHeight * dpr;
    spaceCanvas.style.width = innerWidth + "px";
    spaceCanvas.style.height = innerHeight + "px";
    sctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function initSpaceElements() {
    const starCount = Math.min(220, Math.floor(innerWidth / 6));
    stars = Array.from({ length: starCount }, () => {
        const layer = Math.random() < 0.65 ? 0 : (Math.random() < 0.75 ? 1 : 2);
        return {
            x: Math.random() * innerWidth,
            y: Math.random() * innerHeight,
            layer: layer,
            baseRadius: layer === 0 ? Math.random() * 0.7 + 0.4 : (layer === 1 ? Math.random() * 1.2 + 0.8 : Math.random() * 1.6 + 1.4),
            vx: (Math.random() - 0.5) * (layer === 0 ? 0.08 : 0.16),
            vy: (Math.random() - 0.5) * (layer === 0 ? 0.08 : 0.16),
            twinkleSpeed: Math.random() * 0.04 + 0.015,
            twinklePhase: Math.random() * Math.PI * 2,
            hasSpikes: layer === 2 && Math.random() < 0.6
        };
    });

    nebulae = [
        { x: innerWidth * 0.2, y: innerHeight * 0.25, r: 280, vx: 0.12, vy: 0.06, phase: 0 },
        { x: innerWidth * 0.8, y: innerHeight * 0.6, r: 340, vx: -0.1, vy: 0.08, phase: 2 },
        { x: innerWidth * 0.45, y: innerHeight * 0.85, r: 260, vx: 0.08, vy: -0.1, phase: 4 }
    ];
}

let lastMeteorSpawn = 0;
function maybeSpawnMeteor(now) {
    if (now - lastMeteorSpawn > (Math.random() * 3000 + 2400)) {
        lastMeteorSpawn = now;
        const startX = Math.random() * (innerWidth * 0.85) + (innerWidth * 0.08);
        const startY = Math.random() * (innerHeight * 0.35);
        const length = Math.random() * 150 + 90;
        const angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.35;
        const speed = Math.random() * 14 + 11;

        meteors.push({
            x: startX,
            y: startY,
            dx: Math.cos(angle) * speed,
            dy: Math.sin(angle) * speed,
            length: length,
            life: 1.0,
            decay: Math.random() * 0.018 + 0.02,
            size: Math.random() * 1.8 + 1.2
        });
    }
}

window.addEventListener("mousemove", (e) => {
    targetParallaxX = (e.clientX - innerWidth / 2) * 0.035;
    targetParallaxY = (e.clientY - innerHeight / 2) * 0.035;
});

function drawSpace(time) {
    if (!sctx) return;
    sctx.clearRect(0, 0, innerWidth, innerHeight);

    parallaxX += (targetParallaxX - parallaxX) * 0.05;
    parallaxY += (targetParallaxY - parallaxY) * 0.05;

    const accent = currentUniverse.accent;
    const accent2 = currentUniverse.accent2;
    const glowColor = currentUniverse.glow;

    // A. Drifting Nebulae
    nebulae.forEach((neb) => {
        neb.phase += 0.008;
        neb.x += neb.vx;
        neb.y += neb.vy;
        if (neb.x < -100) neb.x = innerWidth + 100;
        if (neb.x > innerWidth + 100) neb.x = -100;
        if (neb.y < -100) neb.y = innerHeight + 100;
        if (neb.y > innerHeight + 100) neb.y = -100;

        const currentR = neb.r + Math.sin(neb.phase) * 35;
        const grad = sctx.createRadialGradient(
            neb.x + parallaxX * 0.5,
            neb.y + parallaxY * 0.5,
            0,
            neb.x + parallaxX * 0.5,
            neb.y + parallaxY * 0.5,
            currentR
        );
        grad.addColorStop(0, glowColor);
        grad.addColorStop(1, "rgba(0,0,0,0)");

        sctx.save();
        sctx.fillStyle = grad;
        sctx.beginPath();
        sctx.arc(neb.x + parallaxX * 0.5, neb.y + parallaxY * 0.5, currentR, 0, Math.PI * 2);
        sctx.fill();
        sctx.restore();
    });

    // B. Interactive Constellation Lines near mouse
    for (let i = 0; i < stars.length; i++) {
        const s1 = stars[i];
        const pFactor1 = s1.layer === 0 ? 0.3 : (s1.layer === 1 ? 0.7 : 1.2);
        const s1x = s1.x + parallaxX * pFactor1;
        const s1y = s1.y + parallaxY * pFactor1;

        const distMouse = Math.hypot(mouseX - s1x, mouseY - s1y);
        if (distMouse < 110) {
            const alpha = (1 - distMouse / 110) * 0.45;
            sctx.beginPath();
            sctx.moveTo(s1x, s1y);
            sctx.lineTo(mouseX, mouseY);
            sctx.strokeStyle = accent;
            sctx.lineWidth = 0.85;
            sctx.globalAlpha = alpha;
            sctx.stroke();

            for (let j = i + 1; j < stars.length; j++) {
                const s2 = stars[j];
                const pFactor2 = s2.layer === 0 ? 0.3 : (s2.layer === 1 ? 0.7 : 1.2);
                const s2x = s2.x + parallaxX * pFactor2;
                const s2y = s2.y + parallaxY * pFactor2;
                const distStars = Math.hypot(s1x - s2x, s1y - s2y);
                if (distStars < 75) {
                    sctx.beginPath();
                    sctx.moveTo(s1x, s1y);
                    sctx.lineTo(s2x, s2y);
                    sctx.strokeStyle = accent2;
                    sctx.lineWidth = 0.6;
                    sctx.globalAlpha = (1 - distStars / 75) * 0.28;
                    sctx.stroke();
                }
            }
        }
    }
    sctx.globalAlpha = 1;

    // C. Stars Rendering
    stars.forEach((star) => {
        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0) star.x = innerWidth;
        if (star.x > innerWidth) star.x = 0;
        if (star.y < 0) star.y = innerHeight;
        if (star.y > innerHeight) star.y = 0;

        star.twinklePhase += star.twinkleSpeed;
        const twinkle = (Math.sin(star.twinklePhase) + 1) / 2;

        const pFactor = star.layer === 0 ? 0.3 : (star.layer === 1 ? 0.7 : 1.2);
        const posX = star.x + parallaxX * pFactor;
        const posY = star.y + parallaxY * pFactor;

        let alpha = star.layer === 0
            ? (0.2 + twinkle * 0.35)
            : (star.layer === 1 ? (0.35 + twinkle * 0.5) : (0.6 + twinkle * 0.4));

        let color = "#ffffff";
        if (star.layer === 1) {
            color = star.twinklePhase % 2 > 1 ? accent : "#ffffff";
        } else if (star.layer === 2) {
            color = accent2;
        }

        sctx.save();
        sctx.beginPath();
        sctx.arc(posX, posY, star.baseRadius * (0.8 + twinkle * 0.3), 0, Math.PI * 2);
        sctx.fillStyle = color;
        sctx.globalAlpha = Math.min(1, alpha);
        sctx.shadowColor = color;
        sctx.shadowBlur = star.layer === 2 ? 8 : (star.layer === 1 ? 4 : 0);
        sctx.fill();

        if (star.hasSpikes && twinkle > 0.55) {
            const spikeLen = star.baseRadius * 4.2 * twinkle;
            sctx.strokeStyle = color;
            sctx.lineWidth = 0.8;
            sctx.globalAlpha = (twinkle - 0.55) * 1.5;
            sctx.beginPath();
            sctx.moveTo(posX - spikeLen, posY);
            sctx.lineTo(posX + spikeLen, posY);
            sctx.moveTo(posX, posY - spikeLen);
            sctx.lineTo(posX, posY + spikeLen);
            sctx.stroke();
        }
        sctx.restore();
    });

    // D. Meteors / Shooting Stars
    maybeSpawnMeteor(time);

    for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += m.dx;
        m.y += m.dy;
        m.life -= m.decay;

        if (m.life <= 0 || m.x > innerWidth + 200 || m.y > innerHeight + 200) {
            meteors.splice(i, 1);
            continue;
        }

        const tailX = m.x - (m.dx / Math.hypot(m.dx, m.dy)) * m.length;
        const tailY = m.y - (m.dy / Math.hypot(m.dx, m.dy)) * m.length;

        const grad = sctx.createLinearGradient(tailX, tailY, m.x, m.y);
        grad.addColorStop(0, "rgba(0,0,0,0)");
        grad.addColorStop(0.65, accent);
        grad.addColorStop(1, "#ffffff");

        sctx.save();
        sctx.strokeStyle = grad;
        sctx.lineWidth = m.size;
        sctx.lineCap = "round";
        sctx.globalAlpha = m.life;
        sctx.shadowColor = accent2;
        sctx.shadowBlur = 12;

        sctx.beginPath();
        sctx.moveTo(tailX, tailY);
        sctx.lineTo(m.x, m.y);
        sctx.stroke();

        sctx.beginPath();
        sctx.arc(m.x, m.y, m.size * 1.2, 0, Math.PI * 2);
        sctx.fillStyle = "#ffffff";
        sctx.fill();
        sctx.restore();
    }

    requestAnimationFrame(drawSpace);
}

resizeSpaceCanvas();
initSpaceElements();
requestAnimationFrame(drawSpace);

window.addEventListener("resize", () => {
    resizeSpaceCanvas();
    initSpaceElements();
});


/* =====================================================
   TYPING HERO ENGINE
===================================================== */

const phrases = [
    "network threat analyzers.",
    "cryptographic algorithms.",
    "evocative poetry & verses.",
    "national debate discourses.",
    "secure full-stack architectures."
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = $("#typedPhrases");

function typeLoop() {
    if (!typedEl) return;
    const currentWord = phrases[phraseIndex];

    typedEl.textContent = currentWord.slice(0, charIndex);

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeLoop, 75);
    } else if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeLoop, 1400);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeLoop, 40);
    } else {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeLoop, 260);
    }
}
typeLoop();


/* =====================================================
   KINETIC MOVING INFINITY SIGN ENGINE
===================================================== */

const infinityLaserBeam = $("#infinityLaserBeam");
const infinityPhotonSpark = $("#infinityPhotonSpark");
const kineticInfinityBox = $("#kineticInfinityBox");

if (infinityLaserBeam && infinityPhotonSpark && kineticInfinityBox) {
    let pathLength = 0;
    try {
        pathLength = infinityLaserBeam.getTotalLength();
    } catch (e) {
        pathLength = 240;
    }

    let progress = 0;
    let baseSpeed = 0.0035;
    let speed = baseSpeed;

    kineticInfinityBox.addEventListener("mouseenter", () => {
        speed = baseSpeed * 2.8;
        soundEngine.playChirp(840, 0.05);
    });

    kineticInfinityBox.addEventListener("mouseleave", () => {
        speed = baseSpeed;
    });

    // Cosmic sparkle burst on click
    kineticInfinityBox.addEventListener("click", () => {
        soundEngine.playCosmicChime();
        for (let i = 0; i < 12; i++) {
            const spark = document.createElement("div");
            spark.style.cssText = `
                position: absolute;
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background: ${currentUniverse.accent};
                box-shadow: 0 0 10px ${currentUniverse.accent2};
                pointer-events: none;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                z-index: 10;
            `;
            kineticInfinityBox.appendChild(spark);
            const angle = (Math.PI * 2 / 12) * i;
            const dist = Math.random() * 32 + 25;

            setTimeout(() => {
                spark.style.transform = `translate(${Math.cos(angle) * dist - 3}px, ${Math.sin(angle) * dist - 3}px) scale(0)`;
                spark.style.opacity = "0";
            }, 10);

            setTimeout(() => spark.remove(), 850);
        }
    });

    function animateInfinitySpark() {
        progress = (progress + speed) % 1;
        if (pathLength > 0) {
            const pt = infinityLaserBeam.getPointAtLength(progress * pathLength);
            infinityPhotonSpark.setAttribute("cx", pt.x);
            infinityPhotonSpark.setAttribute("cy", pt.y);
        }
        requestAnimationFrame(animateInfinitySpark);
    }
    requestAnimationFrame(animateInfinitySpark);
}


/* =====================================================
   INTERACTIVE BENTO TERMINAL CLI
===================================================== */

const cliScreen = $("#cliScreen");
const cliButtons = $$(".cli-btn");

const terminalCommands = {
    "ayushi.internship()": [
        "→ Organization: Digital Byte Academy (August 2026, Dehradun)",
        "→ Role: Cyber Security Intern",
        "→ Key Focus: Password Cryptanalysis, VoIP (SIP, RTP, STUN), PCAP Inspection, Threat Detection"
    ],
    "ayushi.oratory()": [
        "→ National Speaker: Jayghosh (Bagawat se Siyasat Tak 2025)",
        "→ Secretary: Expressions (The Literary Club, UIT)",
        "→ Senior Executive Member: Core Committee (Student Governance)",
        "→ Published Poet: Scriptures in Books by Pinki Chugh"
    ],
    "ayushi.contact()": [
        "→ Direct Email: 26shankar09@gmail.com",
        "→ GitHub: https://github.com/26shankar09-coder",
        "→ LinkedIn: linkedin.com/in/ayushi-shankar-4976943a6",
        "→ Phone inquiries available upon formal email request"
    ]
};

cliButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const cmd = btn.dataset.run;
        soundEngine.playChirp(700, 0.04);

        if (cmd === "clear") {
            cliScreen.innerHTML = `
                <div class="cli-line"><span class="cli-prompt">$</span> <span class="cli-cmd">ayushi.ready()</span></div>
                <div class="cli-output success">✓ Terminal cleared. Click command chips below to inspect.</div>
            `;
            return;
        }

        const responses = terminalCommands[cmd];
        if (responses) {
            const cmdLine = document.createElement("div");
            cmdLine.className = "cli-line";
            cmdLine.innerHTML = `<span class="cli-prompt">$</span> <span class="cli-cmd">${cmd}</span>`;
            cliScreen.appendChild(cmdLine);

            responses.forEach((resp) => {
                const outLine = document.createElement("div");
                outLine.className = "cli-output highlight";
                outLine.textContent = resp;
                cliScreen.appendChild(outLine);
            });

            cliScreen.scrollTop = cliScreen.scrollHeight;
        }
    });
});


/* =====================================================
   LIVE CLOCK IN DEHRADUN, INDIA (IST UTC+5:30)
===================================================== */

const liveISTClock = $("#liveISTClock");
function updateISTClock() {
    if (!liveISTClock) return;
    const now = new Date();
    const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    };
    liveISTClock.textContent = new Intl.DateTimeFormat("en-US", options).format(now);
}
setInterval(updateISTClock, 1000);
updateISTClock();


/* =====================================================
   ONE-CLICK COPY EMAIL CLIPBOARD
===================================================== */

const copyEmailTrigger = $("#copyEmailTrigger");
const targetEmail = $("#targetEmail");
const copyLabel = $("#copyLabel");

if (copyEmailTrigger && targetEmail) {
    copyEmailTrigger.addEventListener("click", () => {
        soundEngine.playChirp(960, 0.06);
        navigator.clipboard.writeText(targetEmail.textContent.trim()).then(() => {
            if (copyLabel) copyLabel.textContent = "Copied! ✨";
            copyEmailTrigger.style.background = "var(--accent)";
            copyEmailTrigger.style.color = "#000";

            setTimeout(() => {
                if (copyLabel) copyLabel.textContent = "Copy Address";
                copyEmailTrigger.style.background = "";
                copyEmailTrigger.style.color = "";
            }, 2400);
        });
    });
}


/* =====================================================
   WARP ROCKET BACK TO TOP
===================================================== */

const rocketWarpBtn = $("#rocketWarpBtn");

if (rocketWarpBtn) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 380) {
            rocketWarpBtn.classList.add("visible");
        } else {
            rocketWarpBtn.classList.remove("visible");
        }
    });

    rocketWarpBtn.addEventListener("click", () => {
        soundEngine.playCosmicChime();
        rocketWarpBtn.classList.add("launching");
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        setTimeout(() => {
            rocketWarpBtn.classList.remove("launching");
        }, 900);
    });
}


/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const mobileNavToggle = $("#mobileNavToggle");
const navMenu = $("#nav");

if (mobileNavToggle && navMenu) {
    mobileNavToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
        soundEngine.playChirp(520, 0.04);
    });

    $$("nav a").forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
        });
    });
}
