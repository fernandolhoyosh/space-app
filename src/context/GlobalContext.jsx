import { createContext, useEffect, useReducer, useState } from "react";

const GlobalContext = createContext();

const initialState = {
  filtroInput: '',
  fotosGaleria: [],
  fotoSeleccionada: null
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_FILTRO':
      return {...state, filtroInput: action.payload}
    case 'SET_FOTOS_GALERIA':
      return {...state, fotosGaleria: action.payload}
    case 'SET_FOTO_SELECCIONADA':
      return {...state, fotoSeleccionada: action.payload}
    case 'ALTERNAR_FAVORITO':
      const fotosGaleria = state.fotosGaleria.map((fotoGaleria) => {
        return {
          ...fotoGaleria,
          favorita:
            fotoGaleria.id === action.payload.id ? !action.payload.favorita : fotoGaleria.favorita
        }
      })
      if (action.payload.id === state.fotoSeleccionada?.id) {
        return {
          ...state,
          fotosGaleria: fotosGaleria,
          fotoSeleccionada: {
            ...state.fotoSeleccionada, favorita: !action.payload.favorita
          }
        }
      } else {
        return {
        ...state,
        fotosGaleria: fotosGaleria 
      }
    }
      default:
        return state;
  }
}

const GlobalContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  /* const [dataApi, setDataApi] = useState([]); */
  //const [fotosGaleria, setFotosGaleria] = useState([]);
  //const [fotoSeleccionada, setFotoSeleccionada] = useState(null);
  //const [filtroInput, setFiltroInput] = useState("");
  const [tag, setTag] = useState(0);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:3000/fotos");
        const data = await response.json();
        /* setDataApi([...data]); */
        /* setFotosGaleria([...data]); */
        dispatch({type: 'SET_FOTOS_GALERIA', payload: data})
      } catch (error) {
        console.error("Error al obtener los datos: ", error);
      }
    };
    setTimeout(() => getData(), 3000);
  }, []);


  /* useEffect(() => {
    const fotosFiltradas = dataApi.filter((foto) => {
      const filtroTag = !tag || foto.tagId === tag;
      const filtroText = !filtroInput || foto.titulo.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "")
          .includes(filtroInput.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, ""));
      return filtroTag && filtroText;
    });
    setFotosGaleria(fotosFiltradas);
  }, [tag, filtroInput]); */

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
        menu,
        setMenu,
        setTag,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
