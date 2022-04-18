import { defineStore } from "pinia";
import { API_URL } from "../config/constants";
import IMovie from "../interfaces/movie.interface";
import { FetchService } from "../services/fetchService";
import { HeadersType, IReturnData } from "../services/serviceTypes";

export const useMovieStore = defineStore("movie", {
  state: () => ({
      movies: [] as IMovie[],
      movie: null as IMovie|null
  }),
  getters: {},
  actions: {
    async getMovies(headers: HeadersType, query?: string): Promise<IReturnData> {
        let url = API_URL.MOVIES.GET_MOVIES.URL;
        if (query) {
          url += "?" + query;
        }
        try {
          const response = await FetchService.callApi(
            url,
            API_URL.MOVIES.GET_MOVIES.METHOD,
            undefined,
            headers
          );
          const data = await response.json();
          if (data.error) {
            return {
              error: true,
              value: data.error,
            };
          }
          this.movies = data;
          return {
            error: false,
            value: data,
          };
        } catch (err) {
          return {
            error: true,
            value: "Error Getting Movies",
          };
        }
      },
      async getMovie(headers: HeadersType, movieId: string): Promise<IReturnData> {
        try {
          const response = await FetchService.callApi(
            API_URL.MOVIES.GET_MOVIES.URL + movieId,
            API_URL.MOVIES.GET_MOVIES.METHOD,
            undefined,
            headers
          );
          const data = await response.json();
          if (data.error) {
            return {
              error: true,
              value: data.error,
            };
          }
          this.movie = data;
          return {
            error: false,
            value: data,
          };
        } catch (err) {
          return {
            error: true,
            value: "Error Getting Movie",
          };
        }
      },
  },
});