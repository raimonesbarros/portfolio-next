const title = "Portfolio | Raimones desenvolvedor front-end";
const description =
  "Desenvolvedor Front-End especializado em criar interfaces web responsivas e intuitivas. Me especializando em ReactJS e Typescript, ofereço soluções web de alta qualidade para sites de comércio eletrônico, aplicações web interativas, sistemas de gerenciamento de conteúdo, etc. Foco em design responsivo e experiência de usuário excepcional para garantir que cada projeto seja acessível e fácil de usar em todos os dispositivos. Entre em contato para saber mais sobre como posso ajudar a levar seus projetos ao próximo nível.";

export const SEOMain: SEOProps = {
  title,
  description,
  canonical: "https://www.portfolio.raimones.dev",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.portfolio.raimones.dev",
    title,
    description,
    images: [
      {
        url: "https://www.portfolio.raimones.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome.4f9ce188.png&w=1920&q=75",
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
};
