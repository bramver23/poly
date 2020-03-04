import React, { Component } from 'react';


class getPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            items:[],
            isLoaded:false,
         }
    }

   async componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/todos/')
        // .then(response => response.json())
        // .then(json => console.log(json))
        const url = 'https://jsonplaceholder.typicode.com/users';
        const response = await fetch(url);
        const data= await response.json();
        console.log(data);

        this.setState({
          isLoaded:true,
          items: data,
        })
    }
    

    render() { 
        var { isLoaded, items } = this.state;
        return ( 
                <div className="App ">
                    {items.map(item=>(
                        <ul className="list-group" key = {item.id}>
                            <li class="list-group-item">{item.name}</li>
                            <li class="list-group-item">{item.email}</li>
                            <li class="list-group-item">{item.phone}</li>
                        </ul>
                    ))};
                </div>
                 );
    }
}
 
export default getPage;
