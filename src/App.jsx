import { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Cabecera from "./components/Cabecera";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import banner from "./assets/banner.png";
import Galeria from "./components/Galeria";
import fotos from "./fotos.json";
import ModalZoom from "./components/ModalZoom";
import Footer from "./components/Footer";
import Menu from "./components/Cabecera/Menu";

const FondoGradiente = styled.div`
  background: linear-gradient(
    175deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  padding: 0 24px;
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
  box-sizing: border-box;

  @media (min-width: 744px) and (max-width: 1425px) {
    padding: 0 18px;
  }

  @media (max-width: 380px) {
    padding: 0 12px;
  }
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 56px;

  @media (max-width: 744px){
    gap: 32px;
  }
`;

const ContainerBarraBanner = styled.div`
  display: flex;
  width: 100%;
  gap: 14px;

  @media (min-width: 744px) and (max-width: 1425px) {
    gap: 52px;
  }

  @media (max-width: 743px) {
    gap: 0;
  }
`;

const ContenidoGaleria = styled.section`
  display: flex;
  max-width: 1186px;
  width: 100%;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [fotosGaleria, setFotosGaleria] = useState(fotos);
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null);
  const [filtroInput, setFiltroInput] = useState("");
  const [tag, setTag] = useState(0);
  const [menu, setMenu] = useState(false);

  const activarMenu = () => {
    setMenu(!menu)
  }

  const filtrarFotosPorTag = (idTag) => {
    setTag(idTag);
  };

  useEffect(() => {
    const fotosFiltradas = fotos.filter((foto) => {
      const filtroTag = !tag || foto.tagId === tag;
      return filtroTag;
    });
    setFotosGaleria(fotosFiltradas);
  }, [tag]);

  useEffect(() => {
    const fotosFiltradas = fotos.filter((foto) => {
      const filtroText =
        !filtroInput ||
        foto.titulo.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "")
          .includes(filtroInput.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, ""));
      return filtroText;
    });
    setFotosGaleria(fotosFiltradas);
  }, [filtroInput]);

  const alternarFavorito = (foto) => {
    if (foto.id === fotoSeleccionada?.id) {
      setFotoSeleccionada({
        ...fotoSeleccionada,
        favorita: !foto.favorita,
      });
    }

    setFotosGaleria(
      fotosGaleria.map((fotoGaleria) => {
        return {
          ...fotoGaleria,
          favorita:
            fotoGaleria.id === foto.id ? !foto.favorita : fotoGaleria.favorita,
        };
      })
    );
  };

  return (
    <>
      <FondoGradiente>
        <GlobalStyles />
        <AppContainer>
        <Menu menu={menu} cerrar={() => setMenu(null)} />
          <Cabecera setFiltroInput={setFiltroInput} activarMenu={activarMenu} />
          <MainContainer>
            <ContainerBarraBanner>
              <BarraLateral />
              <Banner
                texto="La galería más completa del espacio"
                backgroundImage={banner}
              />
            </ContainerBarraBanner>
            <ContenidoGaleria>
              <Galeria
                fotos={fotosGaleria}
                abrirFoto={(foto) => setFotoSeleccionada(foto)}
                alternarFavorito={alternarFavorito}
                filtrarFotosPorTag={filtrarFotosPorTag}
              />
            </ContenidoGaleria>
          </MainContainer>
        </AppContainer>
        <ModalZoom
          foto={fotoSeleccionada}
          alCerrar={() => setFotoSeleccionada(null)}
          alternarFavorito={alternarFavorito}
        />
        <Footer />
      </FondoGradiente>
    </>
  );
};

export default App;
