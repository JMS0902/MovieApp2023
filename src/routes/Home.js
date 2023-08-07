import React, { Component } from 'react'
import Movie from "../components/Movie"
import axios from 'axios'
import '../Styles/Home.css'

export class Home extends Component {
  state =  {
    isLoading: true,
    movies: [],
  }

  getMovies = async () => {
    const {
      data: {
        data: {movies} //movies 라는 속성 > 영화 정보가 들어있는 배열을 가져옴
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count');
    console.log('movies',movies);
    this.setState({isLoading:false,movies}) //속성:값의 이름이 동일하면 하나만 써도 된다.
  }

  componentDidMount(){
    this.getMovies();
  }

  render() {
    const {isLoading, movies} = this.state;
    return (
      <>
        <section className='container'>
        {isLoading ? 
        <div className='loader'>
            <span className='loader_text'>'Loading...'</span>
        </div> 
        : 
        <div className='movies'>
        {movies.map( (movie,index) =>(
            <Movie 
            key={index}
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image}
            genres={movie.genres}
            />
          ))
        }  
          {/* medium_cover_image, title, year, summary*/}
        </div>
        }        
        </section>
        <div>Home</div>
      </>
    )
  }
}

export default Home