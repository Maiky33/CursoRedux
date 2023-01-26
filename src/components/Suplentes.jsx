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

const mapStateToProps = (state) => ({
  suplentes: state.suplentes,
});

const mapDispastchToProps = dispatch => ({  
  EliminarSuplente(jugador) {  
    dispatch({  
      type: "ELIMINAR_SUPLENTE",
      jugador
    })          
  }
})

export default connect(mapStateToProps, mapDispastchToProps)(Suplentes);