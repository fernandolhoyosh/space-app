import styled from "styled-components"
import tags from "./tags.json"

const ContainerTags = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    font-size: 24px;

    @media (min-width: 744px) and (max-width: 1425px) {
        gap: 16px;
    }

    @media (max-width: 743px) {
        justify-content: center;
        flex-wrap: wrap;
        gap: 6px;
    }
`

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;

    @media (max-width: 743px) {
        margin-bottom: 18px;
        text-align: center;
        font-size: 20px;
        flex-basis: 100%;
    }
`

const BotonTag = styled.button`
    font-size: 24px;
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

    @media (min-width: 744px) and (max-width: 1425px) {
        font-size: 20px;
    }

    @media (max-width: 743px) {
        padding: 6px 4px;
        font-size: 14px;
    }
`

const Tags = (props) => {
    const {filtrarFotosPorTag} = props

    return <ContainerTags>
        <TagTitulo>Buscar por tags:</TagTitulo>
        {tags.map(tag => {
            return <BotonTag key={tag.id} onClick={()=>filtrarFotosPorTag(tag.id)}>{tag.titulo}</BotonTag>
        })}
    </ContainerTags>
}

export default Tags