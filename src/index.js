import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Switch,BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import WeatherMap from './components/WeatherMap';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"
import configureStore from './store/configureStore';
import { PageNotFound } from './PageNotFound';


let store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <Router>
        <Switch>
        <Route path="/" exact={true}>
            <App />
        </Route>
        <Route path="/weather" exact={true}>
            <WeatherMap />
        </Route>
        <Route>
            <PageNotFound />
        </Route>
       
    </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
