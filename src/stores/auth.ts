import { defineStore } from "pinia";
import IUser from "../interfaces/user.interface";
import { AuthService } from "../services/authService";
import { IUserSignIn, IUserSignUp } from "../services/serviceTypes";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as IUser | null,
    isAuthorized: false
  }),
  getters: {},
  actions: {
    async signin(user: IUserSignIn) {
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
    async signup(user: IUserSignUp) {
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
    async signout() {
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
  },
  persist: true,
});
