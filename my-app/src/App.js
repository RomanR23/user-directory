import React, {Component} from 'react';
import './App.css';

import Header from './Components/Header';
import Main from './Components/Main';
import Previous from './Components/Previous';
import Next from './Components/Next'; 
import MovieList from './Components/MovieList';
import data from './data';



class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      people:data,
      i:0
    };
    this.iUp = this.iUp.bind(this);
    this.iDown= this.iDown.bind(this);
  }



  iUp(){
    if(this.state.i <24){
      this.setState({
        i: this.state.i + 1

      })
    }
  }

  iDown(){
    if(this.state.i >0){
      this.setState({
        i: this.state.i - 1
      }) 
    }
  }





  render(){
    return <html lang='en'>
            <Header></Header>
      <body className='App-body'>

        <div className='Main-Area'>
          <Main people={this.state.people} i={this.state.i}></Main>
          <MovieList people={this.state.people} i={this.state.i}></MovieList>
        </div>
        <Previous iDown={this.iDown} ></Previous>
        <Next iUp={this.iUp}></Next>

      </body>


      </html>
  }
}

export default App;
