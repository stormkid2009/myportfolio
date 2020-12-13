import React,{Component} from 'react'
import Projects from './projects.js'
import Contact from './contacts.js'
import Logo from './logo.js';
import About from './aboutMe.js';

class Header extends Component{
    render(){
        return (
            
                <div className="container bg-secondary text-white">
                    <div className="row">
                        <Logo  />
                        <About />
                        <Projects  />
                        <Contact />
                    </div>
                </div>
                
            
            
        );
    }
}
export default Header;