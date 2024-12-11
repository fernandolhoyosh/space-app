import styled from "styled-components";
import Imagen from "../Galeria/Imagen";
import BotonIcono from "../BotonIcono";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const DialogStyle = styled.dialog`
  position: fixed;
  padding: 0;
  border: 0;
  display: flex;
  justify-content: center;
  width: 1156px;
  height: 740px;
  top: 100px;
  background: transparent;

  form > button {
    position: relative;
    top: 20px;
    right: 60px;
  }
`;

const ModalZoom = (props) => {
  const { foto, alCerrar, alternarFavorito } = props;

  return (
    <>
      {foto && (
        <>
          <Overlay />
          <DialogStyle open={!!foto} onClose={alCerrar}>
            {console.log(<DialogStyle />)}
            <Imagen foto={foto} expandida={true} alternarFavorito={alternarFavorito} />
            <form method="dialog">
              <BotonIcono formMethod="dialog">
                <img src="/iconos/cerrar.png" alt="Icono Cerrar" />
              </BotonIcono>
            </form>
          </DialogStyle>
        </>
      )}
    </>
  );
};

export default ModalZoom;
