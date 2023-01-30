import { connect } from 'react-redux'
import Cancha from "./Styles/images/cancha.png"
import "./Styles/titulares.css"
import { GridContextProvider, GridDropZone, GridItem,swap} from 'react-grid-dnd'






const Titulares = ({ titulares, EliminarTitular,actualizartitulares}) => { 
  
  
  
  const onChange = (startIndex, endIndex) => {
    const result = [...titulares];
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    
    actualizartitulares(result);
  }
    
  // function onChange(sourceIndex, targetIndex ) {
  //   const result = swap(titulares, sourceIndex, targetIndex);
  //   actualizartitulares(result);
  // }
    
  return (
    
    <section className="container_Titulares">

      <GridContextProvider onChange={onChange}>

        <h2>Titulares</h2>

        
          <GridDropZone
            id="Titular"
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
              
              <GridItem key={j.id} className="titular">
                <div>
                  <img
                    className="imagen_titulares"
                    src={j.foto}
                    alt={j.nombre}
                  />
                     
                  <button className='Eliminate_card' onClick={()=>EliminarTitular(j)}>x</button>
                    
                </div>
              </GridItem>
              
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
  actualizartitulares(newTitulares) {
    dispatch({  
      type: "ACTUALIZAR_TITULARES",
      newTitulares
    })
  }
    
})


//hacemos la coneccion con la store y resivimos dos parametros, el primero mapea el state y lo pasa props
//el segundo mapea todos los actions y los pasa a props
export default connect(mapStateToProps,mapDispastchToProps)(Titulares);
