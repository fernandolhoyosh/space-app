import styled from "styled-components";
import BotonIcono from "../../BotonIcono";

const Figure = styled.figure`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  margin: 0;
  width: ${(props) => (props.$expandida ? "90%" : "448px")};
  max-width: 100%;
  flex-grow: 1;
  & > img {
    max-width: 100%;
    height: ${(props) => (props.$expandida ? "660px" : "256px")};
    border-radius: 20px 20px 0 0;
  }

  @media (min-width: 1112px) and (max-width: 1425px) {
    width: ${(props) => (props.$expandida ? "100%" : "350px")};
    & > img {
      height: ${(props) => (props.$expandida ? "560px" : "200px")};
    }
  }

  @media (min-width: 744px) and (max-width: 1111px) {
    width: ${(props) => (props.$expandida ? "100%" : "245px")};
    & > img {
      height: ${(props) => (props.$expandida ? "460px" : "150px")};
    }
  }

`;

const ContainerFooter = styled.footer`
  display: flex;
  border-radius: 0px 0px 20px 20px;
  box-sizing: border-box;
  justify-content: space-between;
  padding: 16px;
  background-color: #001634;

  @media (min-width: 744px) and (max-width: 1425px) {
    padding: 14px;
  }
`;

const Figcaption = styled.figcaption`
  h3,
  p {
    margin: 0;
    color: #ffffff;
    font-size: 1rem;
  }

  h3 {
    font-family: "GandhiSansBold";
  }

  p {
    flex-grow: 1;
  }

  @media (min-width: 744px) and (max-width: 1425px) {
    h3 {
      font-size: 14px;
    }

    p {
      font-size: 10px;
    }
  }
`;

const ContainerBotones = styled.div`
  display: flex;
  align-items: end;
  gap: 24px;

  @media (min-width: 744px) and (max-width: 1425px) {
    gap: 16px;
  }
`;

const Imagen = (props) => {
  const { foto, expandida = false, solicitarZoom, alternarFavorito } = props;
  const { id, titulo, path, fuente, favorita } = props.foto;

  const iconoFavorito = favorita ? "/iconos/favorito-activo.png" : "/iconos/favorito.png";

  return (
    <Figure $expandida={expandida} id={`foto-${id}`}>
      <img src={path} alt={titulo} />
      <ContainerFooter>
        <Figcaption>
          <h3>{titulo}</h3>
          <p>{fuente}</p>
        </Figcaption>
        <ContainerBotones>
          <BotonIcono onClick={()=>alternarFavorito(foto)}>
            <img src={iconoFavorito} alt="Icono Favorito" />
          </BotonIcono>
          { !expandida && <BotonIcono aria-hidden={expandida} onClick={() => solicitarZoom(foto)}>
            <img src="/iconos/expandir.png" alt="Icono Expandir" />
          </BotonIcono> }
        </ContainerBotones>
      </ContainerFooter>
    </Figure>
  );
};

export default Imagen;
