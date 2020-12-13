const Contact =()=>{
    return(
        <div className="col">
            <div className="dropdown">
                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
                    Contacts
                </button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href=
                    "https://www.linkedin.com/in/anwar-ahmed-a6b3b1b1/">Linked In</a>
                    <a className="dropdown-item" href=
                    "https://twitter.com/SherifAhmed2004">Twitter</a>
                    <a className="dropdown-item" href=
                    "https://github.com/stormkid2009">GitHub</a>
                    <a className="dropdown-item" href=
                    "https://stackoverflow.com/users/13717088/anwar-ahmed?tab=profile">
                        StackOverFlow
                    </a>

                </div>
            </div>
        </div>
    );
}
export default Contact;