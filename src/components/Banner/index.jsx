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

  @media (min-width: 744px) and (max-width: 1425px) {
    height: auto;
  }
`;

const TituloEstilizado = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  max-width: 300px;
  padding: 0 64px;

  @media (min-width: 744px) and (max-width: 1425px) {
    font-size: 32px;
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
