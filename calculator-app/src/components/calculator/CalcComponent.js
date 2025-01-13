import { Container, Row, Col, Button } from "react-bootstrap";
import { plus,minus,multiply,divide,selectResult } from "../../reducers/calcreducer";
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
const CalcContainer = () => {

    const result = useSelector(selectResult);
    const dispatch = useDispatch();

    const [arg,setArg] = useState(0);

    return (
        <Container>
            <Row>
                <Col lg={12}>
                    <div id="output-container" className="border p-3 rounded-top-5">
                        <div id="current-entry-container" className="d-flex justify-content-end small">
                            
                        </div>
                        <div id="result-container" className="d-flex justify-content-end display-3">
                            {result}
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <div className="border rounded-bottom-5 p-3">
                        <div id="clear-container">
                            <Button className="btn btn-light btn-outline-dark border-0 w-25">CA</Button>
                            <Button className="btn btn-light btn-outline-dark border-0 border-0 w-25">CE</Button>
                            <Button className="btn btn-light btn-outline-dark border-0 w-25 ">
                                (
                            </Button>
                            <Button className="btn btn-light btn-outline-dark border-0 w-25 ">
                                )
                            </Button>
                        </div>
                        <div id="operator-container">
                            <Button className="btn btn-light btn-outline-dark border-0 w-25">
                                <i className="fa-solid fa-plus"></i>
                            </Button>
                            <Button className="btn btn-light btn-outline-dark border-0 w-25">
                                <i className="fa-solid fa-minus"></i>
                            </Button>
                            <Button className="btn btn-light btn-outline-dark border-0 w-25">
                                <i className="fa-solid fa-xmark"></i>
                            </Button>
                            <Button className="btn btn-light btn-outline-dark border-0 w-25">
                                <i className="fa-solid fa-divide"></i>
                            </Button>
                        </div>
                        <div id="number-container">
                            <Button className="btn btn-light btn-outline-dark border-0 w-25 ">
                                1
                            </Button>
                            <Button className="btn btn-light btn-outline-dark border-0 w-25">
                                2
                            </Button>
                            <Button className="btn btn-light btn-outline-dark border-0 w-25">
                                3
                            </Button>
                            <Button className="btn btn-light btn-outline-dark border-0 w-25">
                                4
                            </Button>
                            <Button className="btn btn-light btn-outline-dark border-0 w-25">
                                5
                            </Button>
                            <Button className="btn btn-light btn-outline-dark border-0 w-25">
                                6
                            </Button>
                            <Button className="btn btn-light btn-outline-dark border-0 w-25">
                                7
                            </Button>
                            <Button className="btn btn-light btn-outline-dark border-0 w-25">
                                8
                            </Button>
                            <Button className="btn btn-light btn-outline-dark border-0 w-25">
                                9
                            </Button>
                            <Button className="btn btn-light btn-outline-dark border-0 w-25">
                                0
                            </Button>
                            <Button className="btn btn-light btn-outline-dark border-0 w-25">
                                .
                            </Button>

                            <Button className="btn btn-light btn-outline-dark border-0 w-25">
                                <i className="fa-solid fa-equals"></i>
                            </Button>

                        </div>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}

export default CalcContainer;