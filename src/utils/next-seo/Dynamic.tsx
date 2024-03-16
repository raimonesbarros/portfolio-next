import { NextSeo } from "~/modules";

interface SEODynamicProps {
  description: string;
  postId: string | number;
}

const SEODynamic = ({ description, postId }: SEODynamicProps) => (
  <NextSeo
    title={`Raimones | ${description}`}
    description={description}
    canonical={`https://www.portfolio.raimones.dev/blog/post/${postId}`}
    openGraph={{
      url: `https://www.portfolio.raimones.dev/blog/post/${postId}`,
      title: `Raimones | ${description}`,
      description: `${description}`,
      images: [
        {
          url: "https://www.portfolio.raimones.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffavicon.9f3719c1.png&w=128&q=75",
          alt: "Página inicial do blog",
          width: 1280,
          height: 720,
        },
      ],
    }}
  />
);

export default SEODynamic;
