import React, { useEffect } from 'react';

const FetchFilms = ({ searchTerm, activePage, onFetchFilms, filmId, onFetchFilmDetails, onFetchFilmPreviews }) => {
    const apiKey = '4f5f43495afcc67e9553f6c684a82f84';

    useEffect(() => {
        const loadFilms = async () => {
            const url = searchTerm
                ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}&page=${activePage}`
                : `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${activePage}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                onFetchFilms(data.results, data.total_pages);
            } catch (error) {
                console.error("Error loading films:", error);
                onFetchFilms([], 0);
            }
        };

        loadFilms();
    }, [searchTerm, activePage, onFetchFilms]);

    useEffect(() => {
        const loadFilmDetails = async () => {
            if (filmId) {
                try {
                    const response = await fetch(`https://api.themoviedb.org/3/movie/${filmId}?api_key=${apiKey}&append_to_response=videos`);
                    const data = await response.json();

                    onFetchFilmDetails(data);
                    onFetchFilmPreviews(data.videos.results);
                } catch (error) {
                    console.error("Error loading film details:", error);
                }
            }
        };
    
        loadFilmDetails();
    }, [filmId, onFetchFilmDetails, onFetchFilmPreviews]);
    

    return null;
};

export default FetchFilms;
