/*
   task: build a collection of recipes
*/

// to use other components / libraries, we need to import them
import Ingredients from './components/ingrediants.js';

// to use a .css file, we can also import it
import './App.css';

function App() {

  const title_1 = "Ramen";
  const prep_time_1 = "20min";
  const ingredients_1 = [
      'Some ramen noodles',
      '1 cup of water',
      'Seasoning',
      '2 eggs'
    ];
  
    
    const title_2 = "Curry Mutton";
    const prep_time_2 = "40min";
    const ingredients_2 = [
      'Scallions',
      'Curry powder',
      'Salt',
      'Hot pepper'
    ];

  return (
    <div className='recipe-parent'>
        <Ingredients ingredients={ingredients_1} title={title_1} prep_time={prep_time_1}/>
        <Ingredients ingredients={ingredients_2} title={title_2} prep_time={prep_time_2}/>
    </div>
      );
  }

export default App;