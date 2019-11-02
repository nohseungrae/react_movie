import React from 'react';
import Movie from './Movies';
import axios from "axios";
import "./App.css";
class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };
    getMovies = async () => {
        const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        console.log(movies, "무슨 무비즈이지?");
        this.setState({ movies, isLoading: false })
    }
    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({isLoading : false})
        // }, 2000)
        this.getMovies();
    }
    render() {
        const { isLoading, movies } = this.state;
        console.log({ isLoading, movies })
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span>Loading...</span>
                    </div>) :
                    (
                        <div className="movies">
                            {
                                movies.map(movie => {
                                    return <Movie
                                        key={movie.id}
                                        id={movie.id}
                                        year={movie.year}
                                        title={movie.title}
                                        summary={movie.summary}
                                        poster={movie.medium_cover_image}
                                        genres={movie.genres}></Movie>
                                })
                            }
                        </div>
                    )}
            </section>
        )
    }
}

export default App;