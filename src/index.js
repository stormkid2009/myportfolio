import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './header/header.js';
import './styles/index.css';

class App extends Component{
  render(){
    return (
      <div>
        
        <Header />
      </div>
    );
  }
}
ReactDOM.render(<App />,document.getElementById('root'));
