import axios from 'axios';

const BASE_URL = 'https://osf-rn-training-bff.herokuapp.com';

export interface Movie {
  id: string;
  title: string;
  contentRating: string;
  synopsis: string;
  posterPortraitUrl: string | null;
  posterHorizontalUrl: string | null;
}

export const getMovies = () => {
  return axios.get<Movie[]>(`${BASE_URL}/movies`);
};
