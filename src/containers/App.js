import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setSearchField, requestRobots } from '../redux/actions';

import Header from '../components/header/header.component';
import SearchBox from '../components/search-box/search-box.component';
import Scroll from '../components/scroll/scroll.component';
import CardList from '../components/card-list/CardList';
import ErrorBoundary from '../components/error-boundary/error-boundary.component.js';
import CounterButton from '../components/counter-button/counter-button.component';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div>
        <Header />
        <CounterButton />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          {isPending ? (
            <h1>Loading</h1>
          ) : (
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          )}
        </Scroll>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
