import React from "react";
import "./controlpanel.css";
import AddEmployee from "./AddEmployee";
import { Container, Button } from "react-bootstrap";

export default function ControlPanel() {
  return (
    <Container className="control-panel">
      <AddEmployee />
    </Container>
  );
}
