import React,{Component} from 'react';
import Mywork from './about';
import Pic from './image.js';


class Main extends Component{
    render(){
        return(
            <div className="main-content">
                <Pic />
                <Mywork />
                
            </div>
        );
    }
}
export default Main