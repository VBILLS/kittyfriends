import React, { Component } from 'react';

import Header from '../header/header.component';
import SearchBox from '../search-box/search-box.component';
import Scroll from '../scroll/scroll.component';
import CardList from '../card-list/CardList';
import ErrorBoundary from '../error-boundary/error-boundary.component.js';
import CounterButton from '../counter-button/counter-button.component';

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = robots => {
    return this.props.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.props.searchField.toLowerCase());
    });
  };

  render() {
    const { onSearchChange, isPending } = this.props;
    return (
      <div>
        <Header />
        <CounterButton />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          {isPending ? (
            <h1 className='loading'>Loading</h1>
          ) : (
            <ErrorBoundary>
              <CardList robots={this.filterRobots()} />
            </ErrorBoundary>
          )}
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
