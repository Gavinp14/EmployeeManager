import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "./addemployee.css";

export default function AddEmployee() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleAddEmployee = () => {
    // Add logic to handle adding employee
    // This could involve making an API call or updating state
    // For now, just close the modal
    handleClose();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Employee
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body className="form-body">
          <Form>
            <Form.Group controlId="badgeNumber">
              <Form.Label>Badge Number</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Enter Badge Number"
              />
            </Form.Group>

            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter First Name"
              />
            </Form.Group>

            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Last Name"
              />
            </Form.Group>

            <Form.Group controlId="department">
              <Form.Label>Department</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Department"
              />
            </Form.Group>

            <Form.Group controlId="position">
              <Form.Label>Position</Form.Label>
              <Form.Control required type="text" placeholder="Enter Position" />
            </Form.Group>

            <Form.Group controlId="salary">
              <Form.Label>Salary</Form.Label>
              <Form.Control required type="number" placeholder="Enter Salary" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddEmployee}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
