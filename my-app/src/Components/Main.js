import React,{ Component } from "react"
import data from "../data";




class Main extends Component {
    constructor(props){
        super(props);
        
        this.state={
        i:this.props.i

        }

    };




    render(){
        return <>
            <div className='iDCount'>
                
            {this.props.people[this.props.i].id}/25
            
            </div>

            <div className='Name'>
                <b>
                    {this.props.people[this.props.i].name.first} {this.props.people[this.props.i].name.last}
                </b>    
            </div>

            <div className='From'>
            <b>From:</b> {this.props.people[this.props.i].city}, {this.props.people[this.props.i].country}
            </div>

            <div className='Job-Title'>
            <b>Job Title:</b> {this.props.people[this.props.i].title}
            </div>

            <div className='Employer'>
            <b>Employer:</b> {this.props.people[this.props.i].employer}
            </div>

            <div className='Favorite-Movies'>
            <b>Favorite Movies:</b>
            </div>



        </>

        
    }
}

export default Main
