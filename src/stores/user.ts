import { defineStore } from "pinia";
import { API_URL } from "../config/constants";
import { getQuery } from "../helpers/query.helper";
import IUser from "../interfaces/user.interface";
import { FetchService } from "../services/fetchService";
import { HeadersType, IReturnData } from "../services/serviceTypes";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [] as IUser[],
    user: null as IUser | null,
  }),
  getters: {},
  actions: {
    async getFollowees(
      headers: HeadersType,
      queryObject?: object
    ): Promise<IReturnData> {
      let url = API_URL.USERS.GET_FOLLOWEES.URL;
      if (queryObject) {
        url += getQuery(queryObject);
      }
      try {
        const response = await FetchService.callApi(
          url,
          API_URL.USERS.GET_FOLLOWEES.METHOD,
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
        this.users = data;
        return {
          error: false,
          value: data,
        };
      } catch (err) {
        return {
          error: true,
          value: "Error Getting Followees",
        };
      }
    },
    async getUsers(
      headers: HeadersType,
      queryObject?: object
    ): Promise<IReturnData> {
      let url = API_URL.USERS.GET_USERS.URL;
      if (queryObject) {
        url += getQuery(queryObject);
      }
      try {
        const response = await FetchService.callApi(
          url,
          API_URL.USERS.GET_USERS.METHOD,
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
        this.users = data;
        return {
          error: false,
          value: data,
        };
      } catch (err) {
        return {
          error: true,
          value: "Error Getting Users",
        };
      }
    },
    async getUser(headers: HeadersType, userId: string): Promise<IReturnData> {
      try {
        const response = await FetchService.callApi(
          API_URL.USERS.GET_USER.URL + userId,
          API_URL.USERS.GET_USER.METHOD,
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
          value: "Error Getting User",
        };
      }
    },
  },
});
