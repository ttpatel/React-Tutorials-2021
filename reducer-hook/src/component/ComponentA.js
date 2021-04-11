import React, { useContext } from 'react'
import { CountContext } from '..App/'
function ComponentA() {
    const CountContext = useContext(CountContext)
    return (
        <div>
            Component A
            <button onClick={() => CountContext.countDispatch('increment')}>Inc</button>
            <button onClick={() => CountContext.countDispatch('decrement')}>Dec</button>
            <button onClick={() => CountContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentA
