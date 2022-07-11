import { GetStaticProps } from "next";
import { dehydrate } from "react-query";
import { getProfile } from "src/apis/auth";
import ProfileContents from "src/components/organisms/profile/ProfileContents";
import LayoutTemplate from "src/components/templates/LayoutTemplate";
import { useFetch, usePreFetch } from "src/hooks/apiMethod/fetch";

const Profile = () => {
  const { data, isFetching } = useFetch("profile", () => getProfile());
  if (isFetching) {
    return <div />;
  }

  return (
    <LayoutTemplate
      seo={{
        title: "PROFILE",
        description: "PROFILE",
      }}
    >
      <ProfileContents data={data} />
    </LayoutTemplate>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const queryClient = await usePreFetch("profile", () => getProfile());

  return {
    revalidate: 10,
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export default Profile;
