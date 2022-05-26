import React, { useReducer, useRef } from 'react';
import { patientReducer, patientState } from '../../reducer/patientsReducer';

const Patientmanagement = () => {
      const nameRef = useRef()
      const [state, dispatch] = useReducer(patientReducer,patientState);
      const handleSubmitt = (event)=>{
            event.preventDefault();

            dispatch({
                  type : 'ADD_PATIENT',
                  name : nameRef.current.value,
                  id : state.patients.length + 1

            })
            nameRef.current.value ='';

      }
      return (
            <div>
                  <h1>Patient management : {state.patients.length} </h1>
                  <form onSubmit={handleSubmitt}>
                        <input ref={nameRef} type="text" />
                  </form>
                  {state.patients.map(pt =><li key={pt.key}
                  onClick={()=> dispatch({type:'REMOVE_PATIENT', id:pt.id})}
                  >{pt.name}</li>)}
            </div>
      );
};

export default Patientmanagement;