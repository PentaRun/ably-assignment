import { keyframes } from "@emotion/react";

export const startFromBottom = keyframes`
    0% {
      opacity: 0%;
      transform: translateY(30px);
    }
    100% {
      opacity: 100%;
      transform: translateY(0px);
    }
	`;
