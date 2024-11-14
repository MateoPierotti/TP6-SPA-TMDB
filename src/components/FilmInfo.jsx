import React from 'react';
import { Link } from 'react-router-dom';

const FilmInfo = ({ details }) => {
    if (!details) {
        return <p>Se estan cargando los datos...</p>;
    }
    
    return (
        <div className="p-4 flex flex-col gap-8">
            <div className="relative w-full max-w-screen-xl mx-auto">
                {details.backdrop_path ? (
                    <img
                        src={`https://image.tmdb.org/t/p/w500${details.backdrop_path}`}
                        alt={details.title}
                        className="w-full rounded-lg object-cover"
                    />
                ) : (
                    <p>No se ha encontrado la imagen</p>
                )}
                {/* Contenedor con texto encima de la imagen */}
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 p-4 flex flex-col justify-center items-start">
                    <div className="text-center sm:text-left">
                        <h1 className="text-4xl sm:text-6xl font-semibold text-white mb-4">{details.title}</h1>
                        <h3 className="text-xl sm:text-4xl mb-4 text-white">{details.overview}</h3>
                        <h4 className="text-lg sm:text-2xl mb-2 text-white"><strong>Fecha de lanzamiento:</strong> {details.release_date}</h4>
                        <h4 className="text-base sm:text-xl mb-4 text-white"><strong>Puntuación:</strong> {details.vote_average}</h4>
                        <Link to={`/films/${details.id}/previews`} className="text-blue-500 underline">
                            Ver trailers
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default FilmInfo;
