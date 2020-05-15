import React from 'react';

function Memo({type}) {
    console.log('I am getting rendered from Memo')
    return (
        <div>
           Memo {type} 
        </div>
    );
}

export default React.memo(Memo);