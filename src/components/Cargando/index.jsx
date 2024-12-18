import styled from "styled-components";

const LoadingStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    & > img {
        width: 30vw;
        height: 15vh;
        padding: 0;
    }

    & > h3 {
        margin: 0;
        color: #FFFFFF;
        text-align: center;
    }

    @media (max-width: 744px) {
        & > img {
        width: 50vw;
        height: 15vh;
        }
    }

    @media (max-width: 360px) {
        & > img {
        width: 80vw;
        height: 15vh;
        }
    }
`

const Cargando = () => {
    return (
        <LoadingStyle>
            <img src="/imagenes/loading.gif" alt="Loading" />
            <h3>No se han encontrado resultados</h3>
        </LoadingStyle>
    )
}

export default Cargando;