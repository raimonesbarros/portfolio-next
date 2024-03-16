/* eslint-disable react/no-danger */
import React from "react";

const jsonData = {
  "@context": "https://schema.org",
  "@type": "Person",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Araguaína",
    addressRegion: "TO",
    addressCountry: "BR",
  },
  name: "Raimones Barros",
  url: "https://www.portfolio.raimones.dev",
  jobTitle: "Desenvolvedor Front-End",
  image:
    "https://www.portfolio.raimones.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fme.b1a79cc5.png&w=640&q=75",
  description:
    "Desenvolvedor Front-End especializado em criar interfaces web responsivas e intuitivas. Me especializando em ReactJS e Typescript, ofereço soluções web de alta qualidade para sites de comércio eletrônico, aplicações web interativas, sistemas de gerenciamento de conteúdo, etc. Foco em design responsivo e experiência de usuário excepcional para garantir que cada projeto seja acessível e fácil de usar em todos os dispositivos. Entre em contato para saber mais sobre como posso ajudar a levar seus projetos ao próximo nível.",
  email: "mailto:raimonesrg3@gmail.com",
  telephone: "https://api.whatsapp.com/send?phone=5563992304536",
};

const JsonLd: React.FC = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(jsonData),
    }}
  />
);

export default JsonLd;
