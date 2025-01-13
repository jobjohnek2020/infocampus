import { Container, Row, Col, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
export default function MealsList() {

    const filterState = useSelector(state => state.FilterReducer);

    const [meals, setMeals] = useState([]);

    const getMeals = (mealsUrl) => {
        fetch(mealsUrl)
            .then(i => i.json())
            .then(i => {
                if (i.meals) {
                    setMeals(i.meals);
                } else {
                    setMeals([]);
                }
            });
    };

    useEffect(() => {
        getMeals(filterState.mealsUrl);
    }, [filterState]);

    const navigate = useNavigate();
    const mealClickHandler = (id) => {
        navigate(`/meal/${id}`, { replace: true });
    };
    return (
        <>
            <BurgerMenu />
            <Container className="mt-5">
                <Row>
                    {
                        meals.map((meal, index) => (
                            <Col lg={3} key={index}>
                                <div className="border-2 shadow-lg mb-5 p-5">
                                    <Link to={`/meal/${meal.idMeal}`} onClick={() => mealClickHandler(meal.idMeal)}>
                                        <h3>{meal.strMeal}</h3>
                                    </Link>
                                    <Image
                                        src={meal.strMealThumb}
                                        style={{ "height": "16rem", "width": "16rem" }}
                                        thumbnail />
                                </div>
                            </Col>

                        ))
                    }
                </Row>
            </Container>
        </>
    );
}
