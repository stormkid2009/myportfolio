import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
//add routing to gh-pages
import { HashRouter, Route, Link } from "react-router-dom";
import Header from './header/header.js';
import Main from './content/main.js';
//adding styles stuff bootstrap and its dependencies
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

class App extends Component{
  render(){
    return (
      <HashRouter basename='/'>
        <div >
          <div>
            <Header />
            <Main />
          </div>
        </div>
      </HashRouter>
      
    );
  }
}
ReactDOM.render(<App />,document.getElementById('root'));
