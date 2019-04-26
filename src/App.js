import React, { Component } from "react";
import './App.css';
import Movie from './Movie'; // ./ -->현재 폴더




class App extends Component{
  state={
    movies:[
      {
        title:'타이타닉',
        poster:'http://image.cine21.com/resize/cine21/poster/2018/0102/17_50_39__5a4b47df43cd9[X230,330].jpg'
      },
      {
        title:'캡틴마블',
        poster:'http://image.cine21.com/resize/cine21/poster/2019/0225/14_10_18__5c7378ba87fb6[X230,330].jpg'
      },
      {
        title:'신데렐라',
        poster:'http://image.cine21.com/resize/cine21/poster/2015/0319/13_42_29__550a53b540b97[X230,330].jpg'
      },
      {
        title:'베놈',
        poster:'http://image.cine21.com/resize/cine21/poster/2018/0921/11_48_04__5ba45be496c69[X230,330].jpg'
      }
    ]
  }

  //5초 뒤에 새로운 영화가 추가
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        movies:[
          ...this.state.movies,
          {
            title:'트랜스포머',
            poster:'https://upload.wikimedia.org/wikipedia/ko/thumb/a/a8/%ED%8A%B8%EB%9E%9C%EC%8A%A4%ED%8F%AC%EB%A8%B8_%EC%B5%9C%ED%9B%84%EC%9D%98_%EA%B8%B0%EC%82%AC.jpg/250px-%ED%8A%B8%EB%9E%9C%EC%8A%A4%ED%8F%AC%EB%A8%B8_%EC%B5%9C%ED%9B%84%EC%9D%98_%EA%B8%B0%EC%82%AC.jpg'
          }
        ]
      })
    },2000);
  }

  render(){
    return (
    <div className = "App">
      {
        this.state.movies.map((x,index)=>{
          return <Movie title={x.title} poster={x.poster} key={index}/>
        })
      }
    </div>
    )
  }//render

}

export default App;