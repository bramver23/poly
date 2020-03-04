import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>
           <nav className="nav nav-pills nav-fill">
               {/* <Link to="/">GET</Link>
               <Link to="/">POST</Link>
               <Link to="/">PUT</Link> */}
                <a className="nav-item nav-link active" href="./">GET</a>
                <a className="nav-item nav-link" href="#">POST </a>
                <a className="nav-item nav-link" href="#">PUT</a>
           </nav>
        </div> );
    }
}
 
export default Nav;