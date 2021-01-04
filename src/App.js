/* Core Imports */
import react, {Component} from 'react'
import axios from 'axios'
/* Component Imports */
import Header from './Components/Header'
import GetRecipe from './Components/GetRecipe'
/* Data Imports */
import GoodRecipes from './Data/GoodRecipes'
import BadRecipes from './Data/BadRecipes'
/* CSS Imports */
import './App.css'

class App extends Component{
  constructor(){
    super()

    this.state = {
      goodRecipes: GoodRecipes,
      badRecipes: BadRecipes,
      savedRecipes: []
    }
  }
  render(){
    return (
      <div className="App">
        <Header />
        <GetRecipe goodRecipe={this.state.goodRecipes} badRecipe={this.state.badRecipes}/>
      </div>
    );
  }

}

export default App;
