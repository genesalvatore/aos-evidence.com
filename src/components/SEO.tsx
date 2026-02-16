import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    path?: string;
    type?: string;
}

const SITE_NAME = 'AOS Evidence Repository';
const BASE_URL = 'https://aos-evidence.com';

export default function SEO({
    title,
    description = 'Public, verifiable evidence of the first ChatGPT-audited constitutional AI governance system. 36 vulnerabilities found and fixed. Production-approved February 5, 2026.',
    path = '/',
    type = 'website',
}: SEOProps) {
    const fullTitle = title
        ? `${title} — ${SITE_NAME}`
        : `${SITE_NAME} — Verifiable AI Safety Documentation`;
    const url = `${BASE_URL}${path}`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />

            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />

            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
}
