import React, { Component } from "react";
// import { robots } from './robots';
import CardList from './Card/CardList';
import SearchBar from "./Layout/SearchBar";
import './App.css';

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            SearchFeild: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=> {this.setState({robots: users})})
    }
    onSearchChange=(event)=>{
      this.setState({SearchFeild: event.target.value})
   
    }
    render(){
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.SearchFeild.toLowerCase());
          })
          if(this.state.robots.length === 0){
            return <h1>Loading</h1>
          }
          else {
            return(
                <div className="tc">
                <h1 className="f2">Robo Freind</h1>
                <SearchBar searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots}/>
                </div>
            )  

          }
      
    }

}

export default App;