import React, { useContext } from 'react'
import { CountContext } from '..App/'
function ComponentF () {
    const CountContext = useContext(CountContext)
    return (
        <div>
            Component F 
            <button onClick={() => CountContext.countDispatch('increment')}>Inc</button>
            <button onClick={() => CountContext.countDispatch('decrement')}>Dec</button>
            <button onClick={() => CountContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentF 
