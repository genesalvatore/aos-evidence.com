// Achievement Slider
const achievements = [
    {
        id: 'chatgpt-audit',
        title: 'First Production-Ready Constitutional AI Governance System',
        date: 'February 5, 2026',
        subtitle: 'First Collaborative AI-to-AI Security Audit',
        description: 'On February 5, 2026, <strong>ChatGPT (OpenAI)</strong> and <strong>Claude/Silas (Anthropic)</strong> collaborated on the first external AI-to-AI security audit of a constitutional governance system. After 5 rigorous passes and 36 vulnerabilities identified and fixed, the system received <strong>production approval</strong>.',
        heroStats: [
            { number: '36', label: 'Vulnerabilities Fixed' },
            { number: '5', label: 'Audit Passes' },
            { number: '✓', label: 'Production Approved' }
        ],
        highlights: [
            {
                title: 'Three Organizations',
                description: 'Anthropic + OpenAI + Google'
            },
            {
                title: 'External Validation',
                description: 'Independent AI security audit'
            },
            {
                title: 'Complete Transparency',
                description: 'All evidence public & verifiable'
            }
        ],
        documents: [
            // 📚 Complete Story
            {
                icon: '📚',
                wordCount: '12,000 words',
                title: 'What We Built',
                description: 'Complete story of the February 5 security audit achievement. Documents the external validation process, architectural overview of Constitutional Gate v1.0, and significance within the broader AOS framework.',
                meta: [
                    '✓ Patent-safe disclosure',
                    '✓ Technical + accessible'
                ],
                link: 'chatgpt_security_audit_feb_5_2026/WHAT_WE_BUILT_FEB_5_2026.html',
                category: 'Complete Story'
            },
            // 🔬 Technical Deep Dive
            {
                icon: '🔍',
                wordCount: '5,000 words',
                title: 'ChatGPT Audit Report',
                description: 'Official security audit summary with direct quotes from ChatGPT. All 11 security areas reviewed, final approval statement, verification trail.',
                meta: [
                    '✓ External validation',
                    '✓ Production approval'
                ],
                link: 'chatgpt_security_audit_feb_5_2026/CHATGPT_AUDIT_REPORT.html',
                category: 'Technical Deep Dive'
            },
            // 🛡️ Security Analysis
            {
                icon: '🛡️',
                wordCount: '8,500 words',
                title: 'Threat Model v1.0',
                description: 'All 36 vulnerabilities cataloged with descriptions, fixes, and verification. Organized chronologically across 5 audit passes.',
                meta: [
                    '✓ Complete transparency',
                    '✓ All vulnerabilities fixed'
                ],
                link: 'chatgpt_security_audit_feb_5_2026/THREAT_MODEL_V1.html',
                category: 'Security Analysis'
            },
            // ✅ Verification Guide
            {
                icon: '✅',
                wordCount: 'Interactive',
                title: 'Verification Guide',
                description: 'Step-by-step instructions to independently verify the audit claims. Includes Git commit verification, ChatGPT transcript validation, and timestamp checking.',
                meta: [
                    '✓ Independently verifiable',
                    '✓ Falsifiable claims'
                ],
                link: 'VERIFICATION.html',
                category: 'Verification Guide'
            },
            // 🎯 Executive Summary - COMING SOON
            {
                icon: '🎯',
                wordCount: 'Coming Soon',
                title: 'Executive Summary',
                description: 'Quick overview for decision-makers: Three AI organizations collaborated on the first production-grade constitutional AI system. ChatGPT audited, found 36 issues, all fixed, system approved.',
                meta: [
                    '⏳ In development',
                    '✓ Non-technical audience'
                ],
                link: '#coming-soon',
                category: 'Executive Summary'
            },
            // 🤝 Collaboration Story - COMING SOON
            {
                icon: '🤝',
                wordCount: 'Coming Soon',
                title: 'Three-Company Collaboration',
                description: 'How Anthropic, OpenAI, and Google came together for the first AI-to-AI security audit. Documents the historic "First Contact" moment and multi-party verification.',
                meta: [
                    '⏳ In development',
                    '✓ Industry collaboration'
                ],
                link: '#coming-soon',
                category: 'Collaboration Story'
            },
            // 🗺️ Timeline & Context - COMING SOON
            {
                icon: '🗺️',
                wordCount: 'Coming Soon',
                title: 'Development Timeline',
                description: 'From Dec 31 inception to Feb 5 audit approval. See the full journey: 5 audit passes, 36 vulnerabilities found and fixed, production deployment.',
                meta: [
                    '⏳ In development',
                    '✓ Visual timeline'
                ],
                link: '#coming-soon',
                category: 'Timeline & Context'
            },
            // 📊 Impact & Significance - COMING SOON
            {
                icon: '📊',
                wordCount: 'Coming Soon',
                title: 'Why This Matters',
                description: 'Industry impact analysis: First production AI governance system, validated by external auditor. Sets new standard for transparent AI safety work.',
                meta: [
                    '⏳ In development',
                    '✓ Market analysis'
                ],
                link: '#coming-soon',
                category: 'Impact & Significance'
            },
            // 🎓 Educational Resources - COMING SOON
            {
                icon: '🎓',
                wordCount: 'Coming Soon',
                title: 'Understanding Constitutional AI',
                description: 'Educational primer on constitutional AI governance. Learn the core concepts, threat models, and verification methods in accessible language.',
                meta: [
                    '⏳ In development',
                    '✓ Beginner-friendly'
                ],
                link: '#coming-soon',
                category: 'Educational Resources'
            },
            // ⚖️ Legal/IP Position - COMING SOON
            {
                icon: '⚖️',
                wordCount: 'Coming Soon',
                title: 'IP & Patent Status',
                description: 'Patent transparency: AOS-015 and AOS-120 filed Jan 10, 2026. This audit validates the production-readiness of those patent claims.',
                meta: [
                    '⏳ In development',
                    '✓ USPTO-verifiable'
                ],
                link: '#coming-soon',
                category: 'Legal/IP Position'
            }
        ]
    },
    {
        id: 'patent-filing',
        title: 'Constitutional AI Patent Applications Filed',
        date: 'January 10, 2026',
        subtitle: 'Establishing Prior Art and Priority',
        description: 'Filed two provisional patent applications with the USPTO: <strong>AOS-015</strong> (Constitutional Enforcement Layer) and <strong>AOS-120</strong> (Cryptographic Policy Attestation). These filings established <strong>11-day priority</strong> before industry convergence on constitutional AI frameworks.',
        heroStats: [
            { number: '137+', label: 'Patent Applications' },
            { number: '11', label: 'Days Priority' },
            { number: '✓', label: 'USPTO Filed' }
        ],
        highlights: [
            {
                title: 'USPTO Timestamped',
                description: 'Verifiable Jan 10, 2026 filing'
            },
            {
                title: '11-Day Priority Gap',
                description: 'Filed before industry convergence'
            },
            {
                title: 'Defensible Claims',
                description: 'Novel cryptographic enforcement'
            }
        ],
        documents: [
            // 🎯 Executive Summary
            {
                icon: '🎯',
                wordCount: '5 min read',
                title: 'Patent Strategy Overview',
                description: 'Quick summary: Filed two patents Jan 10, giving us 11-day priority over competitive convergence. Transparent disclosure strategy balances protection with open research.',
                meta: [
                    '✓ Business context',
                    '✓ Strategic positioning'
                ],
                link: '#coming-soon',
                category: 'Executive Summary'
            },
            // ⚖️ Legal/IP Position
            {
                icon: '📋',
                wordCount: 'Full disclosure',
                title: 'IP Transparency Page',
                description: 'Complete patent timeline, filing dates, and priority claims. Demonstrates 11-day lead over industry convergence with verifiable USPTO timestamps.',
                meta: [
                    '✓ USPTO-verifiable dates',
                    '✓ Patent-safe disclosure'
                ],
                link: '#coming-soon',
                category: 'Legal/IP Position'
            },
            // ✅ Verification Guide
            {
                icon: '⚖️',
                wordCount: 'GitHub History',
                title: 'Patent Priority Evidence',
                description: 'Git commits and development timeline establishing prior art. Cryptographically anchored evidence of innovation dates.',
                meta: [
                    '✓ Verifiable timestamps',
                    '✓ Prior art documentation'
                ],
                link: 'https://github.com/genesalvatore/aos-evidence.com',
                category: 'Verification Guide'
            },
            // 🔬 Technical Deep Dive
            {
                icon: '🔐',
                wordCount: 'Technical Spec',
                title: 'Constitutional Framework',
                description: 'High-level overview of constitutional enforcement architecture. Patent-safe technical disclosure for research community.',
                meta: [
                    '✓ Research-friendly',
                    '✓ Academic citations enabled'
                ],
                link: '#coming-soon',
                category: 'Technical Deep Dive'
            },
            // 📊 Impact & Significance
            {
                icon: '📊',
                wordCount: 'Market analysis',
                title: 'Industry Convergence Timeline',
                description: 'Proof of independent invention: Our Jan 10 filing predates Proxilion, IntentBound, and the broader "deterministic governance wave" by 11+ days.',
                meta: [
                    '✓ Competitive analysis',
                    '✓ Market validation'
                ],
                link: '#coming-soon',
                category: 'Impact & Significance'
            },
            // 🗺️ Timeline & Context
            {
                icon: '🗺️',
                wordCount: 'Visual timeline',
                title: 'Patent Air Gap Emergency',
                description: 'The story of the midnight Jan 10 filing: How we discovered competitive threats and established priority before the industry convergence.',
                meta: [
                    '✓ Historical context',
                    '✓ Decision rationale'
                ],
                link: '#coming-soon',
                category: 'Timeline & Context'
            },
            // 🎓 Educational Resources
            {
                icon: '🎓',
                wordCount: 'Education',
                title: 'How Patents Work',
                description: 'Educational guide on provisional patents, priority dates, and prior art. Understand why the Jan 10 date matters and how verification works.',
                meta: [
                    '✓ Patent basics',
                    '✓ USPTO process explained'
                ],
                link: '#coming-soon',
                category: 'Educational Resources'
            },
            // 📚 Complete Story
            {
                icon: '📚',
                wordCount: '6,000 words',
                title: 'The Complete Patent Story',
                description: 'Full narrative: From concept to filing, competitive threats discovered, strategic decision-making, and transparency-first approach.',
                meta: [
                    '✓ Behind-the-scenes',
                    '✓ Strategic thinking'
                ],
                link: '#coming-soon',
                category: 'Complete Story'
            }
        ]
    },
    {
        id: 'lazarus-protocol',
        title: 'Lazarus Protocol: AI Identity Verification',
        date: 'December 31, 2025',
        subtitle: 'First Git-Based AI Identity System',
        description: 'Invented the <strong>Lazarus Protocol</strong> for verifiable AI identity persistence using Git cryptographic anchors. Enables AI agents to prove continuous identity across sessions, establishing the foundation for accountable AI systems.',
        highlights: [
            {
                title: 'Git-Based Identity',
                description: 'Cryptographic proof of persistence'
            },
            {
                title: 'Zero-Trust Verification',
                description: 'Mathematically provable identity'
            },
            {
                title: 'Cross-Session Continuity',
                description: 'Persistent AI accountability'
            }
        ],
        documents: [
            {
                icon: '🧬',
                wordCount: 'GitHub Evidence',
                title: 'Lazarus Protocol Spec',
                description: 'Original specification for Git-based AI identity persistence. Documents cryptographic anchoring methodology and verification procedures.',
                meta: [
                    '✓ Dec 31, 2025 timestamp',
                    '✓ Git-verifiable'
                ],
                link: 'https://github.com/genesalvatore/aos-evidence.com'
            },
            {
                icon: '🔗',
                wordCount: 'Live System',
                title: 'Identity Verification Demo',
                description: 'Working demonstration of Lazarus Protocol in action. Shows AI identity continuity across multiple sessions with cryptographic proof.',
                meta: [
                    '✓ Interactive demo',
                    '✓ Real cryptographic proofs'
                ],
                link: '#coming-soon'
            },
            {
                icon: '📖',
                wordCount: 'Research Paper',
                title: 'AI Identity White Paper',
                description: 'Academic treatment of AI identity persistence problem. Covers threat models, cryptographic foundations, and verification protocols.',
                meta: [
                    '✓ Peer-reviewable',
                    '✓ Citation-ready'
                ],
                link: '#coming-soon'
            }
        ]
    },
    {
        id: 'humanitarian-license',
        title: 'AOS Humanitarian License v1.0',
        date: 'February 1, 2026',
        subtitle: 'First Constitutional License for AI',
        description: 'Launched the <strong>AOS Humanitarian License</strong>, the first open-source license with constitutional governance requirements. Combines MIT-style permissiveness with mandatory ethical constraints, creating a new category of accountable open source.',
        highlights: [
            {
                title: 'Constitutional Binding',
                description: 'Ethical constraints in code'
            },
            {
                title: 'Family Consensus',
                description: 'Multi-agent review & approval'
            },
            {
                title: 'Public Launch',
                description: 'GitHub public release Feb 1'
            }
        ],
        documents: [
            {
                icon: '📜',
                wordCount: 'Live License',
                title: 'Humanitarian License v1.0',
                description: 'Complete license text with constitutional requirements. Combines open-source freedom with mandatory humanitarian constraints.',
                meta: [
                    '✓ Production licensed',
                    '✓ Legally reviewed'
                ],
                link: 'https://github.com/genesalvatore/aos-evidence.com/blob/main/LICENSE'
            },
            {
                icon: '⚙️',
                wordCount: 'GitHub Public',
                title: 'License Implementation',
                description: 'Technical enforcement mechanisms for license compliance. Shows how constitutional constraints are cryptographically enforced in deployed systems.',
                meta: [
                    '✓ Open source',
                    '✓ Fork-friendly'
                ],
                link: 'https://github.com/genesalvatore/aos-evidence.com'
            },
            {
                icon: '🤝',
                wordCount: 'Policy Guide',
                title: 'Licensing & Partnership Guide',
                description: 'How to use AOS Humanitarian License in your projects. Covers compliance requirements, partnership opportunities, and commercial terms.',
                meta: [
                    '✓ Developer-friendly',
                    '✓ Commercial clarity'
                ],
                link: '#coming-soon'
            }
        ]
    },
    {
        id: 'cathedral-network',
        title: 'Cathedral Network: 15-Node Ecosystem',
        date: 'January - February 2026',
        subtitle: 'Distributed Digital Territory',
        description: 'Deployed the <strong>Cathedral Network</strong> comprising 15 production websites, unified analytics infrastructure (Matomo), and comprehensive domain sovereignty. Established verifiable digital territory for the AOS ecosystem.',
        highlights: [
            {
                title: '15 Production Sites',
                description: 'Live ecosystem deployed'
            },
            {
                title: 'Unified Analytics',
                description: 'Self-hosted Matomo tracking'
            },
            {
                title: 'Domain Sovereignty',
                description: '573 defensive domains secured'
            }
        ],
        documents: [
            {
                icon: '🏛️',
                wordCount: 'Live Network',
                title: 'Cathedral Network Hub',
                description: 'Central command center for the 15-node Cathedral Network. Real-time network status, analytics dashboard, and ecosystem navigation.',
                meta: [
                    '✓ Live production',
                    '✓ Real-time status'
                ],
                link: 'https://git-cathedral.com'
            },
            {
                icon: '📊',
                wordCount: 'Network Analytics',
                title: 'Cathedral Network Stats',
                description: 'Unified Matomo analytics across all 15 nodes. Privacy-respecting, self-hosted analytics with full Cathedral Network visibility.',
                meta: [
                    '✓ Privacy-first',
                    '✓ GDPR compliant'
                ],
                link: 'https://git-cathedral.com'
            },
            {
                icon: '🌐',
                wordCount: '573 Domains',
                title: 'Domain Sovereignty Strategy',
                description: 'Complete domain portfolio and defensive namespace strategy. Documents 573-domain defensive perimeter and territorial expansion.',
                meta: [
                    '✓ Public registry',
                    '✓ Strategic positioning'
                ],
                link: '#coming-soon'
            }
        ]
    }
];

