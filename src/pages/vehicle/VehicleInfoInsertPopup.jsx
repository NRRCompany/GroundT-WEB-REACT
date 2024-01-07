import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

const VehicleInfoInsertPopup = ({show, handleClose}) => {

  return (
    <>
      <Modal show={show} onHide={handleClose}  backdrop="static"  >
        <Modal.Header closeButton>
          <Modal.Title>차량등록</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>반납일자</Form.Label>
              <Form.Control
                type="string"
                placeholder="xxxx년 xx월 xx일"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>반납시간</Form.Label>
              <Form.Control
                type="string"
                placeholder="xx시 xx분"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>누적 주행거리</Form.Label>
              <Form.Control
                type="number"
                placeholder="xxxx km"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>잔여 유류량</Form.Label>
              <Form.Control
                type="number"
                placeholder="xxx L"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default VehicleInfoInsertPopup;
