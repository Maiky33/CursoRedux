import { connect } from "react-redux";
import "./Styles/suplentes.css"

const Suplentes = ({ suplentes,EliminarSuplente}) => (
  <section className="Container_suplentes">
    <h2>Suplentes</h2>

    <div className="suplentes">
      {suplentes.map((j) => (
        <article key={j.id}>
          <div>
            <img onClick={()=>EliminarSuplente(j)} className="images_suplente" src={j.foto} alt={j.nombre} />
          </div>
          <p>{j.nombre}</p>
        </article>
      ))}
    </div>
  </section>
);

//resivimos el estado que trae los suplentes para poder pasarlos por parametros al componente y mapearlos
const mapStateToProps = state => ({
  suplentes: state.suplentes
});

//enviamos a los actions, el jugador con un type 
const mapDispastchToProps = dispatch => ({  

  //pasamos por paremetros la funcion que trae el jugador 
  EliminarSuplente(jugador) {  
    //despachamos un type, y el jugador 
    dispatch({  
      type: "ELIMINAR_SUPLENTE",
      jugador
    })          
  }
})


//hacemos la coneccion con la store y resivimos dos parametros, el primero mapea el state y lo pasa props
//el segundo mapea todos los actions y los pasa a props
export default connect(mapStateToProps, mapDispastchToProps)(Suplentes);