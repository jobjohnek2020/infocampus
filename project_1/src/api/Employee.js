import EmployeeDelete from "./EmployeeDelete";
import { useState } from "react";
import EmployeeEdit from "./EmployeeEdit";
export default function Employee({ employee, index }) {
  const getName = (employee) => {
    let name = employee.name;
    return name.title + "." + name.first + " " + name.last;
  };

  const getGender = (employee) => {
    switch (employee.gender) {
      case "male":
        return (
          <>
            <i className="bi bi-gender-male"></i>
          </>
        );
      case "female":
        return (
          <>
            <i className="bi bi-gender-female"></i>
          </>
        );
      default:
        return (
          <>
            <i className="bi bi-gender-ambiguous"></i>
          </>
        );
    }
  };

  const getDOB = (dob) => {
    const d = new Date(dob);
    return d.getDay() + "/" + d.getMonth() + "/" + d.getFullYear();
  };

  const[show,setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const[editShow,setEditShow] = useState(false);
  const handleEditClose = () => {
    setEditShow(false);
  };
  return (
    <>
      <tr key={index} className="text-center">
        <td>
          <div className="d-flex align-items-center">
            <p className="d-inline-block px-1">{getGender(employee)}</p>
            <p className="d-inline-block px-1 fw-600">{getName(employee)}</p>
          </div>
        </td>
        <td className="fw-600">{getDOB(employee.dob.date)}</td>
        <td className="fw-600">{employee.email}</td>
        <td className="fw-600">{employee.phone}</td>
        <td className="fw-600">{employee.nat}</td>
        <td>
          <button className="btn btn-dark"  onClick={()=> setEditShow(true)}>
            <i className="bi bi-pencil"></i>
          </button>
          <button className="btn text-dark" onClick={()=> setShow(true)}>
            <i className="bi bi-trash"></i>
          </button>
          <EmployeeDelete isShow={show} handleClose={handleClose} employee={employee}/>
          <EmployeeEdit isShow={editShow} handleClose={handleEditClose} employee={employee}/>
        </td>
      </tr>
    </>
  );
}
