import styled from "styled-components";

const Titulo = styled.h2`
    font-size: 32px;
    color: #7b78e5;
    text-align: ${props => props.$align ? props.$align : "left" };

    @media (min-width: 744px) and (max-width: 1425px) {
        font-size: 28px;
    }

    @media (max-width: 743px) {
        font-size: 20px;
        text-align: center;
    }
`

export default Titulo