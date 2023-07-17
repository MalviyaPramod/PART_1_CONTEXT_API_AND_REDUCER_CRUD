import React, { useContext } from 'react'
import { FirstName, LastName } from './contextApiLearning'


import ContextB from './ContextB'
const ContextA = () => {
  const fName = useContext(FirstName);
  const lName = useContext(LastName)
  return (
    <>
      <h1>Component B:- and My Name =  {fName} {lName}</h1>
    </>
  )
}

export default ContextA;
