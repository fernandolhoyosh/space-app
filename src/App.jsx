import { GlobalContextProvider } from "./context/GlobalContext";
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Cabecera from "./components/Cabecera";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import banner from "./assets/banner.png";
import Galeria from "./components/Galeria";
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

  return (
    <GlobalContextProvider>
      <FondoGradiente>
        <GlobalStyles />
        <AppContainer>
        <Menu />
          <Cabecera />
          <MainContainer>
            <ContainerBarraBanner>
              <BarraLateral />
              <Banner
                texto="La galería más completa del espacio"
                backgroundImage={banner}
              />
            </ContainerBarraBanner>
            <ContenidoGaleria>
              <Galeria />
            </ContenidoGaleria>
          </MainContainer>
        </AppContainer>
        <ModalZoom />
        <Footer />
      </FondoGradiente>
    </GlobalContextProvider>
  );
};

export default App;
