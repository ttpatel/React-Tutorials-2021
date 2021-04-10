import React from 'react'
import { render } from 'react-dom'

const UpdatedComponent = (OriginalComponent)=>{
    class NewComponent extends React.Component{
        render(){
            return <OriginalComponent name='ttpatel'/>
        }
    }
    return NewComponent
}

export default UpdatedComponent