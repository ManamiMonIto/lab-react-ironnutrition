import React, { Component } from 'react';

import './App.css';
import 'bulma/css/bulma.css';
import JASONFoods from './foods.json'
import FoodBox from './components/FoodBox';
import FoodForm from './components/FoodForm';
import SearchBar from './components/SearchBar';


class App extends Component {
  state = {
    foods : JASONFoods.slice()
  }


  pushFood = food=>{
    let foods = [...this.state.foods]
    foods.push(food)

    this.setState({foods})
  }

  render() {
    return (
      <div className="App">
        <p>IronNutrition</p>
        <FoodBox foods = {this.state.foods}/>
        <FoodForm pushFood={this.pushFood}/>
        <SearchBar foods = {this.state.foods}/>
      </div>
    );

  }
}

export default App;
