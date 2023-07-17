import React from 'react'
import EmployeeList from './EmployeeList'
import EmployeeTable from './EmployeeTable'
import { Col, Container } from 'react-bootstrap-v5'
import { Row } from 'react-bootstrap'
EmployeeTable
const Employee = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <EmployeeList />
          </Col>
          <Col md={6}>
             <EmployeeTable />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Employee