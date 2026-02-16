import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Pages
import HomePage from './pages/HomePage';
import WhatWeBuilt from './pages/WhatWeBuilt';
import AuditReport from './pages/AuditReport';
import ThreatModel from './pages/ThreatModel';
import Verification from './pages/Verification';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import CookiePolicy from './pages/CookiePolicy';
import HumanitarianLicense from './pages/HumanitarianLicense';
import UnderstandingConstitutionalAI from './pages/UnderstandingConstitutionalAI';
import OpenClawGovernance from './pages/OpenClawGovernance';
import NotFound from './pages/NotFound';

// ─── Matomo Analytics (Site ID: 15) ─────────────────────────────────────────
declare global {
  interface Window { _paq?: any[]; }
}

const MATOMO_SERVER = 'stats.greentreehosting.net';
const EVIDENCE_SITE_ID = '15';

function useMatomo() {
  useEffect(() => {
    const _paq = (window._paq = window._paq || []);
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    const u = `https://${MATOMO_SERVER}/`;
    _paq.push(['setTrackerUrl', u + 'matomo.php']);
    _paq.push(['setSiteId', EVIDENCE_SITE_ID]);
    const d = document, g = d.createElement('script');
    g.async = true; g.src = u + 'matomo.js';
    d.head.appendChild(g);
  }, []);
}

// ─── Cookie Consent ─────────────────────────────────────────────────────────
const CONSENT_KEY = 'aosevidence_cookie_consent';

function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(CONSENT_KEY)) {
      setTimeout(() => setVisible(true), 1500);
    }
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setVisible(false);
  }

  if (!visible) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-gray-900 text-white px-6 py-5 shadow-2xl transform transition-transform duration-300">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300">
          We use privacy-respecting analytics (Matomo, self-hosted) to understand how this site is used. No data is sold or shared.{' '}
          <a href="/privacy" className="underline text-white">Privacy Policy</a>
        </p>
        <div className="flex gap-3 shrink-0">
          <button onClick={accept} className="px-4 py-2 bg-white text-gray-900 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors">Accept</button>
          <button onClick={decline} className="px-4 py-2 border border-white/30 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors">Decline</button>
        </div>
      </div>
    </div>
  );
}

// ─── Scroll to top on route change ──────────────────────────────────────────
function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return null;
}

// ─── App ────────────────────────────────────────────────────────────────────
export default function App() {
  useMatomo();

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/audit/what-we-built" element={<WhatWeBuilt />} />
          <Route path="/audit/report" element={<AuditReport />} />
          <Route path="/audit/threat-model" element={<ThreatModel />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/license" element={<HumanitarianLicense />} />
          <Route path="/learn/constitutional-ai" element={<UnderstandingConstitutionalAI />} />
          <Route path="/evidence/openclaw-governance" element={<OpenClawGovernance />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
      </BrowserRouter>
    </HelmetProvider>
  );
}
