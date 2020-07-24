import React, { Component } from 'react';

class Rough extends Component{
    
    render(){
        return(
            <React.Fragment>
                <h1>hello {this.props.name} .... </h1>
                
                <div className="shopping-list">
                    <h3>Shopping List for {this.props.name}</h3>
                    <ul>
                        <li>Instagram</li>
                        <li>WhatsApp</li>
                        <li>Oculus</li>
                    </ul>
                </div>
            </React.Fragment>
            
        )
    }

}

export default Rough;