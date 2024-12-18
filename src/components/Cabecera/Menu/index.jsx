import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import styled from "styled-components";
import BarraLateral from "../../BarraLateral";
import BotonIcono from "../../BotonIcono";

const DialogMenu = styled.dialog`
  margin: 0;
  padding: 40px 8px 21px 24px;
  background: linear-gradient(175deg, #041833 4.16%, #04244f 48%,#154580 96.76%);
  box-shadow: 3px 3px 10px rgba(0,0,0,0.5);
  display: flex;
  border: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index:1;

  form {
    width: 0;
  }
  form > button {
    position: absolute;
    top: 8px;
    right: 8px;
  }

  @media (min-width: 744px) {
    display: none;
  }
`;

const Menu = () => {

  const {menu, setMenu} = useContext(GlobalContext);

  return (
    <>
      {menu && (
        <DialogMenu open={!!menu} onClose={() => setMenu(null)} onMouseLeave={() => setMenu(null)}>
          <BarraLateral mostrarBarra={menu} />
          <form method="dialog">
            <BotonIcono formMethod="dialog">
              <img src="/iconos/cerrar.png" alt="Icono Cerrar" />
            </BotonIcono>
          </form>
        </DialogMenu>
      )}
    </>
  );
};

export default Menu;
