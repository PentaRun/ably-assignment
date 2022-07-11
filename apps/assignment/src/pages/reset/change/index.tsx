import ChangeContents from "src/components/organisms/reset/change/ChangeContents";
import LayoutTemplate from "src/components/templates/LayoutTemplate";

const Home = () => {
  return (
    <LayoutTemplate
      seo={{
        title: "CHANGE",
        description: "CHANGE",
      }}
    >
      <ChangeContents />
    </LayoutTemplate>
  );
};

export default Home;
