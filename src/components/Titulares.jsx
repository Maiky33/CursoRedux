import { connect } from 'react-redux'
import Cancha from "./Styles/images/cancha.png"
import "./Styles/titulares.css"

const Titulares = ({ titulares,EliminarTitular}) => (

  <section className='container_Titulares'>
    <h2>Titulares</h2>

    <div style={
      {
        backgroundImage: `url(${Cancha})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'100%'
      }
    }
      className="cancha"
    >
      
      {titulares.map((j) => (
        <article className="titular" key={j.id}>
          <div> 
            <img onClick={()=>{EliminarTitular(j)}} className='imagen_titulares' src={j.foto} alt={j.nombre} />
          </div>
          <p className='p_titular'>{j.nombre}</p>
        </article>
      ))}

    </div>

  </section>

);

const mapStateToProps = state => ({  
  titulares: state.titulares
})

const mapDispastchToProps = dispatch => ({  
  EliminarTitular(jugador) {  
    dispatch({  
      type: "ELIMINAR_TITULAR",
      jugador
    })   
  }
})


export default connect(mapStateToProps,mapDispastchToProps)(Titulares);
