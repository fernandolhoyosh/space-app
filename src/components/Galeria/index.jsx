import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";
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

const Galeria = () => {
  const {state} = useContext(GlobalContext);

  const fotosFiltradas = state.fotosGaleria.filter((foto) => {
    const filtroTag = !state.filtroTag || foto.tagId === state.filtroTag
    const filtroText = !state.filtroInput || foto.titulo.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .includes(state.filtroInput.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, ""));
    return filtroText && filtroTag;
  })

  return (
    <>
      <Tags />
      <GaleriaContainer>
      {
      state.fotosGaleria.length == 0 ? <Cargando /> :
        <SeccionFluida>
          <Titulo>Navegue por la galeria</Titulo>
          <FigureContainer>
            {
            fotosFiltradas.map((foto) => (
              <Imagen key={foto.id} foto={foto} />
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
