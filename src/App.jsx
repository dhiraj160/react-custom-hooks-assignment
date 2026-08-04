import React from 'react';
import useFetch from './hooks/useFetch';
import PhotoCard from './components/PhotoCard';

function App() {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/photos'
  );

  const photos = data?.slice(0, 48);

  return (
    <div className="bg-black min-h-screen text-white py-6 px-6">
      <h1 className="text-white text-2xl sm:text-3xl font-bold text-center mb-6">
        Photos
      </h1>

      {loading && (
        <div className="flex justify-center items-center min-h-[50vh]">
          <p className="text-gray-300 text-lg font-medium">Loading photos...</p>
        </div>
      )}

      {error && (
        <div className="flex justify-center items-center min-h-[50vh] p-4 text-center">
          <p className="text-red-500 text-xl font-semibold">
            Error: {error}
          </p>
        </div>
      )}

      {!loading && !error && photos && (
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo, idx) => (
              <PhotoCard key={photo.id} photo={photo} index={idx} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

