import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Tables = (props) => {
    const data = props.sendGetApiData;
    const [filteredList, setFilteredList] = useState(data);

    /*=====Search Function==== */
    const filterBySearch = (event) => {
        const result = event.target.value;
        var updatedList = [...data];
        updatedList = updatedList.filter((element)=>{
            return element.name.toLowerCase().indexOf(result.toLowerCase()) !== -1;
        })
        setFilteredList(updatedList)
    };

    
    useEffect(() => {
        setFilteredList(data)
    }, [data])
    return (
        <>
            <div className='mt-5'>
                <Form className="d-flex mb-3">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange={filterBySearch }
                    />
                </Form>
                <Table striped bordered hover size="sm" className='table-responsive'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredList.map((element, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{element.id}</td>
                                        <td>{element.name}</td>
                                        <td>{element.email}</td>
                                        <td>
                                            <Button variant="success" onClick={() => { props.getEditData(element) }}>Edit</Button> |
                                            <Button variant="danger" onClick={() => props.deleteData(element.id)}>Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </Table>

            </div>

        </>
    )
}

export default Tables