import React, { createContext, useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap-v5'
import  ContextA  from './ContextA';

const FirstName = createContext()
const LastName = createContext();
const ContextApiLearning = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <FirstName.Provider value={'Pramod'}>
              <LastName.Provider value={"Malviya Software"}>
                <ContextA />
              </LastName.Provider>
             </FirstName.Provider>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ContextApiLearning
export {FirstName, LastName};