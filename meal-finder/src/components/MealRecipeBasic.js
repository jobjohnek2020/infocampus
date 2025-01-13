import MealIngredients from "./MealIngredients";
export default function MealRecipeBasic({ meal }) {

    return (
        <div className="px-2">
            <h2 className="mt-2">{meal.strMeal}</h2>
            <h5>Ingredients</h5>
            <ul className="list-unstyled ingredient-scroll">
                <MealIngredients meal={meal} />
            </ul>
        </div>
    );
}