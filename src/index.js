import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './header/header.js';
import Main from './content/content.js';
import './styles/index.css';

class App extends Component{
  render(){
    return (
      <div>
        
        <Header />
        <Main />
      </div>
    );
  }
}
ReactDOM.render(<App />,document.getElementById('root'));
