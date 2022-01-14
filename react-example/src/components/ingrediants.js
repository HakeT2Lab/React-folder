import ingredients from "../App";

function Ingredients({
    ingredients
}){
    return (
        <ol>    
            {/* {ingredients} */}
            {ingredients.map(
                (ingredient)=>{
                 return <li key={ingredient}>{ingredient}</li>;
                }
            )}
        </ol>

    );
}

// this lets other components / JS files use this file
export default Ingredients;