import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { CountryDropdown } from "react-country-region-selector";
export default function EmployeeSave() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [nameTitle, setTitle] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDOB] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [show, setShow] = useState(false);

  const updateState = ()=>{
    setFname("");
        setLname("");
        setTitle("");
        setGender("");
        setDOB("");
        setEmail("");
        setPhone("");
        setCountry("");
  };

  const handleClose = () => {
    updateState();
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const saveEmployee = () => {
    let newEmployee = {
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
      nat: country
    };
    let headers = {
      "content-type": "application/json",
      accept: "application/json",
    };
    let postData = {
      headers: headers,
      method: "post",
      body: JSON.stringify(newEmployee),
    };
    fetch("http://localhost:1234/empapi", postData)
      .then((i) => i.json())
      .then((i) => updateState());
  };
  return (
    <>
      <Button
        className="btn-dark display-4 text-center mb-2"
        onClick={handleShow}
      >
        <i className="bi bi-plus"></i> Add new employee
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="display-4">Add New Employee</Modal.Header>
        <Modal.Body>
          <div>
            <Form.Select
              aria-label="Gender"
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Select>
            <Form.Select
              aria-label="Title"
              onChange={(e) => setTitle(e.target.value)}
            >
              <option>Title</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Ms">Ms</option>
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
              onChange={(e) => setDOB(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick={() => {
            saveEmployee();
            handleClose();
          }}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
