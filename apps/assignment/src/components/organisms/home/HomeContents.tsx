import {
  HsContainer,
  HsText,
  HsTextField,
  HsButton,
} from "@hs-platforms/hs-core-ui";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { login } from "src/apis/auth";
import { useMutate } from "src/hooks/useMutate";
import { setCookie } from "src/services/utils/cookies";

const HomeContents = () => {
  const router = useRouter();
  const [loginInfo, setLoginInfo] = React.useState({
    email: "",
    password: "",
  });

  const { setter: loginSetter } = useMutate({
    getFetch: login,
    onSuccess: (data) => {
      setCookie("accessToken", data.accessToken);
      router.push("/profile");
    },
    onError: () => alert("아이디와 패스워드를 정확히 입력해주세요"),
    successMsg: "로그인에 성공했습니다",
  });

  const onClickLogin = () => {
    if (loginInfo.email.length == 0) {
      alert("이메일을 입력해주세요");
      return;
    }
    if (loginInfo.password.length == 0) {
      alert("비밀번호를 입력해주세요");
      return;
    }
    loginSetter({
      email: loginInfo.email,
      password: loginInfo.password,
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
        로그인
      </HsText>
      <HsText margin={"0 0 10px 0"} fontWeight={500} fontSize={"1.2rem"}>
        이메일
      </HsText>

      <HsTextField
        value={loginInfo.email}
        placeholder={"이메일을 입력해주세요"}
        onChange={(e) => setLoginInfo({ ...loginInfo, email: e.target.value })}
      />
      <HsText margin={"20px 0 10px 0"} fontWeight={500} fontSize={"1.2rem"}>
        비밀번호
      </HsText>
      <HsTextField
        value={loginInfo.password}
        placeholder={"비밀번호를 입력해주세요"}
        onChange={(e) =>
          setLoginInfo({ ...loginInfo, password: e.target.value })
        }
        type={"password"}
      />
      <HsButton margin={"30px 0 0 0"} padding={"15px"} onClick={onClickLogin}>
        로그인
      </HsButton>
      <Link href={"reset/request"}>
        <HsButton margin={"20px 0 0 0"} padding={"15px"}>
          비밀번호 재설정
        </HsButton>
      </Link>
    </HsContainer>
  );
};

export default HomeContents;
