import { Table } from "react-bootstrap";
import Employee from "./Employee";

export default function EmployeesTable({ employees }) {
  
  return (
    <div className="shadow-lg mb-5">
      <Table responsive striped="columns" hover>
        <thead>
          <tr className="text-center">
            <th>Name</th>
            <th>DOB</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Country</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <Employee employee={employee} index={index} key={index}/>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
