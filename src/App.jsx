import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import FilmGrid from './components/FilmGrid';
import PageNavigation from './components/PageNavigation';
import FetchFilms from './components/FetchFilms';
import FilmInfo from './components/FilmInfo';
import FilmPreviews from './components/FilmPreviews';

function MainApp() {
    const [films, setFilms] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [chosenFilmId, setChosenFilmId] = useState(null);
    const [filmDetails, setFilmDetails] = useState(null);
    const [filmPreviews, setFilmPreviews] = useState([]);

    const onFetchFilms = (loadedFilms, count) => {
        setFilms(loadedFilms);
        setPageCount(count);
    };
    const onFetchFilmDetails = (details) => {
        setFilmDetails(details);
    };

    const onFetchFilmPreviews = (previews) => {
        setFilmPreviews(previews);
    };

    const location = useLocation();
    const isInfoPage = location.pathname.startsWith('/films/');

    return (
        <div className="MainApp">
            <Navbar onSearch={setSearchTerm} />
            <FetchFilms
                searchTerm={searchTerm}
                activePage={activePage}
                onFetchFilms={onFetchFilms}
                filmId={chosenFilmId}
                onFetchFilmDetails={onFetchFilmDetails}
                onFetchFilmPreviews={onFetchFilmPreviews}
            />
            <Routes>
                <Route path="/" element={<FilmGrid films={films} onSelectFilm={setChosenFilmId} />} />
                <Route path="/films/:id" element={<FilmInfo details={filmDetails} />} />
                <Route path="/films/:id/previews" element={<FilmPreviews previews={filmPreviews} />} />
            </Routes>
            {!isInfoPage && (
                <PageNavigation
                    activePage={activePage}
                    pageCount={pageCount}
                    onPageChange={setActivePage}
                />
            )}
        </div>
    );
}

function AppWrapper() {
    return (
        <Router>
            <MainApp />
        </Router>
    );
}

export default AppWrapper;
