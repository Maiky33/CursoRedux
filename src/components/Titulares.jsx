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

//resivimos el estado que trae los titulares para poder pasarlos por parametros al componente y mapearlos
const mapStateToProps = state => ({  
  titulares: state.titulares
})

//enviamos a los actions, el jugador con un type 
const mapDispastchToProps = dispatch => ({ 
  
  //pasamos por paremetros la funcion que trae el jugador 
  EliminarTitular(jugador) {

    //despachamos un type, y el jugador 
    dispatch({  
      type: "ELIMINAR_TITULAR",
      jugador
    })   
  }
})


//hacemos la coneccion con la store y resivimos dos parametros, el primero mapea el state y lo pasa props
//el segundo mapea todos los actions y los pasa a props
export default connect(mapStateToProps,mapDispastchToProps)(Titulares);
