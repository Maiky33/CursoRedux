import { createStore } from "redux"; // redux Provee la Store.



const initialState = {//Estado Global 
  jugadores: [
    {
      id: 1,
      nombre: "MESSI",
      foto: "https://a.espncdn.com/photo/2020/0910/r743441_597x895_2-3.png",
    },
    {
      id: 2,
      nombre: "RONALDO",
      foto: "https://a.espncdn.com/photo/2020/0910/r743442_597x895_2-3.png",
    },
    {
      id: 3,
      nombre: "MBAPPE",
      foto: "https://media.tycsports.com/files/2021/05/25/285914/kylian-mbappe-carta-90_w416.png",
    }, { 
      id: 4,
      nombre: "NEYMAR JR",
      foto: "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-21/ratings-collective/common/news/player-items/5-skillers/neymar-fifa21-5-star-skiller.png.adapt.crop16x9.652w.png"
    },{ 
      id: 5,
      nombre: "HAZARD",
      foto: "https://a.espncdn.com/photo/2020/0911/r743917_597x895_2-3.png"
    },{ 
      id: 6,
      nombre: "SALAH",
      foto: "https://a.espncdn.com/photo/2020/0910/r743455_597x895_2-3.png"
    },{ 
      id: 7,
      nombre: "CUADRADO",
      foto: "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-21/ratings-collective/common/news/player-items/5-skillers/cuadrado-fifa21-5-star-skiller.png.adapt.crop16x9.652w.png"
    },{ 
      id: 8,
      nombre: "MARCELO",
      foto: "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-21/ratings-collective/common/news/player-items/5-skillers/marcelo-fifa21-5-star-skiller.png.adapt.crop16x9.652w.png"
    },{ 
      id: 9,
      nombre: "HENDERSON",
      foto: "https://a.espncdn.com/photo/2020/0911/r743920_597x895_2-3.png"
    },{ 
      id: 10,
      nombre: "GRIEZMANN",
      foto: "https://a.espncdn.com/photo/2020/0911/r743925_597x895_2-3.png"
    },{ 
      id: 11,
      nombre: "KANE",
      foto: "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-21/ratings-collective/common/news/player-items/best-strikers/24-fifa21-golditems-kane.png.adapt.crop16x9.652w.png"
    },{ 
      id: 12,
      nombre: "LUKAKU",
      foto: "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-21/ratings-collective/common/news/player-items/best-strikers/77-fifa21-golditems-lukaku.png.adapt.crop16x9.652w.png"
    }, { 
      id: 13,
      nombre: 'NEUER',
      foto:'https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-21/ratings-collective/common/news/player-items/best-gk/fifa21-golditems-gk-neuer.png.adapt.crop16x9.652w.png'
    }
  ],
  titulares: [],
  suplentes: [],
};


//recibimos actions en una funcion en este caso reducerEntrenador
const reducerEntrenador = (state = initialState, action) => {
  //reducerEntrenador resive dos parametros el stado inicial y los actions
 
  //resivimos la accion y cada una de estas nos despacha un tipo en este caso type: "AGREGAR_TITULAR"
  if (action.type === "AGREGAR_TITULAR") {
    //si action.type es tal retorna x/y cosa
    return {
      //copiamos todo el state
      ...state,

      //le decimos a state.titulares que concatene el jugador que despacha de actions(action.jugador)
      titulares: state.titulares.concat(action.jugador),

      //y filtramos state.jugadores, que me devuelva todos los que son distintos de el jugador que despacha de actions(action.jugador.id)
      jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
    };
  }

  if (action.type === "AGREGAR_SUPLENTE") { 
    return {
      ...state,
      suplentes: state.suplentes.concat(action.jugador),
      jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
    } 
  }

  if (action.type === "ELIMINAR_TITULAR") { 
    return {  
      ...state,
      titulares: state.titulares.filter(j => j.id !== action.jugador.id),
      jugadores: state.jugadores.concat(action.jugador)
    }
  }

  if (action.type === "ELIMINAR_SUPLENTE") { 
    return {  
      ...state,
      suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
      jugadores: state.jugadores.concat(action.jugador)
    }
  }

  if (action.type === "ACTUALIZAR_TITULARES") { 
    console.log(action.newTitulares)
    return { 
      ...state,
      titulares: action.newTitulares 
    }
  }

  //retornamos el state
  return state;
 
};

export default createStore(reducerEntrenador);//creamos la store y exportamos
