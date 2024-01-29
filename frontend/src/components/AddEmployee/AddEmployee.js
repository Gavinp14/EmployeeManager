import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "./addemployee.css";

export default function AddEmployee() {
  const [showModal, setShowModal] = useState(false);

  //employee states
  const [badgeNumber, setBadgeNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case "badgeNumber":
        setBadgeNumber(value);
        break;
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "department":
        setDepartment(value);
        break;
      case "position":
        setPosition(value);
        break;
      case "salary":
        setSalary(value);
        break;
      default:
        break;
    }
  };

  const handleAddEmployee = async () => {
    const requestBody = {
      badgeNumber: badgeNumber && badgeNumber.trim(),
      firstName: firstName && firstName.trim(),
      lastName: lastName && lastName.trim(),
      department: department && department.trim(),
      position: position && position.trim(),
      salary: salary && salary.trim(),
    };

    await fetch("http://127.0.0.1:5000/api/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

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
                value={badgeNumber}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter First Name"
                value={firstName}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Last Name"
                value={lastName}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="department">
              <Form.Label>Department</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Department"
                value={department}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="position">
              <Form.Label>Position</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Position"
                value={position}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="salary">
              <Form.Label>Salary</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Enter Salary"
                value={salary}
                onChange={handleInputChange}
              />
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
