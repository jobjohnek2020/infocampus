import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FilterDropdown from './FilterDropdown';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import FilterValue from './FilterValue';
import { useNavigate } from 'react-router-dom';
export default function BurgerMenu() {
    const [collapse, setCollapse] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSearch = ()=>{
        let data = {type : "setMealsUrl"};
        dispatch(data);
        setCollapse(false);
        navigate("/",{replace:true});
    };
    return (
        <Navbar expand="sm" expanded={collapse} sticky='top'>
            <Container fluid>
                <Navbar.Brand>Meal Finder</Navbar.Brand>
                <Navbar.Toggle onClick={() => setCollapse(true)} />
                <Navbar.Offcanvas placement="start">
                    <Offcanvas.Header closeButton onClick={() => setCollapse(false)} />
                    <Offcanvas.Body>
                        <FilterDropdown />
                        <FilterValue/>
                        <Button onClick={() => handleSearch()}>Search</Button>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}