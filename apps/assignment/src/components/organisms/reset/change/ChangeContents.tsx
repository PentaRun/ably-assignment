import {
  HsContainer,
  HsText,
  HsTextField,
  HsButton,
} from "@hs-platforms/hs-core-ui";
import { useRouter } from "next/router";
import React from "react";
import { resetChange } from "src/apis/auth";
import { useMutate } from "src/hooks/useMutate";
import rootStore from "src/models/RootStore";

const ChangeContents = () => {
  const router = useRouter();
  const { authStore } = rootStore;
  const [password, setPassword] = React.useState({
    newPassword: "",
    newPasswordConfirm: "",
  });

  const { setter: changeSetter } = useMutate({
    getFetch: resetChange,
    onSuccess: () => {
      router.push("/");
    },
    onError: () => alert("비밀번호 변경에 실패하였습니다"),
    successMsg: "비밀번호 변경에 성공하였습니다",
  });

  const onClickChange = () => {
    if (password.newPassword.length == 0) {
      alert("변경할 비밀번호를 입력해주세요");
      return;
    }
    if (password.newPasswordConfirm.length == 0) {
      alert("변경할 비밀번호를 입력해주세요");
      return;
    }
    changeSetter({
      email: authStore.getResetConfig().email,
      confirmToken: authStore.getResetConfig().confirmToken,
      newPassword: password.newPassword,
      newPasswordConfirm: password.newPasswordConfirm,
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
        비밀번호 변경
      </HsText>
      <HsText margin={"0 0 10px 0"} fontWeight={500} fontSize={"1.2rem"}>
        새로운 비밀번호
      </HsText>
      <HsTextField
        value={password.newPassword}
        placeholder={"새로운 비밀번호"}
        onChange={(e) =>
          setPassword({ ...password, newPassword: e.target.value })
        }
      />
      <HsText margin={"20px 0"} fontWeight={500} fontSize={"1.2rem"}>
        새로운 비밀번호 확인
      </HsText>
      <HsTextField
        value={password.newPasswordConfirm}
        placeholder={"새로운 비밀번호 확인"}
        onChange={(e) =>
          setPassword({ ...password, newPasswordConfirm: e.target.value })
        }
      />
      <HsButton margin={"30px 0 0 0"} padding={"15px"} onClick={onClickChange}>
        다음
      </HsButton>
    </HsContainer>
  );
};

export default ChangeContents;
