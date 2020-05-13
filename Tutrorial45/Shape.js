import React, { PureComponent } from 'react';
import Circle from './Circle'
import Rectangle from './Rectangle'

class Shape extends PureComponent {
    constructor(props) {
        super(props);
        
        this.state={
            type:'Component'
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                type:'Component'
            })
        },2000);
    }
    
    render() {
        console.log('This is being called from Shape Component');
        return (
            <div>
                Shape {this.state.type}
                <Circle type={this.state.type}/>
                <Rectangle type={this.state.type}/>
            </div>
        );
    }
}

export default Shape;