import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function SearchSugestion(props) {
  return <li style={ {listStyleType: 'none'} }>{props.value}</li>;
} 

function SuggestList(props) {
  const listItems = props.suggestions.map(function(suggestion){
    return <SearchSugestion value={suggestion} key={suggestion} />;
  });
  return <ul style={ {padding: 0} }>{listItems}</ul>;
}

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '123'
    }
  }

  updateInputValue = function(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  render() {
    return (
      <div style={ {textAlign: 'center'} }>
        <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} />
        <SuggestList suggestions={this.props.suggestions} />
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestList: ['name', 'school', 'company', 'family']
    }
  }

  render() {
    return <Search suggestions={this.state.suggestList} />;
  }
}

export default App;
