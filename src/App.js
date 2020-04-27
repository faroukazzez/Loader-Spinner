import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./hocComponents/MovieList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  };
    componentDidMount(){
      setTimeout(()=>{
        this.setState({loading:false})},3000)
        }
  
  render() {
    return (
      <div className="App">
        <MovieList loading={this.state.loading} />
      </div>
    );
  }
}

export default App;
