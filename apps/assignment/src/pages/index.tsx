import HomeContents from "src/components/organisms/home/HomeContents";
import LayoutTemplate from "src/components/templates/LayoutTemplate";

const Home = () => {
  return (
    <LayoutTemplate
      seo={{
        title: "HOME",
        description: "HOME",
      }}
    >
      <HomeContents />
    </LayoutTemplate>
  );
};

export default Home;
