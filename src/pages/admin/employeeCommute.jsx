import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {Container, Row, Col, Button, Table, InputGroup, FormControl} from 'react-bootstrap';

const EmployeeCommute = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const employees = [
        { id: 1, name: '직원1', position: '직위1', date: '2022-01-01' },
        { id: 2, name: '직원2', position: '직위2', date: '2022-01-02' },
        { id: 3, name: '직원3', position: '직위3', date: '2022-01-03' },
        // ... 추가적인 데이터
    ];

    const handleSearch = () => {
        // 선택된 기간에 따라 검색 등 로직 수행
        console.log('검색 기간:', startDate, endDate);
        // 이후에 실제 검색 로직을 수행하면 됩니다.
    };

    return (
        <Container>
            <Row className="mt-3">
                <Col>
                    <h2>직원근태관리</h2>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col md={6}>
                    {/* 시작일 선택 달력 */}
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        dateFormat="yyyy-MM-dd"
                        placeholderText="시작일 선택"
                        className="form-control mb-2"
                    />

                    {/* 종료일 선택 달력 */}
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        dateFormat="yyyy-MM-dd"
                        placeholderText="종료일 선택"
                        className="form-control mb-3"
                    />

                    {/* 검색 버튼 */}
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
                            <th>날짜</th>
                        </tr>
                        </thead>
                        <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.position}</td>
                                <td>{employee.date}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default EmployeeCommute;
