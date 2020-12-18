import React,{Component} from 'react'
import Image from './image.js'
import Appgallery from './apps-gallery.js'
export default class Main extends Component{
    render(){
        return(
            <div className="container my-2">
                <div className="row">
                    <Image className="col"/>
                    <div className='col bg-dark text-white font-weight-bold '>
                        <h2 className="display-4"> I am Anwar Ahmed Web Dev</h2>
                        <p className="text-justify">married and father of sweet girl
                            My journey started since high school
                            first time I touch keyboard I realized that 
                            I can do amazing things only 
                            with writing some lines of codes.
                            without user friendly interface  Basic
                            was my window on this strange world
                        </p>
                    </div>

                </div>
                <div className="row">
                    <Appgallery />
                </div>

                
            </div>
        );
    }
}