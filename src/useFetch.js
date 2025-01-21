import { useState, useEffect } from "react";

const useFetch = (query) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      setIsLoading(true);
      setIsError(false);
      
      try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}${query}`);
        const data = await res.json();

        if (data.Response === "True") {
          setMovie(data);
        } else {
          setIsError(true);
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchMovie();
  }, [query]);

  return { isLoading, movie, isError };
};

export default useFetch;
