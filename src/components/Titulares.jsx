import { connect } from "react-redux";
import "./Styles/titulares.css";
import { useState } from "react";

// import {ForThreeThree,ThreeForThree,ForForTwo} from './Formations/Positions'

import Position from "./Formations/Positions";
import PositionTwo from "./Formations/PositionTwo";
import PositioThree from "./Formations/PositionThree";

const Titulares = ({ titulares, EliminarTitular }) => {
  const [Formation, setFormation] = useState("4-3-3");

  return (
    <section className="container_Titulares">
      <h2>Titulares</h2>

      {Formation === "4-3-3" ? (
        <Position EliminarTitular={EliminarTitular} titulares={titulares} />
      ) : Formation === "3-4-3" ? (
        <PositionTwo EliminarTitular={EliminarTitular} titulares={titulares} />
      ) : Formation === "4-4-2" ? (
        <PositioThree EliminarTitular={EliminarTitular} titulares={titulares} />
      ) : null}

      <div className="Fomaciones">
        <p onClick={() => setFormation("4-3-3", console.log(Formation))}>
          4-3-3
        </p>
        <p onClick={() => setFormation("3-4-3", console.log(Formation))}>
          3-4-3
        </p>
        <p onClick={() => setFormation("4-4-2", console.log(Formation))}>
          4-4-2
        </p>
      </div>
    </section>
  );
};

//resivimos el estado que trae los titulares para poder pasarlos por parametros al componente y mapearlos
const mapStateToProps = (state) => ({
  titulares: state.titulares,
});

//enviamos a los actions, el jugador con un type
const mapDispastchToProps = (dispatch) => ({
  //pasamos por paremetros la funcion que trae el jugador
  EliminarTitular(jugador) {
    //despachamos un type, y el jugador
    dispatch({
      type: "ELIMINAR_TITULAR",
      jugador,
    });
  },
});

//hacemos la coneccion con la store y resivimos dos parametros, el primero mapea el state y lo pasa props
//el segundo mapea todos los actions y los pasa a props
export default connect(mapStateToProps, mapDispastchToProps)(Titulares);
