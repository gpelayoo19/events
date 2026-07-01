import { Helmet } from 'react-helmet-async';
import { company } from '../../config/company';

const SEO = ({
    title,
    description,
    image,
    url,
    noIndex = false,
}) => {
    const fullTitle = title
        ? `${title} | ${company.name}`
        : company.name;

    const fullDescription = description || company.description;
    const fullImage = image || company.image;
    const fullUrl = url || company.url;

    return (
        <Helmet>
            <title>{fullTitle}</title>

            <meta name="description" content={fullDescription} />
            <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
            <meta name="theme-color" content="#121414" />

            {fullUrl && <link rel="canonical" href={fullUrl} />}
            {fullUrl && <meta property="og:url" content={fullUrl} />}

            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={fullDescription} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={company.name} />
            <meta property="og:locale" content="es_CO" />
            {fullImage && <meta property="og:image" content={fullImage} />}

            <meta name="twitter:card" content="summary_large_image" />
            {fullTitle && <meta name="twitter:title" content={fullTitle} />}
            {fullDescription && <meta name="twitter:description" content={fullDescription} />}
            {fullImage && <meta name="twitter:image" content={fullImage} />}
        </Helmet>
    );
};

export default SEO;