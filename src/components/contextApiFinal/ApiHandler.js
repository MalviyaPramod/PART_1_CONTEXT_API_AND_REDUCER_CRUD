import axios from "axios"

export const addApiHandler = async (data) =>{
  const {storeList, ...remainingItems} = data;
  const response = await axios.post(`https://643133313adb159651675889.mockapi.io/crud/crud-system`, remainingItems)
  return response
}


export const getApiHandler = async (data) =>{
   const response = await axios.get(`https://643133313adb159651675889.mockapi.io/crud/crud-system`)
   return response
}

export const updateApihandler = async (data) =>{
  const {storeList, ...remainingItems} = data;
  const response = await axios.put(`https://643133313adb159651675889.mockapi.io/crud/crud-system/${remainingItems.id}`, remainingItems)
  return response
}

export const deleteApiHandler = async(id) =>{
  const response = await axios.delete(`https://643133313adb159651675889.mockapi.io/crud/crud-system/${id}`)
  return response.data
}


