/* Core Imports */
import react, {Component} from 'react'
/* Component Imports */
import Header from './Components/Header'
import GetRecipe from './Components/GetRecipe'
import DisplayChosenRecipe from './Components/DisplayChosenRecipe'
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
      savedRecipes: [],
      shownRecipe: {},
      toggleDecideButton: false
    }
    this.handleDecideClick = this.handleDecideClick.bind(this)
  }

  componentDidMount(){
    // this.setState({shownRecipe: this.refs.getRecipeRef.getChosenRecipe()})
  }

  handleDecideClick(){
    let obj = this.refs.getRecipeRef.getChosenRecipe()
    this.setState({shownRecipe: obj})
    this.setState({toggleDecideButton: true})
    console.log(JSON.stringify(this.state.shownRecipe))
  }

  render(){
    let ingredients = []
    let steps = []
    if(this.state.toggleDecideButton){
      ingredients = this.state.shownRecipe.ingredients.map((ingredients, i) => {
        return <div key={i}>
          <li>{`${ingredients.quantity} of ${ingredients.name}`}</li>
        </div>
      })
      steps = this.state.shownRecipe.steps.map((step, i) => {
        return <div key={i}>
          <li>{step}</li>
        </div>
      })
    }

    return (
      <div className="App">
        <Header />
        <section className = 'Three-Recipe-Box'>
          <GetRecipe ref='getRecipeRef' goodRecipe={this.state.goodRecipes} badRecipe={this.state.badRecipes}/>
        </section>
        <section>
          <button id='pickRandomButton' onClick={this.handleDecideClick}>Pick a random recipe</button>
        </section>
        <section className='DisplayChosenRecipe' >
          <section className='Top-Section'>
            <section id='chosen-recipe-name-image-box'>
              <h1>{this.state.shownRecipe.name}</h1>
              <img hidden={!this.state.toggleDecideButton} id='shown-recipe-image' src={this.state.shownRecipe.imageURL}/>
            </section>
            <section id='chosen-recipe-ingredients-box' >
              <h1 hidden={!this.state.toggleDecideButton}>Ingredients</h1>
              <ul>{ingredients}</ul>
            </section>
          </section>
          <section className='Bottom-Section'>
            <h1 hidden={!this.state.toggleDecideButton}>Steps</h1>
            <ol>{steps}</ol>
          </section>

        </section>
      </div>
    );
  }

}

export default App;
