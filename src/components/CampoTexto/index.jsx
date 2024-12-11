import { useState } from "react";
import styled from "styled-components"
import Search from "./search.png"

const ContainerStyles = styled.div`
    position: relative;
    display: inline-block;
`

const InputStyles = styled.input`
    width: 652px;
    height: 56px;
    border-radius: 10px;
    border: 2px solid #7B78E5;
    background: transparent;
    box-sizing: border-box;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    outline: none;
    padding-right: 50px;
    padding-left: 16px;

    &::placeholder {
        color: #D9D9D9;
    }

`;

const IconoBuscar = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px !important;
    height: 38px;
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