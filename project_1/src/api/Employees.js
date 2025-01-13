import { useState, useEffect } from "react";
import { Container, Row, Col} from "react-bootstrap";
import EmployeesTable from "./EmployeesTable";
import EmployeeSave from "./EmployeeSave";
import { useUser } from "../hooks/UserContext";
export default function Employees() {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        fetch("http://localhost:1234/empapi")
            .then(i => i.json())
            .then(i => setEmployees(i));
    }, [employees]);
    const{user} = useUser();
    return (
        <Container>
            <Row>
                <Col>
                    <p className="text-end">Logged in {user.name}</p>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <h1 className="display-4 text-center border mt-5 mb-5 bg-dark text-white">{employees.length} Employees</h1>
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