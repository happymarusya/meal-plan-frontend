import './App.css';
import { MyMeals } from './MyMeals';
import { useEffect, useState } from 'react';
import { getAllMeals, addMeal, editMeal, deleteMeal } from './FetchMeals';

function App() {
  const [myMeal, setMeal] = useState([]);
  const [name, setName] = useState("");
  const [editing, setEditing] = useState(false);
  const [mealId, setMealId] = useState("");

  useEffect(() => {
    getAllMeals(setMeal)
  }, [])

  const updatingInInput = (_id, name) => {
    setEditing(true)
    setName(name)
    setMealId(_id)
  }

  return (
    <div className="App">
        <h1>Meal Plan</h1>
        <input
            type = "text"
            placeholder = "Add a meal"
            value={ name }
            onChange={(e) => setName(e.target.value)}
        />
        <button
        disabled={!name} 
        onClick=
        {editing ? () => editMeal(mealId, name, setName, setMeal, setEditing) : () => addMeal(name, setName, setMeal)}>
          {editing ? "EDIT" : "ADD"}
        </button>

        {/* <MyMeals/> */}

        {myMeal.map((meal) => <MyMeals text = {meal.name} key={meal._id}
        updatingInInput = {() => updatingInInput(meal._id, meal.name)}
        deleteMeal = {() => deleteMeal(meal._id, setMeal)}/>
        )}
    </div>
  );
}

export default App;
