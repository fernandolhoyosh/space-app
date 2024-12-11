import Tags from "./Tags";
import Titulo from "../Titulo";
import Populares from "./Populares";
import styled from "styled-components";
import Imagen from "./Imagen";

const GaleriaContainer = styled.div`
  display: flex;
  gap: 24px;
`;
const SeccionFluida = styled.section`
  flex-grow: 1;
`;

const FigureContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

const Galeria = (props) => {
  const { fotos = [], abrirFoto } = props;
  return (
    <>
      <Tags />
      <GaleriaContainer>
        <SeccionFluida>
          <Titulo>Navegue por la galeria</Titulo>
          <FigureContainer>
            {fotos.map((foto) => (
              <Imagen key={foto.id} foto={foto} solicitarZoom={abrirFoto} />
            ))}
          </FigureContainer>
        </SeccionFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
