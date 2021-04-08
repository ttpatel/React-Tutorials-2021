import React from 'react'
import Welcome from './Welcome(T6)'

// with Jsx  

const Hello = () => {
    // return (
    //     <div class = 'dummyClass'>
    //         <h1>Hello TT Patel...</h1>
    //     </div>
    // )
    // 

    // without JSX

    return React.createElement(
        'div',
        { id: 'hello', className: 'dummyClass' },
        React.createElement('h1', null, 'Welcome Patel...')
    )
}

export default Hello
