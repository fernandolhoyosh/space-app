import styled from "styled-components";
import Titulo from "../../Titulo";
import fotos from "./fotos-populares.json"

const ContainerPopulares = styled.section``

const ContainerFotos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`
const Foto = styled.img`
    border-radius: 20px;
    max-width: 212px;
    height: 158px;
`

const BotonVerMas = styled.button`
    margin-top: 24px;
    padding: 14px;
    width: 100%;
    font-size: 20px;
    color: #FFFFFF;
    border-radius: 10px;
    border: 2px solid;
    border-color: #7B78E5;
    background: transparent;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        /* background-color: #7B78E5; */
        background: linear-gradient(to right, #7B78E5, #3a3986);
    }

`

const Populares = () => {
  return (
    <ContainerPopulares>
      <Titulo $align="center">Populares</Titulo>
      <ContainerFotos>
        {fotos.map((foto => {
           return <Foto key={foto.id} src={foto.path} alt={foto.alt} />
        }))}
      </ContainerFotos>
        <BotonVerMas>Ver más</BotonVerMas>
    </ContainerPopulares>
  );
};

export default Populares;
