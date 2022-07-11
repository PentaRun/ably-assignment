import {
  HsContainer,
  HsText,
  HsTextField,
  HsButton,
} from "@hs-platforms/hs-core-ui";
import { useRouter } from "next/router";
import React from "react";
import { resetRequest } from "src/apis/auth";
import { useMutate } from "src/hooks/useMutate";
import rootStore from "src/models/RootStore";

const RequestContents = () => {
  const router = useRouter();
  const { authStore } = rootStore;
  const [email, setEmail] = React.useState("");

  const { setter: requestSetter } = useMutate({
    getFetch: resetRequest,
    onSuccess: (data) => {
      authStore.setResetConfig({
        ...authStore.getResetConfig(),
        email: email,
        issueToken: data.issueToken,
        remainMillisecond: data.remainMillisecond,
      });
      router.push("/reset/confirm");
    },
    onError: () => alert("인증코드 발급에 실패했습니다"),
    successMsg: "인증코드 발급 성공",
  });

  const onClickReset = () => {
    if (email.length == 0) {
      alert("이메일을 입력해주세요");
      return;
    }
    requestSetter({
      email,
    });
  };

  return (
    <HsContainer
      borderRadius={"4px"}
      padding={"50px"}
      margin={"100px 0 0 0"}
      boxShadow={"0 35px 32px 0 rgba(78, 74, 74, 0.11)"}
      backgroundColor={"white"}
    >
      <HsText textAlign={"center"} variant={"h2"} margin={"0 0 40px 0"}>
        인증코드 발급
      </HsText>
      <HsText margin={"0 0 10px 0"} fontWeight={500} fontSize={"1.2rem"}>
        이메일
      </HsText>
      <HsTextField
        value={email}
        placeholder={"이메일을 입력해주세요"}
        onChange={(e) => setEmail(e.target.value)}
      />
      <HsButton margin={"30px 0 0 0"} padding={"15px"} onClick={onClickReset}>
        다음
      </HsButton>
    </HsContainer>
  );
};

export default RequestContents;
