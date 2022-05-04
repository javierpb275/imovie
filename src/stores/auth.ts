import { defineStore } from "pinia";
import { API_URL } from "../config/constants";
import { getQuery } from "../helpers/query.helper";
import IReview from "../interfaces/review.interface";
import IUser from "../interfaces/user.interface";
import { AuthService } from "../services/authService";
import { FetchService } from "../services/fetchService";
import {
  BodyType,
  HeadersType,
  IReturnData,
  IUserSignIn,
  IUserSignUp,
} from "../services/serviceTypes";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as IUser | null,
    isAuthorized: false,
    favoriteReviews: [] as IReview[]
  }),
  getters: {},
  actions: {
    async signin(user: IUserSignIn): Promise<IReturnData> {
      try {
        const data = await AuthService.signIn(user);
        if (data.error) {
          return data;
        }
        this.user = data.value.user;
        this.isAuthorized = true;
        return data;
      } catch (err) {
        return {
          error: true,
          value: "Error Signing In",
        };
      }
    },
    async signup(user: IUserSignUp): Promise<IReturnData> {
      try {
        const data = await AuthService.signUp(user);
        if (data.error) {
          return data;
        }
        this.user = data.value.user;
        this.isAuthorized = true;
        return data;
      } catch (err) {
        return {
          error: true,
          value: "Error Signing Up",
        };
      }
    },
    async signout(): Promise<IReturnData> {
      try {
        const data = await AuthService.signOut();
        return data;
      } catch (err) {
        return {
          error: true,
          value: "Error Signing Out",
        };
      }
    },
    async getProfile(headers: HeadersType): Promise<IReturnData> {
      try {
        const response = await FetchService.callApi(
          API_URL.USERS.PROFILE.GET_PROFILE.URL,
          API_URL.USERS.PROFILE.GET_PROFILE.METHOD,
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
        this.user = data;
        return {
          error: false,
          value: data,
        };
      } catch (err) {
        return {
          error: true,
          value: "Error Getting Profile",
        };
      }
    },
    async deleteProfile(
      headers: HeadersType,
      refreshToken: string
    ): Promise<IReturnData> {
      try {
        const response = await FetchService.callApi(
          API_URL.USERS.PROFILE.DELETE_PROFILE.URL,
          API_URL.USERS.PROFILE.DELETE_PROFILE.METHOD,
          { token: refreshToken },
          headers
        );
        const data = await response.json();
        if (data.error) {
          return {
            error: true,
            value: data.error,
          };
        }
        this.user = null;
        this.isAuthorized = false;
        return {
          error: false,
          value: data,
        };
      } catch (err) {
        return {
          error: true,
          value: "Error Deleting Profile",
        };
      }
    },
    async updateProfile(
      headers: HeadersType,
      user: BodyType
    ): Promise<IReturnData> {
      try {
        const response = await FetchService.callApi(
          API_URL.USERS.PROFILE.UPDATE_PROFILE.URL,
          API_URL.USERS.PROFILE.UPDATE_PROFILE.METHOD,
          user,
          headers
        );
        const data = await response.json();
        if (data.error) {
          return {
            error: true,
            value: data.error,
          };
        }
        this.user = data;
        return {
          error: false,
          value: data,
        };
      } catch (err) {
        return {
          error: true,
          value: "Error Updating Profile",
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
        const filteredReviews = data.filter(
          (review) => review.user !== null && review.movie !== null
        );
        this.favoriteReviews = filteredReviews;
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
  persist: true,
});
