import React,{useEffect,useState} from "react";
import './App.css';
import './mobile.css';
import Recipe from './Recipe';
import {Button, InputGroup, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const App = ()=>{
  const APP_ID ="c3996cb3";
  const APP_KEY = "b2619ef6e084c282589a68d80c9a62ef"

  const [search,setSearch] = useState('');
  const [recipes,setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  // useEffect runs when application updates
  // takes a second parameter which can be empty
  // meaning it only runs useEffect when the application
  // starts. a second parameter can be counter as an example
  // it will only run when counter is updated.
  let response;
  useEffect(() =>{
    if(query!==''){
      const getRecipes = async ()=>{
        response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        )
        
        
      
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
      }
      getRecipes();
      
    };
    
  },[query]);

    const updateSearch = ev =>{
      setSearch(ev.target.value);
    }
    const getSearch = ev=>{
      ev.preventDefault();
      setQuery(search);
      setSearch('');
    }
  return(
    <div className="App">
      <h1 className="title">Search for a recipe</h1>
      <InputGroup className="search-form">

        <FormControl
         className="search-bar"
         value={search}
         onChange={updateSearch}>
         </FormControl>

        <InputGroup.Append>
          <Button
           className="search-button"
           onClick={getSearch}>
             Search
        </Button>
        </InputGroup.Append>

      </InputGroup>
      
      {recipes.map(recipe =>(
        <Recipe
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
        

      ))}
    </div>
  );

      }
export default App;
