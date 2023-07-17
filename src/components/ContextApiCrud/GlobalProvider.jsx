import React, { createContext, useEffect, useReducer } from 'react'
import EmployeeList from './EmployeeList'
import AppReducer from './AppReducer'
import axios from 'axios'
import { getEmployee, addEmployee as addEmployee1, deleteApiHandler, updateApiHandler} from './ApiHandler';

const initialState = {
    name: '',
    email: '',
    Toatallist: []
}
const GlobalContext = createContext({})

const GlobalProvider = () => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const addEmployee = async(employee_data) => {
        const { Toatallist, ...data } = employee_data;
        await addEmployee1(data)
        getAll()
    }

    const editEmployee = (data) =>{
        dispatch({
            type:'EDIT_DATA',
            payload:data
        })
    }
    
    const updateEmployee = async(data) =>{
       const { Toatallist, ...remaningItems } = data;
       await updateApiHandler(remaningItems)
       getAll()
    }

    const deleteEmployee = async(id) =>{
       await deleteApiHandler(id)
       getAll()
    }

    const getAll = async() =>{
        const response = await getEmployee()
        dispatch({
            type:'GET_DATA',
            payload:response.data
        })
    }

    useEffect(()=>{
        getAll()
    },[])

    return (
        <>
            <GlobalContext.Provider value={
                { state, addEmployee, editEmployee, updateEmployee, deleteEmployee }
            }>
                <EmployeeList />
            </GlobalContext.Provider>
        </>
    )
}

export default GlobalProvider
export { GlobalContext, getEmployee }