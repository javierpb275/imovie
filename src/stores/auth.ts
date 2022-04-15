import { defineStore } from "pinia";
import { API_URL } from "../config/constants";
import IUser from "../interfaces/user.interface";
import { AuthService } from "../services/authService";
import { FetchService } from "../services/fetchService";
import { HeadersType, IReturnData, IUserSignIn, IUserSignUp } from "../services/serviceTypes";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as IUser | null,
    isAuthorized: false
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
            value: data.error
          }
        }
        this.user = data;
        return {
          error: false,
          value: data
        }
      } catch (err) {
        return {
          error: true,
          value: "Error Getting Profile",
        };
      }
    }
  },
  persist: true,
});
