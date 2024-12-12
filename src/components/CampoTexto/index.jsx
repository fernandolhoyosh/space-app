import { useState } from "react";
import styled from "styled-components"
import Search from "./search.png"

const ContainerStyles = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 50%;

    @media (max-width: 1425px) {
        width: 100%;
    }

`

const InputStyles = styled.input`
    width: 100%;
    height: 56px;
    border-radius: 10px;
    border: 2px solid #7B78E5;
    background: transparent;
    box-sizing: border-box;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    outline: none;
    padding-right: 50px;
    padding-left: 16px;

    &::placeholder {
        color: #D9D9D9;
    }

`;

const IconoBuscar = styled.img`
    position: absolute;
    top: 17px;
    right: 10px;
    width: 38px !important;
    height: 38px;

    @media (min-width: 744px) and (max-width: 1425px) {
        top: 14px;
    }

    @media (min-width: 1px) and (max-width: 743px) {
        top: 10px;
    }
`

const CampoTexto = (props) => {

    const {setFiltroInput} = props

    return (
        <ContainerStyles>
            <InputStyles type="text" placeholder="¿Qué estas buscando?" onChange={(e) => setFiltroInput(e.target.value)} />
            <IconoBuscar src={Search} alt="Icono Lupa" />
        </ContainerStyles>
    )
}

export default CampoTexto