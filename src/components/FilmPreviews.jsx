import React from 'react';

const FilmPreviews = ({ previews }) => {
    if (!previews || previews.length === 0) {
        return <p>No trailers available.</p>;
    }

    return (
        <div className="p-4">
            <div className='text-center'>
                <h1 className="text-5xl font-semibold mb-4">Trailers</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {previews.map((preview) => (
                    <iframe
                        key={preview.id}
                        width="100%"
                        height="315"
                        src={`https://www.youtube.com/embed/${preview.key}`}
                        title={preview.name}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                ))}
            </div>
        </div>
    );
};

export default FilmPreviews;
