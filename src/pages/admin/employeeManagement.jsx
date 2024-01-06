/*
import React from 'react';
import {Link} from "react-router-dom";

const employeeManagement = () => {
    const buttonStyleObj1 = {
        backgroundColor: '#B4B4B3',
        borderColor: '#B4B4B3',
        color: 'black',
        marginRight: '10px',
    }

    const buttonStyleObj2 = {
        backgroundColor: '#3282B8',
        borderColor: '#3282B8',
        color: 'white',
    }

    return (
        <div className="contents">
            <div className="section text">
                <h4>직원 관리</h4>
                <div className="form-group">
                    <div className="mb-3">
                        <input type="text" name="searchInput" className="form-style" placeholder="내용을 입력해주세요" id="searchInput"
                               autoComplete="off"/>
                        <button className="btn btn-primary" type="" style={buttonStyleObj2}>찾기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default employeeManagement*/

import React from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button, Table } from 'react-bootstrap';

const employeeManagement = () => {
    const employees = [
        { id: 1, name: '직원1', position: '직위1' },
        { id: 2, name: '직원2', position: '직위2' },
        { id: 3, name: '직원3', position: '직위3' },
        // ... 추가적인 데이터
    ];

    return (
        <Container>
            <Row className="mt-3">
                <Col>
                    <h2>직원관리</h2>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col md={{ span: 6, offset: 6 }}>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="내용을 입력해주세요"
                            aria-label="Employee search"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="primary" id="button-addon2">
                            찾기
                        </Button>
                    </InputGroup>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col>
                    <Table striped bordered hover class="table table-bordered">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>이름</th>
                            <th>직위</th>
                        </tr>
                        </thead>
                        <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.position}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default employeeManagement;


