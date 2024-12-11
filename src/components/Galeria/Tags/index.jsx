import styled from "styled-components"
import tags from "./tags.json"

const ContainerTags = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    font-size: 24px;
    margin-top: 56px;
`

const TagTitulo = styled.h3`
    color: #D9D9D9;
    margin: 0;
`

const BotonTag = styled.button`
    border-radius: 10px;
    cursor: pointer;
    border: 2px solid transparent;
    color: #FFFFFF;
    padding: 10px 8px;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0.3);
    &:hover {
        border-color: #7B78E5;
    }



`

const Tags = () => {
    return <ContainerTags>
        <TagTitulo>Buscar por tags:</TagTitulo>
        {tags.map(tag => {
            return <BotonTag key={tag.id}>{tag.titulo}</BotonTag>
        })}
    </ContainerTags>
}

export default Tags