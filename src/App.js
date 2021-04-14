import React, { Component } from 'react';
import {CardList} from '../src/components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component{
  constructor() {
    super();
    this.state = {
      monsters:[],
      searchFiled: ''
    };
    //我们自定义this的位置的时候，希望定义在constructor里，因为constructor是最先运行的
    //bind 指的是，return一个新的function with this
    //bind(this)的this是constructor里的这个this
    this.handleChange = this.handleChange.bind(this);

  }

//因为extend了react的component，component里直接写好了箭头的this指向的是constructor
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

//如果不写bind的话，会报错，这个this会return undefined
  handleChange(e) {
      this.setState({searchFiled: e.target.value});
  }

  render() {
    const { monsters, searchFiled } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchFiled.toLowerCase())
    );  
    return (
      <div className="App">
        <SearchBox 
          placeholder = "search monsters"
          //虽然这个this指向了handle change function，但是没有提供this.setState的this是什么,
          //JS 不会提供scope，所以需要自己来定义这个this是在哪里
          handleChange = {this.handleChange} />
        <CardList monsters = {filteredMonsters} /> 
      </div>
    )
  }
}

export default App;
