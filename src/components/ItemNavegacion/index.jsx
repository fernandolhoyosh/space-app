import styled from "styled-components"

const ItemListStyles = styled.li`
    font-size: 24px;
    margin-bottom: 30px;
    line-height: 28px;
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${props => props.$activo ? "#7B78E5" : "#D9D9D9"};
    font-family: ${props => props.$activo ? "GandhiSansBold" : "GandhiSansRegular"};

`

const ItemNavegacion = (props) => {
    const {children, iconoActivo, iconoInactivo, activo=false} = props;
    return <ItemListStyles $activo={activo}>
        <img src={activo ? iconoActivo : iconoInactivo} alt="Icono" />
        {children}
    </ItemListStyles>
}

export default ItemNavegacion