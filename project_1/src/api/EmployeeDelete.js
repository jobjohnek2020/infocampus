import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
export default function EmployeeDelete({ employee,isShow,handleClose }) {
  const deleteEmployee = () => {
    let url = "http://localhost:1234/empapi/" + employee.id;
    fetch(url, {
      method: "delete",
    })
      .then((i) => i.json())
      .then((i) => console.log(i));
  };

  const [show, setShow] = useState(isShow);


  return (
    <>
      <Modal show={isShow} onHide={() => setShow(false)}>
        <Modal.Header>
          <h4 className="display-4">Delete Employee</h4>
        </Modal.Header>
        <Modal.Body>Are your sure?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {setShow(false);handleClose();}}>
            Close
          </Button>
          <Button
            variant="dark"
            onClick={() => {
              deleteEmployee();
              setShow(false);
              handleClose();
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
