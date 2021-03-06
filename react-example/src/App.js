/*
   task: build a collection of recipes
*/

// to use other components / libraries, we need to import them
import Recipe from './components/Recipe.js';

// to use a .css file, we can also import it
import './App.css';

function App() {
  //JS object is a collection of related varibles
  const recipes = [
    {
        title: 'Ramen',
        prep_time: '20 min',
        ingredients: [
      'some ramen noodles',
      '1 cup of water',
      'seasoning',
      '2 eggs'
        ]
    },
    {
        title: 'Curry Mutton',
        prep_time: '40 min',
        ingredients:  [
      'scallions',
      'curry powder',
      'salt',
      'hot pepper'
        ]
    },
    {
        title: 'Hamburger',
        prep_time: '15 min',
        ingredients: [
      'burger patty',
      'bun',
      'ketchup',
      'mayo',
        ]
    }
      ];

      return (
        <div className='recipe-parent'>
            {/* to access a part of a JS object, use the dot operator.
            for example: object_name.subpart_name */}
            {/* to pass JS variables to components, include them as an attribute.
          for example: attribute_name={variable_name}
              */}
            {
          recipes.map((recipe) => {
              return <Recipe ingredients={recipe.ingredients} title={recipe.title} prep_time={recipe.prep_time} />;
          })
            }
        </div>
          );
  }

export default App;