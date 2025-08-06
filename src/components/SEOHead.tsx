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

export function SEOHead() {
  return (
    <>
      <title>Autoescola Lucky - Bangu, Rio de Janeiro</title>
      <meta
        name='description'
        content='Autoescola Lucky em Bangu, Rio de Janeiro. Tire sua carteira de motorista com segurança e confiança. Oferecemos aulas para Categoria B.'
      />
      <meta
        name='keywords'
        content='autoescola, bangu, rio de janeiro, cnh, carteira de motorista, habilitação, aulas de direção, categoria b'
      />
      <meta name='author' content='Autoescola Lucky' />
      <meta
        property='og:title'
        content='Autoescola Lucky - Bangu, Rio de Janeiro'
      />
      <meta
        property='og:description'
        content='Tire sua CNH com a melhor autoescola de Bangu. Aulas práticas e teóricas com instrutores qualificados.'
      />
      <meta property='og:image' content='/logo.webp' />
      <meta property='og:url' content='https://autoescolalucky.com.br' />
      <meta property='og:type' content='website' />
      <link rel='canonical' href='https://autoescolalucky.com.br' />
    </>
  );
}