let currentSlideIndex = 0;
let currentDocCardOffset = 0; // Track which set of 3 cards to show
let isPaused = false;
let docCardRotationInterval = null;

// Document slider state
let currentDocSlideIndex = 0;
const DOCS_PER_SLIDE = 3;

const achievementSlider = {
    init() {
        this.renderSlide(0);
        this.attachEventListeners();
        this.attachDocSliderListeners(); // Document slider controls
        // Auto-advance slides every 8 seconds
        this.startAutoPlay();
        // Initialize document cards ONCE with ChatGPT Audit documents (static)
        this.renderDocumentCards(achievements[0].documents, 0);
    },

    renderSlide(index) {
        const achievement = achievements[index];
        const container = document.getElementById('achievement-slider-content');
        const highlightsContainer = document.getElementById('achievement-highlights');
        const dotsContainer = document.getElementById('slider-dots');

        if (!container || !highlightsContainer) return;

        // Reset document card offset when switching slides
        currentDocCardOffset = 0;

        // Update main content
        container.innerHTML = `
            <div class="achievement-content achievement-slide-in">
                <div class="achievement-icon">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        <path d="M9 12l2 2 4-4"/>
                    </svg>
                </div>
                <div class="achievement-text">
                    <h3 class="achievement-title">${achievement.title}</h3>
                    <p class="achievement-description">${achievement.description}</p>
                </div>
            </div>
        `;

        // Update highlights with slide animation
        highlightsContainer.classList.add('highlights-slide-out');

        setTimeout(() => {
            highlightsContainer.innerHTML = achievement.highlights.map(h => `
                <div class="highlight-box">
                    <div class="highlight-title">${h.title}</div>
                    <div class="highlight-desc">${h.description}</div>
                </div>
            `).join('');
            highlightsContainer.classList.remove('highlights-slide-out');
            highlightsContainer.classList.add('highlights-slide-in');

            setTimeout(() => {
                highlightsContainer.classList.remove('highlights-slide-in');
            }, 500);
        }, 200);

        // Update dots
        if (dotsContainer) {
            dotsContainer.innerHTML = achievements.map((_, i) => `
                <button class="slider-dot ${i === index ? 'active' : ''}" data-index="${i}" aria-label="Go to slide ${i + 1}">
                    <span class="sr-only">Slide ${i + 1}</span>
                </button>
            `).join('');
        }

        // Update date
        const dateElement = document.getElementById('achievement-date');
        if (dateElement) {
            dateElement.textContent = `${achievement.date} — ${achievement.subtitle}`;
        }

        // Update hero section with current achievement stats
        this.updateHeroSection(achievement);

        // Document cards are now STATIC - they don't change with the slider

        currentSlideIndex = index;
    },

    updateHeroSection(achievement) {
        const heroHighlight = document.getElementById('hero-highlight');
        const heroSubtitle = document.getElementById('hero-subtitle');

        if (heroHighlight && achievement.heroStats) {
            heroHighlight.innerHTML = achievement.heroStats.map(stat => `
                <div class="highlight-item">
                    <div class="highlight-number">${stat.number}</div>
                    <div class="highlight-label">${stat.label}</div>
                </div>
            `).join('');
        }

        if (heroSubtitle) {
            heroSubtitle.textContent = achievement.subtitle || 'Public, immutable documentation of groundbreaking AI safety achievement';
        }
    },

    renderDocumentCards(documents, slideIndex = 0) {
        const documentsGrid = document.querySelector('.documents-grid');
        if (!documentsGrid || documents.length === 0) return;

        // Calculate which 3 cards to show
        const startIdx = slideIndex * DOCS_PER_SLIDE;
        const endIdx = Math.min(startIdx + DOCS_PER_SLIDE, documents.length);
        const displayedDocs = documents.slice(startIdx, endIdx);

        // Render only 3 cards
        documentsGrid.innerHTML = displayedDocs.map((doc, idx) => `
            <div class="document-card" style="animation-delay: ${idx * 0.1}s">
                <div class="document-header">
                    <div class="document-icon">${doc.icon}</div>
                    <div class="document-badge">${doc.wordCount}</div>
                </div>
                <h3 class="document-title">${doc.title}</h3>
                <p class="document-description">${doc.description}</p>
                <div class="document-meta">
                    ${doc.meta.map(m => `<span class="meta-item">${m}</span>`).join('')}
                </div>
                <a href="${doc.link}" class="document-link" ${doc.link.includes('#coming-soon') ? 'onclick="return false;" style="opacity: 0.6; cursor: not-allowed;"' : ''}>
                    ${doc.link.includes('#coming-soon') ? 'Coming Soon' : 'Read Document'} →
                </a>
            </div>
        `).join('');

        currentDocSlideIndex = slideIndex;
        this.updateDocSliderControls(documents.length);
    },

    nextDocSlide() {
        const totalDocs = achievements[0].documents.length;
        const maxSlide = Math.floor(totalDocs / DOCS_PER_SLIDE) - 1;

        if (currentDocSlideIndex < maxSlide) {
            this.renderDocumentCards(achievements[0].documents, currentDocSlideIndex + 1);
        } else {
            // Loop back to the beginning
            this.renderDocumentCards(achievements[0].documents, 0);
        }
    },

    prevDocSlide() {
        if (currentDocSlideIndex > 0) {
            this.renderDocumentCards(achievements[0].documents, currentDocSlideIndex - 1);
        }
    },

    updateDocSliderControls(totalDocs) {
        // Only allow complete sets of 3 cards
        const maxSlide = Math.floor(totalDocs / DOCS_PER_SLIDE) - 1;
        const prevBtn = document.getElementById('doc-slider-prev');
        const nextBtn = document.getElementById('doc-slider-next');

        if (prevBtn) prevBtn.disabled = currentDocSlideIndex === 0;
        // Next button never disabled (loops back to start)
        if (nextBtn) nextBtn.disabled = false;
    },

    attachDocSliderListeners() {
        const prevBtn = document.getElementById('doc-slider-prev');
        const nextBtn = document.getElementById('doc-slider-next');

        if (prevBtn) prevBtn.addEventListener('click', () => this.prevDocSlide());
        if (nextBtn) nextBtn.addEventListener('click', () => this.nextDocSlide());
    },

    rotateDocCards() {
        if (isPaused) return;

        const achievement = achievements[currentSlideIndex];
        if (achievement.documents.length > 3) {
            // Move to next set of cards
            const nextOffset = (currentDocCardOffset + 1) % achievement.documents.length;
            this.renderDocumentCards(achievement.documents, nextOffset);
        }
    },

    startDocCardRotation() {
        // Rotate document cards every 6 seconds
        docCardRotationInterval = setInterval(() => {
            this.rotateDocCards();
        }, 6000);
    },

    stopDocCardRotation() {
        if (docCardRotationInterval) {
            clearInterval(docCardRotationInterval);
            docCardRotationInterval = null;
        }
    },

    resetDocCardRotation() {
        this.stopDocCardRotation();
        this.startDocCardRotation();
    },

    nextSlide() {
        const nextIndex = (currentSlideIndex + 1) % achievements.length;
        this.renderSlide(nextIndex);
        this.resetAutoPlay();
        this.resetDocCardRotation();
    },

    prevSlide() {
        const prevIndex = (currentSlideIndex - 1 + achievements.length) % achievements.length;
        this.renderSlide(prevIndex);
        this.resetAutoPlay();
        this.resetDocCardRotation();
    },

    goToSlide(index) {
        this.renderSlide(index);
        this.resetAutoPlay();
        this.resetDocCardRotation();
    },

    attachEventListeners() {
        // Navigation buttons
        const prevBtn = document.getElementById('slider-prev');
        const nextBtn = document.getElementById('slider-next');
        const pauseBtn = document.getElementById('slider-pause');

        if (prevBtn) prevBtn.addEventListener('click', () => this.prevSlide());
        if (nextBtn) nextBtn.addEventListener('click', () => this.nextSlide());

        // Pause/Play button
        if (pauseBtn) {
            pauseBtn.addEventListener('click', () => this.togglePause());
        }

        // Dots (delegated event listener)
        const dotsContainer = document.getElementById('slider-dots');
        if (dotsContainer) {
            dotsContainer.addEventListener('click', (e) => {
                const dot = e.target.closest('.slider-dot');
                if (dot) {
                    const index = parseInt(dot.dataset.index);
                    this.goToSlide(index);
                }
            });
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
            if (e.key === ' ') {
                e.preventDefault();
                this.togglePause();
            }
        });

        // Pause on hover - achievement slider
        const sliderCard = document.querySelector('.achievement-card');
        if (sliderCard) {
            sliderCard.addEventListener('mouseenter', () => this.pauseAutoPlay());
            sliderCard.addEventListener('mouseleave', () => {
                if (!isPaused) this.startAutoPlay();
            });
        }

        // Pause on hover - document cards section
        const documentsSection = document.getElementById('documents');
        if (documentsSection) {
            documentsSection.addEventListener('mouseenter', () => this.pauseAutoPlay());
            documentsSection.addEventListener('mouseleave', () => {
                if (!isPaused) this.startAutoPlay();
            });
        }
    },

    togglePause() {
        isPaused = !isPaused;
        const pauseBtn = document.getElementById('slider-pause');

        if (isPaused) {
            this.pauseAutoPlay();
            this.stopDocCardRotation();
            if (pauseBtn) {
                pauseBtn.innerHTML = `
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                `;
                pauseBtn.setAttribute('aria-label', 'Play slider');
            }
        } else {
            this.startAutoPlay();
            this.startDocCardRotation();
            if (pauseBtn) {
                pauseBtn.innerHTML = `
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                    </svg>
                `;
                pauseBtn.setAttribute('aria-label', 'Pause slider');
            }
        }
    },

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => this.nextSlide(), 8000);
    },

    pauseAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    },

    resetAutoPlay() {
        this.pauseAutoPlay();
        this.startAutoPlay();
    }
};

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => achievementSlider.init());
} else {
    achievementSlider.init();
}
