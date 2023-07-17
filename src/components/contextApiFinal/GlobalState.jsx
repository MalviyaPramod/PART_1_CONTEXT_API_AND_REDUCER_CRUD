import React, { createContext, useContext, useEffect, useReducer } from 'react'
import Employee from './Employee'
import AppReducer  from './AppReducer';
import {addApiHandler, getApiHandler, updateApihandler, deleteApiHandler} from './ApiHandler';

const intialState = {
  name:'',
  email:'',
  storeList:[]
}

const GlobalProvider = createContext();

const GlobalState = () => {
  const [state, dispatch] = useReducer(AppReducer, intialState)
  
  const addEmployee = async (data) =>{
    await addApiHandler(data)
    getAll()
  }
  
  const getEditEmployee = (data) =>{
    dispatch({
      type:'EDIT_DATA',
      payload:data
    })
  }
  
  const updateEmployee = async(data) =>{
    await updateApihandler(data)
    getAll()
  }

  const deleteEmployee = async(id) =>{
    await deleteApiHandler(id)
    getAll()
  }

  const resetEmployee = () =>{
    dispatch({
      type:'RESET_DATA',
    })
  }

  const getAll = async() =>{
    const response = await getApiHandler()
    dispatch({
      type:'GET_DATA',
      payload: response.data
    })
  }

  useEffect(()=>{
    getAll()
  }, [])

  return (
    <>
      <GlobalProvider.Provider value={{
          state, 
          addEmployee, 
          getEditEmployee, 
          updateEmployee, 
          deleteEmployee,
          resetEmployee
        }}>
          <Employee/>
      </GlobalProvider.Provider>
    </>
  )
}

export default GlobalState
export {GlobalProvider}
