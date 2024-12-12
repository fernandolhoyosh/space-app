import { styled } from "styled-components";

const FigureEstilizada = styled.figure`
  background-image: ${(props) => `url(${props.$backgroundImage})`};
  flex-grow: 1;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  height: 328px;
  margin: 0;
  border-radius: 20px;
  max-width: 100%;
  background-position: center;
  background-size: cover;

  @media (min-width: 1px) and (max-width: 1425px) {
    height: auto;
  }

  @media (max-width: 743px) {
    height: 150px;
  }
`;

const TituloEstilizado = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  max-width: 300px;
  padding: 0 64px;
  margin: 0;

  @media (min-width: 744px) and (max-width: 1425px) {
    padding: 0 24px;
    font-size: 32px;
  }

  @media (max-width: 743px) {
    font-size: 24px;
    line-height: 40px;
  }
`;

const Banner = ({ texto, backgroundImage }) => {
  return (
    <FigureEstilizada $backgroundImage={backgroundImage}>
      <TituloEstilizado>{texto}</TituloEstilizado>
    </FigureEstilizada>
  );
};

export default Banner;
