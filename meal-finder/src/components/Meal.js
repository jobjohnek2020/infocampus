import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import {Container,Row,Col,Image} from "react-bootstrap";
import BurgerMenu from "./BurgerMenu";

export default function Meal(){
    const {id} = useParams();
    const[meal,setMeal] = useState([]);
    useEffect(()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+id)
        .then(i => i.json())
        .then(i => {
            if(i.meals){
                setMeal(i.meals);
            }
        })
    },[id]);

    return(
        <>
        <BurgerMenu/>
        <Container>
            <Row>
                <Col lg={12}>
                    {
                        meal.map((m)=>(
                            <div key={m.idMeal}>
                                <h3>{m.strMeal}</h3>
                                <Image src={m.strMealThumb}/>
                                <p className="lead">
                                    {m.strInstructions}
                                </p>
                            </div>
                        ))
                    }
                </Col>
            </Row>
        </Container>
        </>
    );
}