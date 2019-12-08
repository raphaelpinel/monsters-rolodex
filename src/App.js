import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [{ name: '', id: '' }],
      searchField: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick2 = this.handleClick1.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((monsters) => this.setState({ monsters }));
  }

  handleChange(e) {
    this.setState({ searchField: e.target.value });
  }

  handleClick1() {
    console.log('button1 clicked', this);
  }
  handleClick3 = () => console.log('button3 clicked', this);

  render() {
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          type="text"
          placeholder="Search monsters"
          // value={this.state.searchField}
          handleChange={this.handleChange}
        />
        <CardList
          monsters={this.state.monsters.filter((monster) =>
            monster.name.toLowerCase().includes(this.state.searchField.toLowerCase())
          )}
        />
      </div>
    );
  }
}

export default App;
