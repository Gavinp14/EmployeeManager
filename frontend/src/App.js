import "./App.css";
import ControlPanel from "./components/ControlPanel/ControlPanel";
import EmployeeList from "./components/EmployeeList";
import "bootstrap/dist/css/bootstrap.min.css";

const employees = [
  {
    id: 1,
    badgeNumber: 17463,
    firstName: "Gavin",
    lastName: "Porter",
    department: "IT",
    position: "Manager",
    salary: 100000,
  },
  {
    id: 2,
    badgeNumber: 59372,
    firstName: "Jenna",
    lastName: "Porter",
    department: "HR",
    position: "Rep",
    salary: 70000,
  },
];

function App() {
  return (
    <>
      <h1 className="text-center mt-5">Employee Management System</h1>
      <ControlPanel />
      <EmployeeList employees={employees} />
    </>
  );
}

export default App;
