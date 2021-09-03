import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Login from './components/Login';
// import { AppContext } from "./lib/contextLib";

const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
  // const [isAuthenticating, setIsAuthenticating] = useState(true);
  
    return (
      <>
        <Router>
          <NavBar/>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />
          <Switch>
            <Route exact path="/">
              <News key="general" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="general"/>
            </Route>
            <Route exact path="/business">
              <News key="business" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="business"/>
            </Route>
            <Route exact path="/entertainment">
              <News key="entertainment" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="entertainment"/>
            </Route>
            <Route exact path="/health">
              <News key="health" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="health"/>
            </Route>
            <Route exact path="/science">
              <News key="science" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="science"/>
            </Route>
            <Route exact path="/sports">
              <News key="sports" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="sports"/>
            </Route>
            <Route exact path="/technology">
              <News key="technology" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="technology"/>
            </Route>
            <Route exact path="/login">
              {/* <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}> */}
                <Login/>
              {/* </AppContext.Provider> */}
            </Route>
          </Switch>
        </Router>
      </>
    )  
}

export default App;
