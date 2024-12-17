import styled from "styled-components";

const LoadingStyle = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

    & > img {
        width: 30vw;
        height: 15vh;
        padding: 1rem;
    }
`

const Cargando = () => {
    return (
        <LoadingStyle>
            <img src="/imagenes/loading.gif" alt="Loading" />
        </LoadingStyle>
    )
}

export default Cargando;