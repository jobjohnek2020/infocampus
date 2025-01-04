import { useState, useEffect } from "react";
import { Container, Row, Col, Modal, Table,Image } from "react-bootstrap";
import EmployeesTable from "./EmployeesTable";
import EmployeeSave from "./EmployeeSave";
export default function Employees() {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        fetch("http://localhost:1234/empapi")
            .then(i => i.json())
            .then(i => setEmployees(i));
    }, [employees]);

    

    return (
        <Container>
            <Row>
                <Col lg={12}>
                    <h1 className="display-4 text-center border mt-5 mb-5 bg-dark text-white">{employees.length} Customers</h1>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <EmployeeSave/>
                    <EmployeesTable employees={employees}/>
                </Col>
            </Row>
        </Container>
    )
}