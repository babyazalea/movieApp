import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis';

function Movie({title, poster, genres, synopsis}){
    return(
        <div>    
        <MoviePoster poster={poster}/>
        <h1>{title}</h1>
        <p>
            {genres.map((y,index) => <MovieGenres genres={y} key={index}/>)}
        </p>
        <p>
        <LinesEllipsis
        text = {synopsis}
        maxLine ='3'
        ellipsis = '...'
        trimRight
        basedOn = 'letters'
        />
        </p>
        </div>
    )
}

// class Movie extends Component{
//    static propTypes={
//        title:PropTypes.string.isRequired,
//        poster:PropTypes.string.isRequired
//    } 
//    render(){
//         return (
//         <div>    
//         <MoviePoster poster={this.props.poster}/>
//         <h1>{this.props.title}</h1>
//         </div>
//         )
//     }
// }


/* 
component
-props : 부모로부터 받아오는 값
*/

function MovieGenres({genres}){
    return(
        <span>{genres}</span>
    )
}

function MoviePoster({poster}){
    return(
        <img src={poster} alt="Movie Poster"/>
    )
}

//props 객체의 경우 하위(아래의) 컴포넌트로 분리되었을 때에는 실행이 바로 되지 않음.
//상위 컴포넌트에서 props로 데이터를 호출한 후 하위 컴포넌트에서 활용가능.
// class MoviePoster extends Component{
//     static propTypes={
//         poster:PropTypes.string.isRequired
//     }
//     render(){
        
//     return <img src={this.props.poster}/>
//     }
// }

Movie.propTypes={
    title:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired
}

MoviePoster.propTypes={
    poster:PropTypes.string.isRequired
}

export default Movie;