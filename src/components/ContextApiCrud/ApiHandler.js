import axios from "axios";

export const addEmployee = async (data) => {
    return axios.post(`https://643133313adb159651675889.mockapi.io/crud/crud-system`, data)
}

export const getEmployee = async() => {
  return axios.get(`https://643133313adb159651675889.mockapi.io/crud/crud-system`)
}

export const deleteApiHandler = async(id)=>{
  return axios.delete(`https://643133313adb159651675889.mockapi.io/crud/crud-system/${id}`)
}

export const updateApiHandler = async(data)=>{
  return axios.put(`https://643133313adb159651675889.mockapi.io/crud/crud-system/${data.id}`, data)
}

