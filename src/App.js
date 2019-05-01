import React, { Component } from "react";
import './App.css';
import Movie from './Movie'; // ./ -->현재 폴더




class App extends Component{
  state={
    
  }

  /*
  async, await

  fetch로 받아온 데이터와 그걸 처리하는 then을 일일이 지정하지 않고
  fetch가 실행된 이후 바로 다음 실행구문을 실행하게 해주는 tool

  async:이전 라인의 작업이 끝날 때까지 기다리지 않고 실행될 작업
  await:해당 기능이 끝나는 것을 기다린 후 실행 후(성공적이든 아니든)에 실행될 작업
   */

  _callApi = () => { 
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(b => b.json())
    .then(c => c.data.movies)
    .catch(err => console.log(err))
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    })
  }

  componentDidMount(){
    this._getMovies();
  }

  //랜더링 function
  _renderMovies =()=>{
    const movies=this.state.movies.map((x,index)=>{
      return <Movie 
      title={x.title} 
      poster={x.medium_cover_image} 
      key={index} 
      genres={x.genres}
      synopsis={x.synopsis}/>
    });
    return movies;
  }

  render(){
    return (
    <div className = "App">
      {
        //this.state.movies가 있을 땐 _renderMovies 실행
        //state가 비어있는 상황엔 loading...문구
        this.state.movies ? this._renderMovies() : 'Loading'
      }
    </div>
    )
  }//render

}

export default App;