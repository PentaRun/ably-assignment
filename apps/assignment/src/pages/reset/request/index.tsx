import ResetContents from "src/components/organisms/reset/request/RequestContents";
import LayoutTemplate from "src/components/templates/LayoutTemplate";

const Request = () => {
  return (
    <LayoutTemplate
      seo={{
        title: "REQUEST",
        description: "REQUEST",
      }}
    >
      <ResetContents />
    </LayoutTemplate>
  );
};

export default Request;
