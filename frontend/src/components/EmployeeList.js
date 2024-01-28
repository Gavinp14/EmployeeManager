import React from "react";
import { Container, Table } from "react-bootstrap";
import "./employeelist.css";

function EmployeeList({ employees }) {
  return (
    <Container>
      <Table bordered className="table table-striped employee-table">
        <thead>
          <tr>
            <th>Badge Number</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Department</th>
            <th>Position</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.badgeNumber}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.department}</td>
              <td>{employee.position}</td>
              <td>{employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default EmployeeList;
