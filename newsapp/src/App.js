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

export default class App extends Component {
  pageSize = 9;
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
          <Switch>
            <Route exact path="/">
              <News key="general" pageSize={this.pageSize} country="in" category="general"/>
            </Route>
            <Route exact path="/business">
              <News key="business" pageSize={this.pageSize} country="in" category="business"/>
            </Route>
            <Route exact path="/entertainment">
              <News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>
            </Route>
            <Route exact path="/health">
              <News key="health" pageSize={this.pageSize} country="in" category="health"/>
            </Route>
            <Route exact path="/science">
              <News key="science" pageSize={this.pageSize} country="in" category="science"/>
            </Route>
            <Route exact path="/sports">
              <News key="sports" pageSize={this.pageSize} country="in" category="sports"/>
            </Route>
            <Route exact path="/technology">
              <News key="technology" pageSize={this.pageSize} country="in" category="technology"/>
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}
