import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../../context/ThemeContext';
import './Movies.scss';

const URL = 'https://mock-api.driven.com.br/api/v5/cineflex';

export default function Movies() {
	const { dark } = useContext(ThemeContext);
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		axios
			.get(`${URL}/movies`)
			.then((res) => {
				setMovies(res.data);
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<div className={`Home ${dark ? 'theme-dark' : 'theme-light'}`}>
			<h1 className="title">Selecione o filme</h1>
			<div className="movies">
				{movies.map((movie) => (
					<MovieCard id={movie.id} posterURL={movie.posterURL} key={movie.id} />
				))}
			</div>
		</div>
	);
}

function MovieCard({ id, posterURL }) {
	return (
		<Link to={`/sessoes/${id}`}>
			<img src={posterURL} alt="poster" className="movie" />
		</Link>
	);
}
