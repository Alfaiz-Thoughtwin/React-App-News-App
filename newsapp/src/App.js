import './App.css';

// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import Loader from "react-loader-spinner";
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 5;

  state = {
    progress : 0
  };

  setProgress = (progress) => {
    this.setState({ progress : progress})
  }

  render() {
    return (
      <>
        <Router>
          {/* <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
          /> */}
          <NavBar/>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Switch>
            <Route exact path="/">
              <News key="general" setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="general"/>
            </Route>
            <Route exact path="/business">
              <News key="business" setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="business"/>
            </Route>
            <Route exact path="/entertainment">
              <News key="entertainment" setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="entertainment"/>
            </Route>
            <Route exact path="/health">
              <News key="health" setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="health"/>
            </Route>
            <Route exact path="/science">
              <News key="science" setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="science"/>
            </Route>
            <Route exact path="/sports">
              <News key="sports" setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="sports"/>
            </Route>
            <Route exact path="/technology">
              <News key="technology" setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="technology"/>
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}
