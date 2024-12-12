import styled from "styled-components";
import CampoTexto from "../CampoTexto";

const HeaderEstilizado = styled.header`
  display: flex;
  width: 100%;
  gap: 58px;
  justify-content: space-between;
  padding: 60px 0;
  box-sizing: border-box;
  img {
    width: 212px;
  }

  @media (min-width: 744px) and (max-width: 1425px) {
    padding: 45px 0;
    img {
      width: 190px;
    }
  }
`;

const Cabecera = (props) => {

  const {setFiltroInput} = props

  return (
    <HeaderEstilizado>
      <img src="img/logo.png" alt="Logo de Space App" />
      <CampoTexto setFiltroInput={setFiltroInput} />
    </HeaderEstilizado>
  );
};

export default Cabecera;
