import mylogo from './images/logo.jpg';
const Logo =()=>{
    return(
        <div className="col my-2">
            <a href="#" data-toggle="tooltip" title="Anwar Ahmed">
            <img src={mylogo} className="rounded " 
            alt="logo" height="60px" width="60px" />
            </a>
            
        </div>
    );
}
export default Logo;