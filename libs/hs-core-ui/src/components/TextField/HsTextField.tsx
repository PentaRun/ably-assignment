import styled from "@emotion/styled";
import { SpaceProps } from "styled-system";

interface TextFieldProps extends SpaceProps {
  height?: number;
}

const DefaultTextFieldLayout = styled.div``;

const DefaultTextFieldStyle = styled.input<TextFieldProps>`
  width: 100%;
  line-height: 1.1;
  border: none;
  border-radius: 4px;
  padding: 0 16px;
  flex: 1 1 auto;
  font-size: 16px;
  color: #74747e;
  background-color: transparent;
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
  &:focus-within {
    border: 1px solid #007aff;
  }
  ${(props) => (props.height ? `height : ${props.height}px` : "height : 48px")};
  ::placeholder {
    color: #74747e;
  }
`;

const HsTextField = ({
  value,
  onChange,
  placeholder,
  type,
}: {
  value: string;
  onChange: any;
  placeholder?: string;
  type?: string;
}) => {
  return (
    <DefaultTextFieldLayout>
      <DefaultTextFieldStyle
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
      />
    </DefaultTextFieldLayout>
  );
};

export default HsTextField;
