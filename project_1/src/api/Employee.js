import { useState, useEffect } from "react";
export default function Employee() {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        fetch("http://localhost:1234/empapi")
            .then(i => i.json())
            .then(i => setEmployees(i));
    }, [employees]);

    return (
        <>
            <h1 style={{textAlign:"center",marginBottom:"2rem", marginTop:"2rem"}}>{employees.length} Employees</h1>
            <table align="center">
                <thead>
                    <tr>
                        <th style={{textAlign:"center"}}>Sl No</th>
                        <th style={{textAlign:"center"}}>Name</th>
                        <th style={{textAlign:"center"}}>Email</th>
                        <th style={{textAlign:"center"}}>Phone</th>
                        <th style={{textAlign:"center"}}>Gender</th>
                        <th style={{textAlign:"center"}}>Country</th>
                        <th style={{textAlign:"center"}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((employee,index) => (
                            <tr key={index}>
                                <td style={{textAlign:"center"}}>{index+1}</td>
                                <td style={{textAlign:"center"}}>{employee.name.first + " " + employee.name.last}</td>
                                <td style={{textAlign:"center"}}>{employee.email}</td>
                                <td style={{textAlign:"center"}}>{employee.phone}</td>
                                <td style={{textAlign:"center"}}>{employee.gender}</td>
                                <td style={{textAlign:"center"}}>{employee.nat}</td>
                                <td>
                                    <button type="submit">Delete</button>
                                    <button type="submit">Edit</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}