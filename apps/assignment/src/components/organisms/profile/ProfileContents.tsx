import {
  HsContainer,
  HsText,
  HsImage,
  HsButton,
} from "@hs-platforms/hs-core-ui";
import { useRouter } from "next/router";
import { logout } from "src/apis/auth";
import { useMutate } from "src/hooks/useMutate";
import { removeCookie } from "src/services/utils/cookies";

const ProfileContents = ({ data }: { data }) => {
  const router = useRouter();
  const { setter: logoutSetter } = useMutate({
    getFetch: logout,
    onSuccess: () => {
      removeCookie("accessToken");
      router.push("/");
    },
    onError: () => alert("로그아웃에 실패했습니다"),
    successMsg: "로그아웃 되었습니다",
  });
  return (
    <HsContainer
      borderRadius={"4px"}
      padding={"50px"}
      margin={"100px 0 0 0"}
      boxShadow={"0 35px 32px 0 rgba(78, 74, 74, 0.11)"}
      backgroundColor={"white"}
    >
      <HsText variant={"h2"} margin={"0 0 50px 0"} textAlign={"center"}>
        유저 프로필
      </HsText>
      <HsContainer
        display={"flex"}
        justifyContent={"center"}
        margin={"0 0 30px 0"}
      >
        <HsImage
          src={data.profileImage}
          width={"150px"}
          height={"150px"}
          borderRadius={"50%"}
        />
        <HsContainer margin={"20px 0 0 40px"}>
          <HsText variant={"h3"} margin={"0 0 20px 0"}>
            {data.name}
          </HsText>
          <HsText fontWeight={"500"} fontSize={"1.5rem"} margin={"0 0 30px 0"}>
            {data.email}
          </HsText>
          <HsButton padding={"10px"} onClick={logoutSetter}>
            로그아웃
          </HsButton>
        </HsContainer>
      </HsContainer>
    </HsContainer>
  );
};

export default ProfileContents;
