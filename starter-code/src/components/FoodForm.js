import React, { Component } from 'react'

export default class FoodForm extends Component {
  state = {
    name: "",
    calories: 0,
    image: ""
  };

  handleSubmit = event =>{
    event.preventDefault();
     const newFood ={
       name: this.state.name,
       image: this.state.image,
       calories: Number(this.state.calories)
     };
     this.props.pushFood(newFood);

     this.setState({
      name: "",
      calories: 0,
      image: ""
     });
     
  };
handleChange = event => {
  const name = event.target.name;
  const value = event.target.value;


this.setState({
  [name]: value
});
}

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input onChange={this.handleChange} type="text" name="name" id="name" value={this.state.name}
        />
        
        <label htmlFor="calories">Calories</label>
        <input onChange={this.handleChange} type="number" name="calories" id="calories" value={this.state.calories}
        />

        <label htmlFor="image">Image</label>
        <input onChange={this.handleChange} type="text" name="image" id="image" value={this.state.image}
        />
        <button type="submit">Add New Food</button>

        </form>

      </div>
    )
  }
}
