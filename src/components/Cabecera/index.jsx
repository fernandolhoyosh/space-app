import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
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

  @media (min-width: 1px) and (max-width: 743px) {
    flex-direction: column;
    align-items: end;
    gap: 40px;
    padding: 25px 0;
    img {
      width: 157px;
    }
  }
`;

  const BotonMenu = styled.button`
    display: none;
    position: absolute;
    top: 36px;
    left: 24px;
    padding: 0;
    cursor: pointer;
    border: none;
    background: transparent;
    width: 36px;
    height: 36px;

    & > img {
      width: 36px;
      height: 36px;
    }

    @media (max-width: 743px) {
      display: block;
    }

  `

const Cabecera = () => {

  const {menu, setMenu} = useContext(GlobalContext)

  return (
    <HeaderEstilizado>
      <BotonMenu onClick={() => setMenu(!menu)}>
        <img src="iconos/menu.png" alt="Icono Menu" />
      </BotonMenu>
      <img src="img/logo.png" alt="Logo de Space App" />
      <CampoTexto />
    </HeaderEstilizado>
  );
};

export default Cabecera;
