import React, {Component} from 'react';

class MovieList extends Component{




    render(){
        return <>
            <div className='List'>
                1. {this.props.people[this.props.i].favoriteMovies[0]}
                <br></br>
                <br></br>
                2. {this.props.people[this.props.i].favoriteMovies[1]}
                <br></br>
                <br></br>
                3. {this.props.people[this.props.i].favoriteMovies[2]}

            </div>



        </>
    }
}

export default MovieList