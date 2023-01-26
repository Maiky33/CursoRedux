import { connect } from 'react-redux'
import Cancha from "./Styles/images/cancha.png"
import "./Styles/titulares.css"
import { GridContextProvider, GridDropZone, GridItem, swap } from 'react-grid-dnd'






const Titulares = ({ titulares, EliminarTitular }) => { 


  function onChange(sourceIndex, targetIndex) {  
    const nextState = swap(titulares, sourceIndex, targetIndex)
    return nextState
  }

  return (
    <section className="container_Titulares">
      <GridContextProvider onChange={onChange()}>
        <h2>Titulares</h2>

        
          <GridDropZone
            id="Zone"
            boxesPerRow={4}
            rowHeight={150}
            style={{
              backgroundImage: `url(${Cancha})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
            }}
            className="cancha"
          >
            {titulares.map((j) => (
              <article key={j.id} className="titular">
                <GridItem key={j.id}>
                  <div>
                    <img
                      
                      className="imagen_titulares"
                      src={j.foto}
                      alt={j.nombre}
                    />
                     
                    <button className='Eliminate_card' onClick={()=>EliminarTitular(j)}>x</button>
                    
                  </div>
                </GridItem>
              </article>
            ))}
          </GridDropZone>
        
      </GridContextProvider>
    </section>
  );
}
  


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
  },
  Actualizartareas(titulares) {  
    dispatch({  
      type: "ACTUALIZAR_TITULARES",
      titulares
    })  
  }
  
})


//hacemos la coneccion con la store y resivimos dos parametros, el primero mapea el state y lo pasa props
//el segundo mapea todos los actions y los pasa a props
export default connect(mapStateToProps,mapDispastchToProps)(Titulares);
