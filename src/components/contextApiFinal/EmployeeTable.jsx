import React, { useContext, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


import { GlobalProvider } from './GlobalState';

const EmployeeTable = () => {
  const { state, getEditEmployee, deleteEmployee } = useContext(GlobalProvider)
  const Result = state.storeList;
  const [filterList, setFilterList] = useState(Result)

  const filterBySearch = (e) =>{
    const searchItems = e.target.value;
    var updatedList = [...Result];
    updatedList = updatedList.filter((items)=>{
      return items.name.toLowerCase().indexOf(searchItems.toLowerCase()) !== -1;
    })
    setFilterList(updatedList)
  }

  useEffect(()=>{
    setFilterList(Result)
  },[Result])

  return (
    <>
      <Form.Group className='mt-5 mb-2'>
          <Form.Control
            required
            type="text"
            placeholder="Search Items"
            name="search"
            onChange={filterBySearch}
          />
        </Form.Group>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            filterList.map((element, index) => {
              return (
                <tr key={index}>
                  <td>{element.id}</td>
                  <td>{element.name}</td>
                  <td>{element.email}</td>
                  <td><Button variant="success" onClick={()=>{getEditEmployee(element)}}>Edit</Button> | <Button variant="danger" onClick={()=>{deleteEmployee(element.id)}}>Delete</Button></td>
                </tr>
              )

            })
          }
        </tbody>
      </Table>
    </>
  )
}

export default EmployeeTable