import { defineStore } from "pinia";
import { API_URL } from "../config/constants";
import { getQuery } from "../helpers/query.helper";
import IReview from "../interfaces/review.interface";
import { FetchService } from "../services/fetchService";
import { HeadersType, IReturnData } from "../services/serviceTypes";

export const useReviewStore = defineStore("review", {
  state: () => ({
    reviews: [] as IReview[],
    review: null as IReview | null,
  }),
  getters: {},
  actions: {
    async getReviews(
      headers: HeadersType,
      queryObject?: object
    ): Promise<IReturnData> {
      let url = API_URL.REVIEWS.GET_REVIEWS.URL;
      if (queryObject) {
        url += getQuery(queryObject);
      }
      try {
        const response = await FetchService.callApi(
          url,
          API_URL.REVIEWS.GET_REVIEWS.METHOD,
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
        const fileteredReviews = data.filter(review => review.user !== null && review.movie !== null);
        this.reviews = fileteredReviews;
        return {
          error: false,
          value: fileteredReviews,
        };
      } catch (err) {
        return {
          error: true,
          value: "Error Getting Reviews",
        };
      }
    },
    async getReview(
      headers: HeadersType,
      reviewId: string
    ): Promise<IReturnData> {
      try {
        const response = await FetchService.callApi(
          API_URL.REVIEWS.GET_REVIEW.URL + reviewId,
          API_URL.REVIEWS.GET_REVIEW.METHOD,
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
        this.review = data;
        return {
          error: false,
          value: data,
        };
      } catch (err) {
        return {
          error: true,
          value: "Error Getting Review",
        };
      }
    },
    async getMovieReviews(
      headers: HeadersType,
      movieTitle: any,
      queryObject?: object
    ): Promise<IReturnData> {
      let url = API_URL.REVIEWS.GET_MOVIE_REVIEWS.URL + movieTitle;
      if (queryObject) {
        url += getQuery(queryObject);
      }
      try {
        const response = await FetchService.callApi(
          url,
          API_URL.REVIEWS.GET_MOVIE_REVIEWS.METHOD,
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
        this.reviews = data;
        return {
          error: false,
          value: data,
        };
      } catch (err) {
        return {
          error: true,
          value: "Error Getting Reviews",
        };
      }
    },
    async getUserReviews(
      headers: HeadersType,
      username: any,
      queryObject?: object
    ): Promise<IReturnData> {
      let url = API_URL.REVIEWS.GET_USER_REVIEWS.URL + username;
      if (queryObject) {
        url += getQuery(queryObject);
      }
      try {
        const response = await FetchService.callApi(
          url,
          API_URL.REVIEWS.GET_USER_REVIEWS.METHOD,
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
        this.reviews = data;
        return {
          error: false,
          value: data,
        };
      } catch (err) {
        return {
          error: true,
          value: "Error Getting Reviews",
        };
      }
    },
    async getCreatedReviews(
      headers: HeadersType,
      queryObject?: object
    ): Promise<IReturnData> {
      let url = API_URL.REVIEWS.GET_CREATED_REVIEWS.URL;
      if (queryObject) {
        url += getQuery(queryObject);
      }
      try {
        const response = await FetchService.callApi(
          url,
          API_URL.REVIEWS.GET_CREATED_REVIEWS.METHOD,
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
        this.reviews = data;
        return {
          error: false,
          value: data,
        };
      } catch (err) {
        return {
          error: true,
          value: "Error Getting Reviews",
        };
      }
    },
    async getFavoriteReviews(
      headers: HeadersType,
      queryObject?: object
    ): Promise<IReturnData> {
      let url = API_URL.REVIEWS.GET_FAVORITE_REVIEWS.URL;
      if (queryObject) {
        url += getQuery(queryObject);
      }
      try {
        const response = await FetchService.callApi(
          url,
          API_URL.REVIEWS.GET_FAVORITE_REVIEWS.METHOD,
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
        this.reviews = data;
        return {
          error: false,
          value: data,
        };
      } catch (err) {
        return {
          error: true,
          value: "Error Getting Reviews",
        };
      }
    },
  },
});
