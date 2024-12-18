import { createContext, useEffect, useState } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [dataApi, setDataApi] = useState([]);
  const [fotosGaleria, setFotosGaleria] = useState([]);
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null);
  const [filtroInput, setFiltroInput] = useState("");
  const [tag, setTag] = useState(0);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:3000/fotos");
        const data = await response.json();
        setDataApi([...data]);
        setFotosGaleria([...data]);
      } catch (error) {
        console.error("Error al obtener los datos: ", error);
      }
    };
    setTimeout(() => getData(), 3000);
  }, []);

  useEffect(() => {
    const fotosFiltradas = dataApi.filter((foto) => {
      const filtroTag = !tag || foto.tagId === tag;
      const filtroText = !filtroInput || foto.titulo.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "")
          .includes(filtroInput.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, ""));
      return filtroTag && filtroText;
    });
    setFotosGaleria(fotosFiltradas);
  }, [tag, filtroInput]);

  const alternarFavorito = (foto) => {
    if (foto.id === fotoSeleccionada?.id) {
      setFotoSeleccionada({
        ...fotoSeleccionada,
        favorita: !foto.favorita,
      });
    }
    setFotosGaleria(
      fotosGaleria.map((fotoGaleria) => {
        return {
          ...fotoGaleria,
          favorita:
            fotoGaleria.id === foto.id ? !foto.favorita : fotoGaleria.favorita,
        };
      })
    );
  };

  return (
    <GlobalContext.Provider
      value={{
        menu,
        setMenu,
        fotosGaleria,
        setFotosGaleria,
        fotoSeleccionada,
        setFotoSeleccionada,
        setTag,
        setFiltroInput,
        alternarFavorito,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
