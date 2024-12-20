import { createContext, useEffect, useReducer, useState } from "react";
import { initialState, reducer } from "../reducer/reducer";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)
  const [menu, setMenu] = useState(false);
  /* const [dataApi, setDataApi] = useState([]); */
  //const [fotosGaleria, setFotosGaleria] = useState([]);
  //const [fotoSeleccionada, setFotoSeleccionada] = useState(null);
  //const [filtroInput, setFiltroInput] = useState("");
  //const [tag, setTag] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:3000/fotos");
        const data = await response.json();
        dispatch({type: 'SET_FOTOS_GALERIA', payload: data})
      } catch (error) {
        console.error("Error al obtener los datos: ", error);
      }
    };
    setTimeout(() => getData(), 3000);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
        menu,
        setMenu
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
