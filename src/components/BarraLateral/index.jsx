import styled from "styled-components";
import ItemNavegacion from "../ItemNavegacion";

const ListaStyles = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 29px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const BarraLateral = () => {
  const listaNavegacion = ["Inicio", "Más Vistas"];

  return (
    <aside>
      <nav>
        <ListaStyles>
          <ItemNavegacion
            iconoActivo="iconos/home-activo.png"
            iconoInactivo="iconos/home-inactivo.png"
            activo
          >
            Inicio
          </ItemNavegacion>
          <ItemNavegacion
            iconoActivo="iconos/mas-vistas-activo.png"
            iconoInactivo="iconos/mas-vistas-inactivo.png"
          >
            Más Vistas
          </ItemNavegacion>
          <ItemNavegacion
            iconoActivo="iconos/me-gusta-activo.png"
            iconoInactivo="iconos/me-gusta-inactivo.png"
          >
            Más Me Gusta
          </ItemNavegacion>
          <ItemNavegacion
            iconoActivo="iconos/nuevas-activo.png"
            iconoInactivo="iconos/nuevas-inactivo.png"
          >
            Nuevas
          </ItemNavegacion>
          <ItemNavegacion
            iconoActivo="iconos/sorprendeme-activo.png"
            iconoInactivo="iconos/sorprendeme-inactivo.png"
          >
            Sorprendeme
          </ItemNavegacion>
        </ListaStyles>
      </nav>
    </aside>
  );
};

export default BarraLateral;
