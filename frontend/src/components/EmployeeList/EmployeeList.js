import React from "react";
import { Container, Table, Button } from "react-bootstrap";
import "./employeelist.css";
import { useEffect, useState } from "react";

function EmployeeList() {
  const [employeeData, setEmployeeData] = useState([]);

  //fetch employee data from api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/api/employees");
        const data = await response.json();
        setEmployeeData(data.employees);
      } catch (error) {
        console.error("could not fetch data", error);
      }
    };

    fetchData();
  }, []);

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
          {employeeData.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.badgeNumber}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.department}</td>
              <td>{employee.position}</td>
              <td>{employee.salary}</td>
              <td className="text-right button-section">
                <Button
                  onClick={null}
                  className="btn btn-warning update-button"
                >
                  Update
                </Button>
                <Button onClick={null} className="btn btn-danger delete-button">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default EmployeeList;
