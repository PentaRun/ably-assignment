import {
  HsContainer,
  HsText,
  HsTextField,
  HsButton,
} from "@hs-platforms/hs-core-ui";
import { useRouter } from "next/router";
import React from "react";
import { resetConfirm } from "src/apis/auth";
import { useMutate } from "src/hooks/useMutate";
import rootStore from "src/models/RootStore";

const ConfirmContents = () => {
  const router = useRouter();
  const { authStore } = rootStore;
  const [code, setCode] = React.useState("");
  const [seconds, setSeconds] = React.useState(
    authStore.getResetConfig().remainMillisecond / 1000
  );

  const { setter: confirmSetter } = useMutate({
    getFetch: resetConfirm,
    onSuccess: (data) => {
      authStore.setResetConfig({
        ...authStore.getResetConfig(),
        confirmToken: data.confirmToken,
      });
      router.push("/reset/change");
    },
    onError: () => alert("인증코드 검증에 실패했습니다"),
    successMsg: "인증코드 검증에 성공하였습니다",
  });

  const onClickConfirm = () => {
    if (code.length == 0) {
      alert("인증코드를 입력해주세요");
      return;
    }
    confirmSetter({
      email: authStore.getResetConfig().email,
      authCode: authStore.getResetConfig().authCode,
      issueToken: code,
    });
  };

  React.useEffect(() => {
    const timer =
      seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
    return () => clearInterval(timer as any);
  }, [seconds]);

  return (
    <HsContainer
      borderRadius={"4px"}
      padding={"50px"}
      margin={"100px 0 0 0"}
      boxShadow={"0 35px 32px 0 rgba(78, 74, 74, 0.11)"}
      backgroundColor={"white"}
    >
      <HsText textAlign={"center"} variant={"h2"} margin={"0 0 40px 0"}>
        인증코드 검증
      </HsText>
      <HsText margin={"0 0 10px 0"} fontWeight={500} fontSize={"1.2rem"}>
        인증코드
      </HsText>
      <HsTextField
        value={code}
        placeholder={"인증코드를 입력해주세요"}
        onChange={(e) => setCode(e.target.value)}
      />
      <HsText margin={"10px 0"} fontWeight={"bold"} color={"red.primary"}>
        남은 시간 : {Math.floor(seconds / 60)}분 {seconds % 60}초
      </HsText>
      <HsButton margin={"10px 0 0 0"} padding={"15px"} onClick={onClickConfirm}>
        다음
      </HsButton>
    </HsContainer>
  );
};

export default ConfirmContents;
