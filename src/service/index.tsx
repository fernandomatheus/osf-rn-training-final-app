import axios from 'axios';

const BASE_URL = 'https://osf-rn-training-bff.herokuapp.com';

interface Trailer {
  url: string;
}

export interface Movie {
  id: string;
  title: string;
  contentRating: string;
  synopsis: string;
  posterPortraitUrl: string | null;
  posterHorizontalUrl: string | null;
  trailers: Trailer[];
}

export const getMovies = () => {
  return axios.get<Movie[]>(`${BASE_URL}/movies`);
};
