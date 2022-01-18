import ingredients from "../App";

function Ingredients({
    ingredients,
    title,
    prep_time
}){
    return (
        <div>
            <h2>
                {title}
            </h2>
            
            <p>
                {prep_time}
            </p>

            <ol>    
                {/* {ingredients} */}
                {ingredients.map(
                    (ingredient)=>{
                        return <li key={ingredient}>{ingredient}</li>;
                    
                    }
                )}
            </ol>
        </div>

    );
}

// this lets other components / JS files use this file
export default Ingredients;