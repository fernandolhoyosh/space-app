import styled from "styled-components"
import tags from "./tags.json"

const ContainerTags = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    font-size: 24px;

    @media (max-width: 744px) {
        gap: 16px;
  }
`

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
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

    @media (max-width: 744px) {
        font-size: 20px;
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