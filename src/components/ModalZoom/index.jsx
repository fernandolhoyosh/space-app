import styled from "styled-components";
import Imagen from "../Galeria/Imagen";
import BotonIcono from "../BotonIcono";
import useFotoModal from "../../hooks/useFotoModal";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
`;

const DialogStyle = styled.dialog`
  position: fixed;
  padding: 0;
  border: 0;
  display: flex;
  justify-content: center;
  width: 90%;
  top: 10%;
  background: transparent;
  z-index: 2;

  form {
    width:0;
  }
  form > button {
    position: relative;
    top: 20px;
    right: 60px;
  }

  @media (min-width: 744px) and (max-width: 1425px) {
    width: 96%;
  }

  @media (max-width: 743px) {
    form > button {
    top: 10px;
    right: 30px;
  }
  }
`;

const ModalZoom = () => {
  const { estaAbiertoModal, fotoSeleccionada, cerrarModal } = useFotoModal();

  return (
    <>
      {estaAbiertoModal && (
        <>
          <Overlay />
          <DialogStyle open={!!fotoSeleccionada} onClose={() => cerrarModal()}>
            {/* {console.log(<DialogStyle />)} */}
            <Imagen foto={fotoSeleccionada} expandida={true} />
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
