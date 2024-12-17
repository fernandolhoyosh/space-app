import Tags from "./Tags";
import Titulo from "../Titulo";
import Populares from "./Populares";
import styled from "styled-components";
import Imagen from "./Imagen";
import Cargando from "../Cargando";

const GaleriaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;

  @media (min-width: 744px) and (max-width: 1425px) {
    gap: 20px;
  }

  @media (max-width: 743px) {
    flex-direction: column;
  }
`;
const SeccionFluida = styled.section`
  display: flex;
  flex-direction: column;

`;

const FigureContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

const Galeria = (props) => {
  const { fotos = [], abrirFoto, alternarFavorito, filtrarFotosPorTag } = props;
  return (
    <>
      <Tags filtrarFotosPorTag= {filtrarFotosPorTag} />
      <GaleriaContainer>
      {
      fotos.length == 0 ? <Cargando /> : 
        <SeccionFluida>
          <Titulo>Navegue por la galeria</Titulo>
          <FigureContainer>
            {fotos.map((foto) => (
              <Imagen key={foto.id} foto={foto} solicitarZoom={abrirFoto} alternarFavorito={alternarFavorito} />
            ))}
          </FigureContainer>
        </SeccionFluida>
        }
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
