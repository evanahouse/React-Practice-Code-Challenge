import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    allSushis: [],
    displayedSushis: [],
    index: 0

  }

  componentDidMount(){
    fetch (API)
    .then(res => res.json())
    .then(jsonData => this.setState({allSushis: jsonData}))
    .then(this.handleSlice)
    
  }
  
  handleIndexing = () => {
    let oldIndex = this.state.index
    if (oldIndex === 100){
      this.setState({index: 0})
    }
    else{
      this.setState({index: oldIndex + 4})
      console.log(this.state)
    }
    this.handleSlice()
  }

  handleSlice = () => {
    let sushisCopy = [...this.state.allSushis]
    let slicedSushi = sushisCopy.slice(this.state.index, this.state.index + 4)
    this.setState({displayedSushis: slicedSushi})
    
  }

  render() {
    return (
      <div className="app">
        <SushiContainer index={this.state.index} handleIndexing={this.handleIndexing} displayedSushis={this.state.displayedSushis} displayIndex={this.state.displayIndex} />
        <Table />
      </div>
    );
  }
}

export default App;