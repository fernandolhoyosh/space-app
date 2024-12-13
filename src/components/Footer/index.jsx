import styled from "styled-components";

const FooterStyle = styled.footer`
    margin-top: 70px;
    padding: 24px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
    background-color: #04244f;
    box-sizing: border-box;

    p {
        color: #FFFFFF;
        font-size: 1rem;
        margin: 0;
    }

    @media (min-width: 744px) and (max-width: 1425px) {
        margin-top: 48px;
    }

    @media (max-width: 360px) {
        margin-top: 30px;
        padding: 16px;
        flex-direction: column-reverse;
        gap: 28px;
    }
`;

const ContainerRedesSociales = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    gap: 34px;
    list-style: none;

        li > a {
            display: flex;
        }
`

const Footer = () => {
  return (
    <FooterStyle>
      <ContainerRedesSociales>
        <li>
            <a href="#">
                <img src="/imagenes/redes/facebook.svg" alt="Icono de Facebook" />
            </a>
        </li>
        <li>
            <a href="#">
                <img src="/imagenes/redes/twitter.svg" alt="Icono de Twitter" />
            </a>
        </li>
        <li>
            <a href="#">
                <img src="/imagenes/redes/instagram.svg" alt="Icono de Instagram" />
            </a>
        </li>
      </ContainerRedesSociales>
      <p>Desarrollado por Alura</p>
    </FooterStyle>
  );
};

export default Footer;
