import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

import {GlobalProvider} from './GlobalState';

const EmployeeList = () => {
  const [formName, setFormName] = useState("create"); // create, edit
  const [isFormEdit, setIsFormEdit] = useState(false); // create
  const {state, addEmployee, updateEmployee, resetEmployee} = useContext(GlobalProvider)
  const [employee, setEmployee] = useState(state);
  const inputHandler = (e) =>{
    const { name, value } = e.target;
    setEmployee(() => {
      return {
        ...employee,
        [name]: value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(state.name === "" && state.email === ""){
      addEmployee(employee)
      resetEmployee()
    }else{
      updateEmployee(employee)
      resetEmployee()
    }
    
  }
  
  useEffect(()=>{
    setEmployee(state)
  },[state])
 
  return (
    <>
      <Form onSubmit={handleSubmit} className='mt-5'>
        <Row className="mb-3">
          <Form.Group>
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Name"
              name="name"
              value={employee.name}
              onChange={inputHandler}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Email"
              name="email"
              value={employee.email}
              onChange={inputHandler}
            />
          </Form.Group>

        </Row>

        <Button type="submit">Submit</Button>
      </Form>
    </>
  )
}

export default EmployeeList