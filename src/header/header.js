import React,{Component} from 'react'
import Projects from './projects.js'
import Contact from './contacts.js'
import Logo from './logo.js';

class Header extends Component{
    render(){
        return (
            <div>
            <h1>My Portfolio</h1>
            <Logo />
            <Projects />
            <Contact />
            </div>
        );
    }
}
export default Header;