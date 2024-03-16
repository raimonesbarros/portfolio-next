const title = "Raimones | Blog";
const description = "Blog do desenvolvedor front-end Raimones Barros";

export const SEOBlog: SEOProps = {
  title,
  description,
  canonical: "https://www.portfolio.raimones.dev/blog",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.portfolio.raimones.dev/blog",
    title,
    description,
    images: [
      {
        url: "https://www.portfolio.raimones.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog1.654a2d36.png&w=1920&q=75",
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
};
