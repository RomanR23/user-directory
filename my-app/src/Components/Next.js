import React, {Component} from 'react';


class Next extends Component{
    constructor(props){
        super();
        this.state={
            
        }
    }



    render(){
        return <>
            <button type="button" onClick={()=> this.props.iUp()} className='Next'> Next </button>
        </>
    }
}

export default Next