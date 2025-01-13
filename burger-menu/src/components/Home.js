import {Container,Row,Col} from "react-bootstrap";
export default function Home(){
    return(
        <Container>
            <Row>
                <Col lg={12}>
                    <h1 className="display-1">
                        Home
                    </h1>
                </Col>
            </Row>
        </Container>
    )
}