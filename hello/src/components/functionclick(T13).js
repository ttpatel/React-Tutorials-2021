import React from 'react'

function Functionclick() {

    function clickhandler(){
        console.log('button clicked')
    }
    return (
        <div>
            <button onClick = {clickhandler}>Click </button>
        </div>
    )
}

export default Functionclick
