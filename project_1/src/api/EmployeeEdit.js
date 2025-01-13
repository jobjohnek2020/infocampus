import { Modal, Button,Form } from "react-bootstrap";
import { useState } from "react";
import { CountryDropdown } from "react-country-region-selector";

export default function EmployeeEdit({ employee,isShow,handleClose }) {

    const [fname, setFname] = useState(employee.name.first);
  const [lname, setLname] = useState(employee.name.last);
  const [nameTitle, setTitle] = useState(employee.name.title);
  const [gender, setGender] = useState(employee.gender);
  const [dob, setDOB] = useState(employee.dob.date);
  const [email, setEmail] = useState(employee.email);
  const [phone, setPhone] = useState(employee.phone);
  const [country, setCountry] = useState(employee.nat);

  const editEmployee = () => {
    let url = "http://localhost:1234/empapi/" + employee.id;
    let editEmployee = {
        gender: gender,
        name: {
          title: nameTitle,
          first: fname,
          last: lname,
        },
        email: email,
        dob: {
          date: dob,
        },
        phone: phone,
        nat: country,
        picture : {
            thumbnail : employee.picture.thumbnail
        }
      };
    fetch(url, {
      method: "put",
      headers : {
        "content-type":"application/json"
      },
      body : JSON.stringify(editEmployee)
    })
      .then((i) => i.json())
      .then((i) => console.log(i));
  };

  const [show, setShow] = useState(isShow);

  const getDob = (dob) =>{
    var d = new Date(dob),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  };
  return (
    <>
      <Modal show={isShow} onHide={() => {setShow(false);handleClose();}}>
        <Modal.Header>
          <h4 className="display-4">Edit Employee</h4>
        </Modal.Header>
        <Modal.Body>
        <div>
            <Form.Select
              aria-label="Gender"
              defaultValue={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Select>
            <Form.Select
              aria-label="Title"
              defaultValue={nameTitle}
              onChange={(e) => setTitle(e.target.value)}
            >
              <option>Title</option>
              <option value="Mr" >Mr</option>
              <option value="Ms" >Ms</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
            </Form.Select>
            <Form.Control
              type="text"
              placeholder="First Name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
            <Form.Control
              type="text"
              placeholder="Last Name"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <CountryDropdown
              value={country}
              className="form-control"
              labelType="full"
              valueType="short"
              onChange={(val) => setCountry(val)}
            />

            <input
              type="date"
              className="form-control"
              value={getDob(dob)}
              onChange={(e) => setDOB(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {setShow(false);handleClose();}}>
            Close
          </Button>
          <Button
            variant="dark"
            onClick={() => {
              editEmployee();
              setShow(false);
              handleClose();
            }}
          >
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
