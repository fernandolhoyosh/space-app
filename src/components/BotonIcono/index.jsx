import { styled } from "styled-components";

const BotonIcono = styled.button`
  padding: 0;
  display: flex;
  align-items: end;
  background: transparent;
  border: none;
  cursor: pointer;

  @media(max-width: 744px) {
    & > img {
      width: 16px;
      height: 16px;
    }
  }
`;

export default BotonIcono;
