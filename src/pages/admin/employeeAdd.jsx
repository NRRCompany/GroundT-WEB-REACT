import React from 'react';
import {Container, Row, Col, InputGroup, FormControl, Button, Table, Form} from 'react-bootstrap';
import {Link} from "react-router-dom";

const employeeAdd = () => {
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
                    <h2>직원추가/수정</h2>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col>
                    <Form className="form-inline">
                        {/* 아이디 입력창 */}
                        <Form.Group className="mb-3">
                            <Form.Label className="mr-2">아이디</Form.Label>
                            <Form.Control type="text" placeholder="아이디 형식" />
                        </Form.Group>

                        {/* 비밀번호 입력창 */}
                        <Form.Group className="mb-3 ml-3">
                            <Form.Label className="mr-2">비밀번호</Form.Label>
                            <Form.Control type="password" placeholder="비밀번호 형식" />
                        </Form.Group>

                        {/* 비밀번호 확인 입력창 */}
                        <Form.Group className="mb-3 ml-3">
                            <Form.Label className="mr-2">비밀번호 확인</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>

                        {/* 직원명 입력창 */}
                        <Form.Group className="mb-3 ml-3">
                            <Form.Label className="mr-2">직원명</Form.Label>
                            <Form.Control type="text" placeholder="직원명" />
                        </Form.Group>

                        {/* 소속 입력창 */}
                        <Form.Group className="mb-3 ml-3">
                            <Form.Label className="mr-2">소속</Form.Label>
                            <Form.Control type="text" placeholder="소속(드롭다운??)" />
                        </Form.Group>

                        {/* 직책 입력창 */}
                        <Form.Group className="mb-3 ml-3">
                            <Form.Label className="mr-2">직책</Form.Label>
                            <Form.Control type="text" placeholder="직책도 드롭다운??" />
                        </Form.Group>

                        {/* 연락처 입력창 */}
                        <Form.Group className="mb-3 ml-3">
                            <Form.Label className="mr-2">연락처</Form.Label>
                            <Form.Control type="text" placeholder="'-'없이 숫자만 입력하여 주세요" />
                        </Form.Group>

                        {/* 주소 입력창 */}
                        <Form.Group className="mb-3 ml-3">
                            <Form.Label className="mr-2">주소</Form.Label>
                            <Form.Control type="text" placeholder="주소를 입력해주세요" />
                            <Button variant="primary" id="button-addon2">
                                우편번호
                            </Button>
                        </Form.Group>

                        {/* 상세주소 입력창 */}
                        <Form.Group className="mb-3 ml-3">
                            <Form.Label className="mr-2">상세주소</Form.Label>
                            <Form.Control type="text" placeholder="상세주소를 입력해주세요" />
                        </Form.Group>

                    </Form>
                </Col>
            </Row>

            <div className="buttonWrap">
                <div className="btn btn-primary" type="" style={buttonStyleObj1}>취소</div>
                <div className="btn btn-primary" type="" style={buttonStyleObj2}>저장</div>
            </div>
        </Container>
    );
};

export default employeeAdd;


