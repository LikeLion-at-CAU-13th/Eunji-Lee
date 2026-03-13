import { useState, useEffect } from "react";
import axios from "axios";
import { type MovieDetail } from "../types/movie.types";

interface DetailApiResponse {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;
  release_date: string;
  overview: string;
  runtime: number;
  genres: { id: number; name: string }[];
}

interface UseMovieDetailReturn {
  // TODO: movie, loading, error 속성 정의
  movie: MovieDetail | null;
  loading: boolean;
  error: string | null;
}

export const useMovieDetail = (
  movieId: number | null
): UseMovieDetailReturn => {
  // TODO: useState 상태 정의
  // movie: MovieDetail | null
  // loading: boolean
  // error: string | null
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!movieId) {
      setMovie(null);
      return;
    }

    const fetchDetail = async () => {
      // TODO : TMDB API 상세 정보 호출
      // URL: `https://api.themoviedb.org/3/movie/${movieId}`
      // Generic 사용: axios.get<DetailApiResponse>()
      // params: { api_key, language: 'ko-KR' }
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get<DetailApiResponse>(
          `https://api.themoviedb.org/3/movie/${movieId}`,
          {
            params: {
              api_key: import.meta.env.VITE_TMDB_API_KEY,
              language: "ko-KR",
            },
          }
        );

        // TODO 6: 성공 시 상태 업데이트
        // setMovie(response.data as MovieDetail);
        // setError(null);
        setMovie(response.data as MovieDetail);
        setError(null);
      } catch (err) {
        setError("영화 정보를 불러올 수 없습니다.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [movieId]);

  return { movie, loading, error };
};
