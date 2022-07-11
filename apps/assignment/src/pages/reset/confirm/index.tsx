import ConfirmContents from "src/components/organisms/reset/confirm/ConfirmContents";
import LayoutTemplate from "src/components/templates/LayoutTemplate";

const Home = () => {
  return (
    <LayoutTemplate
      seo={{
        title: "CONFIRM",
        description: "CONFIRM",
      }}
    >
      <ConfirmContents />
    </LayoutTemplate>
  );
};

export default Home;
