import { NextSeo } from "~/modules"

interface SEODinamicProps {
  description: string
  postId: string | number
}

const SEODinamic = ({ description, postId }: SEODinamicProps) => (
  <NextSeo
    title={`Raimones | ${description}`}
    description={description}
    canonical={`https://raimones.vercel.app/blog/post/${postId}`}
    openGraph={{
      url: `https://raimones.vercel.app/blog/post/${postId}`,
      title: `Raimones | ${description}`,
      description: `${description}`,
      images: [
        {
          url: "https://raimones.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffavicon.9f3719c1.png&w=128&q=75",
          alt: "Página inicial do blog",
          width: 1280,
          height: 720,
        },
      ],
    }}
  />
)

export default SEODinamic
