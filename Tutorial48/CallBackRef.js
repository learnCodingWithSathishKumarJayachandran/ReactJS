import React, { Component } from 'react';

class CallBackRef extends Component {

    constructor(props) {
        super(props);
        this.name=null;
        this.setName=element=>{
            this.name=element
        }
    }

    componentDidMount(){
        this.name.focus();
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={this.setName} />
            </div>
        );
    }
}

export default CallBackRef;