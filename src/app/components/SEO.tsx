import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export function SEO({ 
  title = "Mercurion Exports - Connecting Indian Sellers with Global Buyers | International Trade Mediator",
  description = "Mercurion Exports facilitates international trade by connecting quality Indian manufacturers with verified global buyers. We provide comprehensive mediation services including buyer-seller matching, export documentation, logistics coordination, and secure transactions.",
  keywords = "India export, international trade mediator, Indian suppliers, global buyers, export from India, import from India, trade facilitation, export documentation, logistics coordination, buyer seller matching, verified Indian manufacturers"
}: SEOProps) {
  useEffect(() => {
    // Set page title
    document.title = title;
    
    // Set or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Set or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);

    // Set or create Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Mercurion Exports' }
    ];

    ogTags.forEach(tag => {
      let ogTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', tag.property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', tag.content);
    });

    // Add JSON-LD structured data for Organization
    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Mercurion Exports",
      "description": "International trade mediator connecting Indian sellers with global buyers",
      "url": typeof window !== 'undefined' ? window.location.origin : '',
      "logo": "",
      "slogan": "Connecting Indian excellence to global markets",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-8407907092",
        "contactType": "Customer Service",
        "email": "info@mercurionexports.com",
        "areaServed": "Worldwide",
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "401303",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://facebook.com/mercurionexports",
        "https://twitter.com/mercurionexports",
        "https://linkedin.com/company/mercurionexports"
      ],
      "serviceType": [
        "Trade Facilitation",
        "Export Mediation",
        "Import-Export Services",
        "Logistics Coordination",
        "International Trade Documentation"
      ]
    };

    scriptTag.textContent = JSON.stringify(structuredData);
  }, [title, description, keywords]);

  return null;
}