import React, { Component } from 'react';

class Rectangle extends Component {
    render() {
        console.log('This is being called from Rectangle Component');
        return (
            <div>
                Rectangle {this.props.type}
            </div>
        );
    }
}

export default Rectangle;