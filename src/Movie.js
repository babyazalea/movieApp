import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component{
   static propTypes={
       title:PropTypes.string.isRequired,
       poster:PropTypes.string.isRequired
   } 
   render(){
        return (
        <div>    
        <MoviePoster poster={this.props.poster}/>
        <h1>{this.props.title}</h1>
        </div>
        )
    }
}

//props 객체의 경우 하위(아래의) 컴포넌트로 분리되었을 때에는 실행이 바로 되지 않음.
//상위 컴포넌트에서 props로 데이터를 호출한 후 하위 컴포넌트에서 활용가능.
class MoviePoster extends Component{
    static propTypes={
        poster:PropTypes.string.isRequired
    }
    render(){
        
    return <img src={this.props.poster}/>
    }
}

export default Movie;