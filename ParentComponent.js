import React, { Component } from 'react';

class ParentComponent extends Component {

    constructor(props) {
        super(props);
        
        console.log('I am in Constructor');
        this.state={
            name:'Sathish'
        }
    }

    
    static getDerivedStateFromProps(props,state){

        console.log('I am in the getDerivedStateFromProps method');
        return null;
    }

    componentDidMount(){
        console.log('inside Component did mount');
    }
    
    render() {
        console.log('Inside Render Method');
        return (
    
            <div>
                Welcome {this.state.name}
            </div>
        );
    }
}

export default ParentComponent;