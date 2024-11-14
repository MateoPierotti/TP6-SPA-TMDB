import { Link } from 'react-router-dom';

const FilmGrid = ({ films, onSelectFilm }) => {
    if (!films || films.length === 0) return <p>No se encontraron películas</p>;

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-1">
            {films.map((film) => (
                <div key={film.id} className="film-item">
                    <Link to={`/films/${film.id}`} onClick={() => onSelectFilm(film.id)}>
                        <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.title} />
                        <h3>{film.title}</h3>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default FilmGrid;
