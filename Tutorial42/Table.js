import React from 'react';
import Column from './Column'

function Table(props) {
    return (
        <React.Fragment>
            <table>
                <tr>
                    <th>Name</th>
                </tr>
                <tr>
                <Column/>
                </tr>
                </table>
               
        </React.Fragment>
    );
}

export default Table;