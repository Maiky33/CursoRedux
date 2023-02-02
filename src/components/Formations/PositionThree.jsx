import Cancha from "../Styles/images/cancha.png";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { connect } from 'react-redux'

const PositionThree = ({titulares, EliminarTitular,Actualizartitulares}) => {

  const reorder = (list, startIndex, endIndex) => { 
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result
  }

  return (
    <DragDropContext onDragEnd={(result) => { 
        const { source, destination } = result
        if (!destination) { 
          return;  
        }
        if(source.index === destination.index && source.droppableId === destination.droppableId){ 
          return;
        }
        Actualizartitulares(reorder(titulares, source.index, destination.index))
      }  
    }>
      <div
        id="Titular"
        style={{
          backgroundImage: `url(${Cancha})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}
        className="cancha"
      >
        <Droppable droppableId="zone1"> 
          {(droppableProvider) =>
            <div {...droppableProvider.droppableProps} ref={droppableProvider.innerRef} className="zona1">
              {titulares.map((j, index) => {
                if (index === 0) {
                  return (
                    <Draggable draggableId={j.id.toString()} index={index} key={j.id}> 
                      {(draggableProvider) =>
                        <div {...draggableProvider.draggableProps}
                          ref={draggableProvider.innerRef}
                          {...draggableProvider.dragHandleProps}
                          
                        >
                          <img
                            onClick={() => EliminarTitular(j)}
                            className="imagen_titulares"
                            src={j.foto}
                            alt={j.nombre}
                          />
                        </div>
                      }
                    </Draggable>
                  );
                } else {
                  return null;
                }
              })}
              {droppableProvider.placeholder}
            </div>
          }
        </Droppable>

        <Droppable droppableId="zone2">
          {(droppableProvider) => (
            <div
              {...droppableProvider.droppableProps}
              ref={droppableProvider.innerRef}
              className="zona2"
            >
              {titulares.map((j, index) => {
                if (index >= 1 && index <= 4) {
                  return (
                    <Draggable
                      key={j.id.toString()}
                      draggableId={j.id.toString()}
                      index={index}
                    >
                      {(draggableProvider) => (
                        <div
                          {...draggableProvider.draggableProps}
                          ref={draggableProvider.innerRef}
                          {...draggableProvider.dragHandleProps}
                        >
                          <img
                            onClick={() => EliminarTitular(j)}
                            className="imagen_titulares"
                            src={j.foto}
                            alt={j.nombre}
                          />
                        </div>
                      )}
                    </Draggable>
                  );
                } else {
                  return null;
                }
              })}

              {droppableProvider.placeholder}
            </div>
          )}
        </Droppable>

        <Droppable droppableId="zone3">
          {(droppableProvider) => (
            <div
              {...droppableProvider.droppableProps}
              ref={droppableProvider.innerRef}
              className="zona3"
            >
              {titulares.map((j, index) => {
                if (index >= 5 && index <= 8) {
                  return (
                    <Draggable
                      key={j.id.toString()}
                      draggableId={j.id.toString()}
                      index={index}
                    >
                      {(draggableProvider) => (
                        <div
                          {...draggableProvider.draggableProps}
                          ref={draggableProvider.innerRef}
                          {...draggableProvider.dragHandleProps}
                        >
                          <img
                            onClick={() => EliminarTitular(j)}
                            className="imagen_titulares"
                            src={j.foto}
                            alt={j.nombre}
                          />
                        </div>
                      )}
                    </Draggable>
                  );
                } else {
                  return null;
                }
              })}
              {droppableProvider.placeholder}
            </div>
          )}
        </Droppable>

        <Droppable droppableId="zone4">
          {(droppableProvider) => (
            <div
              {...droppableProvider.droppableProps}
              ref={droppableProvider.innerRef}
              className="zona4"
            >
              {titulares.map((j, index) => {
                if (index >= 9 && index <= 10) {
                  return (
                    <Draggable
                      key={j.id.toString()}
                      draggableId={j.id.toString()}
                      index={index}
                    >
                      {(draggableProvider) => (
                        <div
                          {...draggableProvider.draggableProps}
                          ref={draggableProvider.innerRef}
                          {...draggableProvider.dragHandleProps}
                        >
                          <img
                            onClick={() => EliminarTitular(j)}
                            className="imagen_titulares"
                            src={j.foto}
                            alt={j.nombre}
                          />
                        </div>
                      )}
                    </Draggable>
                  );
                } else {
                  return null;
                }
              })}
              {droppableProvider.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

const mapStateToProps = state => ({  
  titulares: state.titulares
})

const mapDispastchToProps = dispatch => ({ 

  Actualizartitulares(newTitulares) {
    dispatch({  
      type: "ACTUALIZAR_TITULARES",
      newTitulares
    })
  }  
})
export default connect(mapStateToProps, mapDispastchToProps)(PositionThree);