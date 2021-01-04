import react, {Component} from 'react'

class GetRecipe extends Component{
    constructor(){
        super()

        this.state = {
            threeRecipes: [],
            chosenRecipe: []
        }

        this.GetRecipes = this.GetRecipes.bind(this)
    }
    componentDidMount(){
        this.GetRecipes()
    }

    GetRecipes(){
        const threeRecipes = [],
              goodRecipeIndex1 = Math.ceil(Math.random() * this.props.goodRecipe.length-1),
              badRecipeIndex = Math.ceil(Math.random() * this.props.badRecipe.length-1),
              rouletteIndex = Math.ceil(Math.random() * 2)
        let goodRecipeIndex2 = Math.ceil(Math.random() * this.props.goodRecipe.length-1)

        //Duplicate recipe index check
        while(goodRecipeIndex2 === goodRecipeIndex1){
            console.log('duplicate detected, reassigning index2')
            goodRecipeIndex2 = Math.ceil(Math.random() * this.props.goodRecipe.length)
        }
        console.log(`index1: ${goodRecipeIndex1} index2: ${goodRecipeIndex2} index3: ${badRecipeIndex}`)

        threeRecipes.push(this.props.goodRecipe[goodRecipeIndex1])
        threeRecipes.push(this.props.goodRecipe[goodRecipeIndex2])
        threeRecipes.push(this.props.goodRecipe[badRecipeIndex])

        this.setState({threeRecipes: threeRecipes, chosenRecipe: threeRecipes[rouletteIndex]})
    }

    render(){
        // let recipes = this.state.threeRecipes.map()
        console.log(this.state.threeRecipes[0].name)
        return(
            <div className= 'Recipe-Roulette-section'>
                <section className= 'Recipe-Box'>
                    <section className= 'Recipe-1'>
                        {/* <img src= {this.state.threeRecipes[0].imageURL}/> */}
                        <span className= 'recipeName'></span>
                    </section>
                    <section className= 'Recipe-2'>
                        <span className= 'recipePicture'></span>
                        <span className= 'recipeName'></span>
                    </section>
                    <section className= 'Recipe-3'>
                        <span className= 'recipePicture'></span>
                        <span className= 'recipeName'></span>
                    </section>
                </section>
                <button>Decide My Fate</button>
                <button onClick = {this.GetRecipes}>Spin the Recipe Roulette!</button>

            </div>
        )
    }
}

export default GetRecipe