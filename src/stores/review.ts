import { defineStore } from "pinia";
import { API_URL } from "../config/constants";
import { getQuery } from "../helpers/query.helper";
import IReview from "../interfaces/review.interface";
import { FetchService } from "../services/fetchService";
import { BodyType, HeadersType, IReturnData } from "../services/serviceTypes";

export const useReviewStore = defineStore("review", {
  state: () => ({
    reviews: [] as IReview[],
    review: null as IReview | null,
    reviewPoints: 3,
  }),
  getters: {},
  actions: {
    async deleteReview(
      headers: HeadersType,
      reviewId: string
    ): Promise<IReturnData> {
      try {
        const response = await FetchService.callApi(
          API_URL.REVIEWS.DELETE_REVIEW.URL + reviewId,
          API_URL.REVIEWS.DELETE_REVIEW.METHOD,
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
          value: "Error Deleting Review",
        };
      }
    },
    async updateReview(
      headers: HeadersType,
      reviewId: string,
      review: BodyType
    ): Promise<IReturnData> {
      try {
        const response = await FetchService.callApi(
          API_URL.REVIEWS.UPDATE_REVIEW.URL + reviewId,
          API_URL.REVIEWS.UPDATE_REVIEW.METHOD,
          review,
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
          value: data.value,
        };
      } catch (err) {
        return {
          error: true,
          value: "Error Updating Review",
        };
      }
    },
    async createReview(
      headers: HeadersType,
      review: any
    ): Promise<IReturnData> {
      try {
        const response = await FetchService.callApi(
          API_URL.REVIEWS.CREATE_REVIEW.URL,
          API_URL.REVIEWS.CREATE_REVIEW.METHOD,
          review,
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
          value: data.value,
        };
      } catch (err) {
        return {
          error: true,
          value: "Error Creating Review",
        };
      }
    },
    async removeLike(
      headers: HeadersType,
      reviewId: string
    ): Promise<IReturnData> {
      try {
        const response = await FetchService.callApi(
          API_URL.REVIEWS.REMOVE_LIKE.URL,
          API_URL.REVIEWS.REMOVE_LIKE.METHOD,
          { reviewId },
          headers
        );
        const data = await response.json();
        if (data.error) {
          return {
            error: true,
            value: data.error,
          };
        }
        return {
          error: false,
          value: data.value,
        };
      } catch (err) {
        return {
          error: true,
          value: "Error Removing Like",
        };
      }
    },
    async removeDislike(
      headers: HeadersType,
      reviewId: string
    ): Promise<IReturnData> {
      try {
        const response = await FetchService.callApi(
          API_URL.REVIEWS.REMOVE_DISLIKE.URL,
          API_URL.REVIEWS.REMOVE_DISLIKE.METHOD,
          { reviewId },
          headers
        );
        const data = await response.json();
        if (data.error) {
          return {
            error: true,
            value: data.error,
          };
        }
        return {
          error: false,
          value: data.value,
        };
      } catch (err) {
        return {
          error: true,
          value: "Error Removing Dislike",
        };
      }
    },
    async removeFavorites(
      headers: HeadersType,
      reviewId: string
    ): Promise<IReturnData> {
      try {
        const response = await FetchService.callApi(
          API_URL.REVIEWS.REMOVE_FAVORITES.URL,
          API_URL.REVIEWS.REMOVE_FAVORITES.METHOD,
          { reviewId },
          headers
        );
        const data = await response.json();
        if (data.error) {
          return {
            error: true,
            value: data.error,
          };
        }
        return {
          error: false,
          value: data.value,
        };
      } catch (err) {
        return {
          error: true,
          value: "Error Removing from Favorites",
        };
      }
    },
    async addFavorites(
      headers: HeadersType,
      reviewId: string
    ): Promise<IReturnData> {
      try {
        const response = await FetchService.callApi(
          API_URL.REVIEWS.ADD_FAVORITES.URL,
          API_URL.REVIEWS.ADD_FAVORITES.METHOD,
          { reviewId },
          headers
        );
        const data = await response.json();
        if (data.error) {
          return {
            error: true,
            value: data.error,
          };
        }
        return {
          error: false,
          value: data.value,
        };
      } catch (err) {
        return {
          error: true,
          value: "Error Adding to Favorites",
        };
      }
    },
    async addDislike(
      headers: HeadersType,
      reviewId: string
    ): Promise<IReturnData> {
      try {
        const response = await FetchService.callApi(
          API_URL.REVIEWS.ADD_DISLIKE.URL,
          API_URL.REVIEWS.ADD_DISLIKE.METHOD,
          { reviewId },
          headers
        );
        const data = await response.json();
        if (data.error) {
          return {
            error: true,
            value: data.error,
          };
        }
        return {
          error: false,
          value: data.value,
        };
      } catch (err) {
        return {
          error: true,
          value: "Error Adding Dislike",
        };
      }
    },
    async addLike(
      headers: HeadersType,
      reviewId: string
    ): Promise<IReturnData> {
      try {
        const response = await FetchService.callApi(
          API_URL.REVIEWS.ADD_LIKE.URL,
          API_URL.REVIEWS.ADD_LIKE.METHOD,
          { reviewId },
          headers
        );
        const data = await response.json();
        if (data.error) {
          return {
            error: true,
            value: data.error,
          };
        }
        return {
          error: false,
          value: data.value,
        };
      } catch (err) {
        return {
          error: true,
          value: "Error Adding Like",
        };
      }
    },
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
        const data: IReview[] = await response.json();
        const filteredReviews = data.filter(
          (review) => review.user !== null && review.movie !== null
        );
        this.reviews = filteredReviews;
        return {
          error: false,
          value: filteredReviews,
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
        const data: IReview[] = await response.json();
        const filteredReviews = data.filter(
          (review) => review.user !== null && review.movie !== null
        );
        this.reviews = filteredReviews;
        return {
          error: false,
          value: filteredReviews,
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
        const data: IReview[] = await response.json();
        const filteredReviews = data.filter(
          (review) => review.user !== null && review.movie !== null
        );
        this.reviews = filteredReviews;
        return {
          error: false,
          value: filteredReviews,
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
        const data: IReview[] = await response.json();
        const filteredReviews = data.filter(
          (review) => review.user !== null && review.movie !== null
        );
        this.reviews = filteredReviews;
        return {
          error: false,
          value: filteredReviews,
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
        const data: IReview[] = await response.json();
        const filteredReviews = data.filter(
          (review) => review.user !== null && review.movie !== null
        );
        this.reviews = filteredReviews;
        return {
          error: false,
          value: filteredReviews,
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
