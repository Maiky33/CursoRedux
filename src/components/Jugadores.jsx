import { connect } from 'react-redux'//react-redux, deja connectar con la store
import './Styles/jugadores.css'

const Jugadores = ({jugadores,agregarTitular,agregarSuplentes}) => (

  <section className='container_jugadores'>
    <h2>Jugadores</h2>
    <div className="Jugadores">
      {
        jugadores.map(j => (  
          <article className='jugador' key={j.id}>
            <h3>{j.nombre}</h3>
            <img className='image_jugadores' src={j.foto} alt={j.nombre} />
            <div className='Container_buttons'> 
              <button className='Buttons_T_S' onClick={()=>agregarTitular(j)}>T</button>
              <button className='Buttons_T_S' onClick={()=>agregarSuplentes(j)}>S</button>
            </div>
          </article>
        ))
      }
    </div>
  </section>
);

//resivimos el estado que trae los jugadores para poder pasarlos por parametros al componente y mapearlos
const mapStateToProps = state => ({  
  jugadores: state.jugadores
})

const mapDispastchToProps = dispatch => ({ //enviamos a los actions el jugador con un type 

  agregarTitular(jugador) { //pasamos por paremetros la funcion que trae el jugador
    
    dispatch({  //despachamos un type, y el jugador 
      type: "AGREGAR_TITULAR",
      jugador
    })
  },
  agregarSuplentes(jugador) {  
    dispatch({  
      type: "AGREGAR_SUPLENTE",
      jugador
    })
  }
})


//hacemos la coneccion con la store y resivimos dos parametros, el primero mapea el state y lo pasa props
//el segundo mapea todos los actions y los pasa a props
export default connect(mapStateToProps,mapDispastchToProps)(Jugadores);
