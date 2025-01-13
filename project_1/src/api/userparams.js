import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const UserParams = () => {
  let [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const { id } = useParams();
  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((i) => i.json())
      .then((i) => setUsers(i));
  };

  useEffect(() => {
    getUsers();
    getUser(id);
  }, [id]);

  const getUser = (userId) => {
    fetch("https://jsonplaceholder.typicode.com/users/" + userId)
      .then((i) => i.json())
      .then((i) => setUser(i));
  };

  return (
    <Container fluid>
      <Row>
        <Col lg={6}>
          <h1 className="display-4">
            Total {users.length} users
          </h1>
            {users.map((user, index) => {
              return (
                <p key={index}>
                    <Link
                      to={`/userapi/${user.id}`}
                      onClick={() => getUser(user.id)}
                    className="link-light">
                      {user.name}
                    </Link>
                </p>
              );
            })}
        </Col>
        <Col lg={6}>

          <div className="border shadow-lg p-5 mt-5">
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <p>{user.phone}</p>
              <p>{user.website}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserParams;
