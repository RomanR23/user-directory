import React, {Component} from 'react';


class Previous extends Component{
    constructor(props){
        super();
        this.state={
            
        }
    }



    render(){
        return <>
            <button type="button" onClick={()=> this.props.iDown()} className='Previous'> Previous </button>
        </>
    }
}

export default Previous