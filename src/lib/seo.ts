import { siteConfig } from "../config/site";

export function generateLocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#business`,
    "name": siteConfig.name,
    "legalName": siteConfig.legalName,
    "description": siteConfig.description,
    "url": siteConfig.url,
    "telephone": siteConfig.phoneRaw,
    "email": siteConfig.email,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address.street,
      "addressLocality": siteConfig.address.city,
      "addressRegion": siteConfig.address.state,
      "postalCode": siteConfig.address.zip,
      "addressCountry": "US",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 30.2747,
      "longitude": -97.8288,
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": siteConfig.reviews.googleRating.toString(),
      "reviewCount": siteConfig.reviews.totalReviews.toString(),
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Local Services",
      "itemListElement": siteConfig.services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.shortDesc
        },
        "position": index + 1
      }))
    }
  };

  return JSON.stringify(schema);
}

export function injectSEOHead() {
  // Update document title
  document.title = `${siteConfig.name} | ${siteConfig.tagline}`;

  // Ensure meta description exists
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', siteConfig.description);

  // Inject JSON-LD Schema
  let schemaScript = document.getElementById('json-ld-local-business');
  if (!schemaScript) {
    schemaScript = document.createElement('script');
    schemaScript.id = 'json-ld-local-business';
    schemaScript.setAttribute('type', 'application/ld+json');
    document.head.appendChild(schemaScript);
  }
  schemaScript.textContent = generateLocalBusinessSchema();
}
