import { connect } from 'react-redux'
import Cancha from "./Styles/images/cancha.png"
import "./Styles/titulares.css"







const Titulares = ({ titulares, EliminarTitular}) => { 

    
  return (

    
    <section className="container_Titulares">


      <div className='Fomaciones'> 
        <p >4-3-3</p>
        <p >3-4-3</p>
      </div>

      <h2>Titulares</h2>

      <div
        id="Titular"
        style={{
          backgroundImage: `url(${Cancha})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}
        className="cancha"
      >

        <div className='zona1'> 
          { titulares.map((j,index) => {  

              if(index === 0){  
                return (    
                  <div key={j.id}>          
                    <img
                      onClick={()=>EliminarTitular(j)}
                      className="imagen_titulares"
                      src={j.foto}
                      alt={j.nombre}
                    />
                  </div>           
                )
              }else{  
                return null
              }
            })
          }
        </div>

        <div className='zona2'> 
          { titulares.map((j,index) => {  
              
            if(index >= 1 && index <= 4){ 

              return (    
                <div key={j.id}>          
                  <img
                    onClick={()=>EliminarTitular(j)}
                    className="imagen_titulares"
                    src={j.foto}
                    alt={j.nombre}
                  />
                </div>          
              )
            }else{  
              return null
            }
          })}
        </div>
        <div className='zona3'>

          {             
            titulares.map((j,index) => {  
              
            if(index >= 5 && index <= 7){ 
              return (    
                <div key={j.id}>          
                  <img
                    onClick={()=>EliminarTitular(j)}
                    className="imagen_titulares"
                    src={j.foto}
                    alt={j.nombre}
                  />
                </div>            
              )
            }else{  
              return null
            }
          })}

        </div>
        <div className='zona4'> 
          { titulares.map((j,index) => {  
                
            if(index >= 8 && index <= 10){ 
    
              return (    
                <div key={j.id}>          
                  <img
                    onClick={()=>EliminarTitular(j)}
                    className="imagen_titulares"
                    src={j.foto}
                    alt={j.nombre}
                  />
                </div>           
              )
            }else{  
              return null
            }

          })}
        </div>
        
      </div>  
      
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
