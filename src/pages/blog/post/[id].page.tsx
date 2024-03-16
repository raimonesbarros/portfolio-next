import { FC } from "react";
import { api } from "~/infra/api";
import { GetStaticPaths, GetStaticProps, useDynamicRouter } from "~/modules";
import { Footer, Header } from "~/pages/components";
import { JsonLdDynamic, SEODynamic } from "~/utils";
import { PostHeader } from "./components";
import { Markdown, PostContainer, PostContent } from "./styles";

const Post: FC<CurrentPostType> = ({ post }) => {
  const { query } = useDynamicRouter();

  const blogPost = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.portfolio.raimones.dev/blog/post/${query.id}`,
    },
    headline: `${post.title}`,
    description: `${post.body.slice(150, 500)}`,
    image:
      "http://raimones.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog1.654a2d36.png&w=1920&q=75",
    author: {
      "@type": "Person",
      name: "Raimones Barros",
    },
    publisher: {
      "@type": "Organization",
      name: "<RSB/>",
      logo: {
        "@type": "ImageObject",
        url: "http://raimones.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffavicon.9f3719c1.png&w=128&q=75",
      },
    },
    datePublished: "2023-08-06T12:00:00Z",
    dateModified: "2023-08-06T15:30:00Z",
  };

  return (
    <>
      <JsonLdDynamic data={blogPost} />
      <Header />
      <PostContainer>
        <SEODynamic postId={post.number} description={post.title} />
        {post.user && <PostHeader post={post} />}
        <PostContent>
          <Markdown>{post.body}</Markdown>
        </PostContent>
      </PostContainer>
      <Footer />
    </>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await api.get(`/search/issues`, {
    params: {
      q: `repo:raimonesbarros/github-blog`,
      _sort: "created_at",
      _order: "desc",
    },
  });

  const { items } = res.data;

  const paths = items.map((item: any) => ({
    params: {
      id: item.number.toString(),
    },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const postId = params?.id;
  const response = await api.get(
    `/repos/raimonesbarros/github-blog/issues/${postId}`,
  );

  return {
    props: { post: response.data },
    revalidate: 60 * 60 * 1, // 1 Hour
  };
};
