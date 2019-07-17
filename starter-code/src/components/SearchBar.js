import React, { Component } from 'react'

export default class SearchBar extends Component {
  handleChange = event => {
   let foods = [...this.state.foods];
    const name = event.target.name;

   let searchedFood = foods.filter(item => item.name == name)
    

    }
  
  this.setState({
    [name]: value
  });
  }
  render() {

    return (
      <div>
        <form>
        <label htmlFor="image">Search FOOOOD</label>
        <input placeholder="Search..."
         onChange={this.handleChange} 
         type="text"
         name="searchBar"
         id="searchBar"
         value ={this.state.name}/>
         {/* <button type ="submit">Search</button> */}
        </form>

        
      </div>
    )
  }
}
