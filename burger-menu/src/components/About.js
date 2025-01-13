import {Container,Row,Col} from "react-bootstrap";
export default function About(){
    return(
        <Container>
            <Row>
                <Col lg={12}>
                    <h1 className="display-1">
                        About
                    </h1>
                </Col>
            </Row>
        </Container>
    )
}