import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setSearchField, requestRobots } from '../redux/actions';

import MainPage from '../components/main-page/main-page.component';

class App extends Component {
  render() {
    return <MainPage {...this.props} />;
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
