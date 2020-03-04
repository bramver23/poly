import React, { Component } from 'react';
import axios from 'axios';


class PostPage extends Component {
    constructor(props) {
    
        super(props);
        // this.handleClick = this.handleClick.bind(this);
        // this.submitHandler = this.submitHandler.bind(this);
        this.state = { 
            id:"",
            name:"",
            email:"",
            phone:"",
            body:""
         }

       const  handleClick = (e) =>{
             this.setState({
                 [e.target.value]:e.target.value
                })
         }
       const submitHandler =(e) =>{
             e.preventDefault()
             console.log(this.state);
             axios.post('https://jsonplaceholder.typicode.com/users',this.state)
              .then(response => response.json())
              .then(json => console.log(json))
         }
    }
    render() { 
        const {id, name,  email, phone, body} = this.state;
        return ( 
                <div>
                  <form onSubmit="this.submitHandler">
                        <div className="form-group">
                        <label for="exampleInputEmail1">Id</label>
                            <input type="text" name="id" value={id} onChange ={this.handleClick} className="form-control" id="exampleInputEmail1" aria-describedby="nameHelp"/>
                        </div>
                        <div className="form-group">
                        <label for="exampleFormControlInput1">Name</label>
                            <input type="text" name="name" value={name} onChange ={this.handleClick} className="form-control" id="exampleInputEmail1" aria-describedby="nameHelp"/>
                        </div>
                        <div className="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                            <input type="text" name="id" value={email} onChange ={this.handleClick} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Phone number</label>
                            <input type="text" name="id" value={phone} onChange ={this.handleClick} className="form-control"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>
                 );
    }
}
 
export default PostPage;