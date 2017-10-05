import React, { Component } from 'react';

import FruitBasket from './FruitBasket';

class App extends Component{
	constructor(){
		super();

		this.state = {
			currentFilter: null,
			filters: [],
			fruit: [],
		};

		this.fetchFilters = this.fetchFilters.bind(this);
		this.updateFilter = this.updateFilter.bind(this);
	}


  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  componentWillMount() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  updateFilter(e){
  	console.log('update filter to: ', e.target.value);
  	this.setState({ currentFilter: e.target.value });
  }

  render(){
  	return(
  		<FruitBasket
  			fruit={this.state.fruit}
  			filters={this.state.filters}
  			currentFilter={this.state.currentFilter}
  			updateFilterCallback={this.updateFilter}/>
  		);
  	}
}

export default App;
