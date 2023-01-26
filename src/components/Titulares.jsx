import { connect } from 'react-redux'
import Cancha from "./Styles/images/cancha.png"
import "./Styles/titulares.css"
import {DragDropContext,Droppable,Draggable} from 'react-beautiful-dnd'



const reorder = (list, startIndex, endIndex) => {  
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed)

  return result
}

const Titulares = ({ titulares,EliminarTitular,Actualizartareas}) => (

  <section className='container_Titulares'>
    <DragDropContext onDragEnd={(result) => { 
      const { source, destination } = result;
      if(!destination){
        return
      }
      if (source.index === destination.index &&
        source.droppableId === destination.droppableId
      ){ 
        return
      }
        
      Actualizartareas (reorder(titulares, source.index, destination.index))
      
    }}>
      
      <h2>Titulares</h2>

      <Droppable droppableId='Titulares' direction='vertical'> 

        {(droppableProvider) =>
          <div {...droppableProvider.droppableProps} ref={droppableProvider.innerRef} style={
            {
              backgroundImage: `url(${Cancha})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize:'100%'
            }
          }
            className="cancha"
          >
          
            {titulares.map((j,index) => (

              
              <article key={j.id.toString()} className="titular">
                <Draggable  draggableId={j.id.toString()} index={index}> 
                  
                  {(dragableProvider)=>
                    <div {...dragableProvider.draggableProps}
                      ref={dragableProvider.innerRef}
                      {...dragableProvider.dragHandleProps}
                    > 
                      <img onClick={()=>{EliminarTitular(j)}} className='imagen_titulares' src={j.foto} alt={j.nombre} />
                      <p className='p_titular'>{j.nombre}</p> 
                    </div>
                  }

                </Draggable> 
              </article>
          
            ))}
            {droppableProvider.placeholder}
          </div>
        }
      </Droppable>

    </DragDropContext>

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
