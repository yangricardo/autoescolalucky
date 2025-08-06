import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export const updateMetaTag = (
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

export const updateLinkTag = (rel: string, href: string): void => {
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

export function SEOHead({
  title = 'Autoescola Lucky - Bangu, Rio de Janeiro',
  description = 'Autoescola Lucky em Bangu, Rio de Janeiro. Tire sua carteira de motorista com segurança e confiança. Oferecemos aulas para Categoria B.',
  keywords = 'autoescola, bangu, rio de janeiro, cnh, carteira de motorista, habilitação, aulas de direção, categoria b',
  image = '/logo.webp',
  url = 'https://autoescolalucky.com.br',
}: SEOHeadProps) {
  useEffect(() => {
    document.title = title;
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Autoescola Lucky');
    updateMetaTag(
      'og:title',
      title,
      true
    );
    updateMetaTag(
      'og:description',
      'Tire sua CNH com a melhor autoescola de Bangu. Aulas práticas e teóricas com instrutores qualificados.',
      true
    );
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', 'website', true);
    updateLinkTag('canonical', url);
  }, [title, description, keywords, image, url]);

  return null;
}
