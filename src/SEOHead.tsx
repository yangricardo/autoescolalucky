import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const updateMetaTag = (
  name: string,
  content: string,
  isProperty: boolean = false
): void => {
  const attribute = isProperty ? 'property' : 'name';
  let element = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);

  if (element) {
    element.setAttribute('content', content);
  } else {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    element.setAttribute('content', content);
    document.head.appendChild(element);
  }
};

const updateLinkTag = (rel: string, href: string): void => {
  let element = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (element) {
    element.setAttribute('href', href);
  } else {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    element.setAttribute('href', href);
    document.head.appendChild(element);
  }
};

export const SEOHead: React.FC<SEOHeadProps> = ({ 
  title = "Autoescola Lucky - CNH com Segurança e Confiança | Bangu, RJ",
  description = "Autoescola Lucky em Bangu, Rio de Janeiro. Tire sua CNH com segurança e confiança. Aulas teóricas e práticas, instrutores qualificados.",
  keywords = "autoescola, CNH, carteira de motorista, aulas de direção, Bangu, Rio de Janeiro, habilitação, primeira habilitação, reciclagem CNH",
  image = "https://autoescolalucky.com.br/logo.webp",
  url = "https://autoescolalucky.com.br/"
}) => {
  useEffect(() => {
    document.title = title;

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    
    // Twitter tags
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:card', 'summary_large_image');
    
    // Canonical link
    updateLinkTag('canonical', url);
    
  }, [title, description, keywords, image, url]);

  return null; // This component doesn't render anything
};
