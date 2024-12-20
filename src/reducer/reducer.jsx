const initialState = {
    fotosGaleria: [],
    filtroInput: '',
    filtroTag: 0,
    fotoSeleccionada: null,
    modalAbierto: false
  }

  const reducer = (state, action) => {
    switch(action.type) {
      case 'SET_FOTOS_GALERIA':
        return {...state, fotosGaleria: action.payload}
      case 'SET_FILTRO':
        return {...state, filtroInput: action.payload}
      case 'SET_TAG':
        return {...state, filtroTag: action.payload}
      case 'SET_FOTO_SELECCIONADA':
        return {...state,
          fotoSeleccionada: action.payload,
          modalAbierto: action.payload != null ? true : false
        }
      case 'ALTERNAR_FAVORITO':
        { const fotosGaleria = state.fotosGaleria.map((fotoGaleria) => {
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
      } }
        default:
          return state;
    }
  }

  export {initialState, reducer}