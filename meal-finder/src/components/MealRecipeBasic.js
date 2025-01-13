import MealIngredients from "./MealIngredients";
export default function MealRecipeBasic({ meal }) {

    return (
        <div className="px-2">
            <h1 className="mt-2 display-1">{meal.strMeal}</h1>
            <h6 className="lead display-7">Ingredients</h6>
            <ul className="list-unstyled ingredient-scroll">
                <MealIngredients meal={meal} />
            </ul>
        </div>
    );
}