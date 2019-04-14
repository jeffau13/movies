import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Movie from './Movie';
import api from '../config.json';

class MoviesList extends PureComponent {
  state = {
    movies: [],
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          api.key
        }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
      );
      const movies = await res.json();
      this.setState({
        movies: movies.results,
      });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <MovieGrid>
        {this.state.movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </MovieGrid>
    );
  }
}

export default MoviesList;

// styled components

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;
