import { NextSeo } from "next-seo";

// NOTE : 기본적인 seo와 레이아웃
const LayoutTemplate = ({
  seo,
  children,
}: {
  seo: {
    title: string;
    description: string;
    images?: "default/og.png" | string;
  };
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <>
      <NextSeo
        title={`${seo.title} | ABLY`}
        description={seo.description}
        openGraph={{
          type: "website",
          title: `${seo.title}`,
          description: seo.description,
          images: [
            { url: `${process.env.NEXT_PUBLIC_IMG_HOST}/${seo.images}` },
          ],
        }}
      />
      {children}
    </>
  );
};

export default LayoutTemplate;
