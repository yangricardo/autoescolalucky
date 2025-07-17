import { useEffect } from 'react';

export const SEOHead = ({ 
  title = "Autoescola Lucky - CNH com Segurança e Confiança | Bangu, RJ",
  description = "Autoescola Lucky em Bangu, Rio de Janeiro. Tire sua CNH com segurança e confiança. Aulas teóricas e práticas, instrutores qualificados.",
  keywords = "autoescola, CNH, carteira de motorista, aulas de direção, Bangu, Rio de Janeiro, habilitação, primeira habilitação, reciclagem CNH",
  image = "https://autoescolalucky.com.br/logo.webp",
  url = "https://autoescolalucky.com.br/"
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    // Update basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Update Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    
    // Update Twitter tags
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', image, true);
    updateMetaTag('twitter:url', url, true);
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', url);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', url);
      document.head.appendChild(canonicalLink);
    }
    
  }, [title, description, keywords, image, url]);

  return null; // This component doesn't render anything
};
