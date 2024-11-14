import React from 'react';

const PageNavigation = ({ activePage, pageCount, onPageChange }) => {
    return (
        <div className="flex items-center justify-center p-4">
            {/* Button for previous page */}
            <button
                onClick={() => onPageChange(activePage - 1)}
                disabled={activePage === 1}
                className={`mx-2 px-4 py-2 rounded ${activePage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-red-500 text-white '}`}
            >
                Anterior
            </button>

            {/* Page information */}
            <span className="mx-2">
                Pagina {activePage} de {pageCount}
            </span>

            {/* Button for next page */}
            <button
                onClick={() => onPageChange(activePage + 1)}
                disabled={activePage === pageCount}
                className={`mx-2 px-4 py-2 rounded ${activePage === pageCount ? 'bg-gray-300 cursor-not-allowed' : 'bg-red-500 text-white '}`}
            >
                Siguiente
            </button>
        </div>
    );
};

export default PageNavigation;
