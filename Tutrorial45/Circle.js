import React, {  PureComponent } from 'react';

class Circle extends PureComponent {
    render() {
        console.log('This is being called from Circle Component');
        return (
            <div>
                Circle {this.props.type}
            </div>
        );
    }
}

export default Circle;