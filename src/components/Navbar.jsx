import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onSearch }) => {
    const [query, setQuery] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query);
        }
    };

    return (
        <header className="bg-black p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <Link to="/">
                <img
                    src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg"
                    alt="TMDB Logo"
                    className="h-12 sm:h-10 md:h-8"
                />
            </Link>
    
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Buscar películas..."
                    className="p-2 rounded-l-md border border-gray-300 w-64 sm:w-80"
                />
                <button
                    type="submit"
                    className="bg-[#01b4e4] text-white rounded-r-md p-2 hover:bg-[#00a3d1] w-full sm:w-auto"
                >
                    Buscar
                </button>
            </form>
        </header>
    );
};

export default Navbar;
