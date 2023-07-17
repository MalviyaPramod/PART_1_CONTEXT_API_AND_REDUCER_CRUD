import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from './GlobalProvider'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap-v5';
import Table from 'react-bootstrap/Table';
const intit = {
  name:'',
  email:''
}
const EmployeeList = () => {
  const { state, addEmployee, editEmployee, updateEmployee, deleteEmployee} = useContext(GlobalContext);

  const [employee, setEmployee] = useState(state);
  
  const inputHandle = (e) => {
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
      setEmployee(state)
    }else{
      updateEmployee(employee)
      setEmployee(state)
    }
  }

  useEffect(()=>{
    setEmployee(state)
  },[state])
  
  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <Form onSubmit={handleSubmit} className='mt-5'>

              <Form.Group controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  name="name"
                  value={employee.name}
                  onChange={inputHandle}
                />
              </Form.Group>
              <Form.Group controlId="validationCustom02">
                <Form.Label>Email name</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Email name"
                  name="email"
                  value={employee.email}
                  onChange={inputHandle}
                />

              </Form.Group>
              <Button type="submit" className='mt-3'>Submit</Button>
            </Form>
          </Col>
          <Col md={6}>
            <Table striped bordered hover size="sm" className='mt-5'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {state.Toatallist.map((elements, index) => {
                  return (
                    <tr key={index}>
                      <td>{elements.id}</td>
                      <td>{elements.name}</td>
                      <td>{elements.email}</td>
                      <td>
                        <Button variant="outline-success" onClick={()=>{editEmployee(elements)}}>Edit</Button>
                      | <Button variant="outline-danger" onClick={()=>{deleteEmployee(elements.id)}}>Detele</Button></td>
                    </tr>
                  )
                })}


              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default EmployeeList