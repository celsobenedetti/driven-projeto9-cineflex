import './Footer.scss';

export default function Footer({ posterURL, title, session }) {
	return (
		<footer>
			<img src={posterURL} alt="poster" />
			<div>
				<h3>{title}</h3>
				{session ? <h3>{session}</h3> : ''}
			</div>
		</footer>
	);
}
