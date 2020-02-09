import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';

// Components
import Main from './Component/Main/Main';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() { }

  render() {
    return (
      <Router>
        <div className="app">
          <Main/>
          <ToastContainer />
        </div>
      </Router>
    );
  }
}

export default connect()(hot(App));
