import React from 'react'
import { FirstName, LastName } from './contextApiLearning'
const ContextB = () => {
  return (
    <>

       <FirstName.Consumer>
        {(firstname) => {
          return (
            <LastName.Consumer>
              {(lastname) => {
                return (
                  <h4>My Name is {firstname} and {lastname}</h4>
                )
              }}
            </LastName.Consumer>
          )
        }}
      </FirstName.Consumer>
    </>
  )
}

export default ContextB