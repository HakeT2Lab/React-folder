/*
   task: build a collection of recipes
*/

// to use other components / libraries, we need to import them
import Ingredients from './components/ingrediants.js';

// to use a .css file, we can also import it
import './App.css';

function App() {
  const ingredients_1 = [
      'Some ramen noodles',
      '1 cup of water',
      'Seasoning',
      '2 eggs'
    ];
  
    const ingredients_2 = [
      'Scallions',
      'Curry powder',
      'Salt',
      'Hot pepper'
    ];

  return (
    <div className='recipe-parent'>
        <Ingredients ingredients={ingredients_1} />
        <Ingredients ingredients={ingredients_2} />
    </div>
      );
  }

export default App;