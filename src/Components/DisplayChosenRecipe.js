import react, {Component} from 'react'

class DisplayChosenRecipe extends Component{
    constructor(){
        super()

        this.state={
            chosenRecipe : {}
        }
    }
    componentDidMount(){

    }
    render(){
        return(
            <div> 
                <h1>{this.state.shownRecipe.name}</h1>
                <img hidden={!this.state.toggleDecideButton} id='shown-recipe-image' src={this.state.shownRecipe.imageURL}/>
            </div>
        )
    }
}

export default DisplayChosenRecipe