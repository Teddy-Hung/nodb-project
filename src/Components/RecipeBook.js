import react, {Component} from 'react'

class RecipeBook extends Component{
    constructor(){
        super()

        this.state={
            savedRecipes: [],
            chosenRecipe: {}
        }
        this.handleRecipeImageClick = this.handleRecipeImageClick.bind(this)
        // this.getSavedRecipes = this.getSavedRecipes.bind(this)
        // this.deleteRecipe = this.deleteRecipe(this)
    }

    deleteRecipe(index){
        let recipes = this.state.savedRecipes.slice()
        recipes.splice(index, 1)
        this.setState({savedRecipes: recipes})
    }
    
    getChosenRecipe(recipe){
        console.log('clicked: '+ JSON.stringify(recipe))
        return recipe
    }
    handleRecipeImageClick(){
        return this.state.chosenRecipe
    }
    addRecipe(recipe){
        if(!this.state.savedRecipes.includes(recipe)){
            this.setState({savedRecipes: [...this.state.savedRecipes, recipe]})
        }else{
            alert('Recipe already exists in recipe book.')
        }
        console.log(this.state.savedRecipes)
    }
    render(){
        let recipes =  this.state.savedRecipes.map((recipe, i) => {
                return <div key={i}>
                    <img onClick={() => this.getChosenRecipe(i)} id='recipe-book-img' src= {recipe.imageURL}/>
                    <p id='recipe-book-recipe-name'>{recipe.name}</p>
                    <img onClick={() => this.deleteRecipe(recipe)}/>
                    <button id='delete-image' onClick={() => this.deleteRecipe(i)}>delete</button>
                </div>
            })
        // }
        return(
            <div className='RecipeBookBox'>
                <button onClick={() => this.addRecipe(this.props.chosenRecipe)}>Add recipe to recipe book</button>
                <span id='horizontal-divider'></span>
                <h1>Recipe Book</h1>
                <section id='recipe-book-display'>
                    {recipes}
                </section>
            </div>
        )

    }
}

export default RecipeBook