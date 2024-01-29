import "./App.css";
import ControlPanel from "./components/ControlPanel/ControlPanel";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <h1 className="text-center mt-5">Employee Management System</h1>
      <ControlPanel />
      <EmployeeList />
    </>
  );
}

export default App;
