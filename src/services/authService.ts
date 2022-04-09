import { FetchService } from "./fetchService";
import { API_URL } from "../config/constants";
import IUser from '../interfaces/user.interface';

interface TokenData {
  accessToken: string;
  refreshToken: string;
}

type HeadersType = string[][] | Record<string, string> | Headers;

export class AuthService {

    //SIGNIN
  static async signIn(user: IUser) {
    const returnData = {
      error: false,
      value: "",
    };
    try {
      const response = await FetchService.callApi(
        API_URL.USERS.SIGNIN.URL,
        API_URL.USERS.SIGNIN.METHOD,
        user
      );
      const data = await response.json();
      if (data.error) {
        returnData.error = true;
        returnData.value = data.error;
      }
      if (!data.accessToken || !data.refreshToken) {
        returnData.error = true;
        returnData.value = "Authentication problem. Error Code: IM-001-001"; //invented error code: 001: auth problem. 001: accessToken or refreshToken not obtained
      }

      AuthService.saveUserTokens({
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      });
    } catch (err) {
      console.log(err);
      returnData.error = true;
      returnData.value = "Authentication problem. Error Code: IM-001-000";
    }

    return returnData;
  }

  //SAVE USER TOKENS IN LOCALSTORAGE
  static saveUserTokens(data: TokenData) {
    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);
  }


  static async getAndValidateHeaderToken(): Promise<HeadersType> {
    // todo: validate token, if expired call refresh endpoint with refresh token, if refresh token signout user and redirect to login page
    let token = localStorage.getItem("accessToken");
    console.log("TODO: 1. validateToken");

    const isValid = false;

    try {
      if (!isValid) {
        console.log("TODO: 2. refreshToken if accestoken not valid");

        const refreshToken = localStorage.getItem("refreshToken");
        const response = await FetchService.callApi(
          API_URL.USERS.REFRESH_TOKEN.URL,
          API_URL.USERS.REFRESH_TOKEN.METHOD,
          { token: refreshToken }
        );
        const data = await response.json();

        if (data.error || !data.accessToken || !data.refreshToken) {
          throw Error("Error refreshing token, signout");
        }

        AuthService.saveUserTokens({
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
        });

        token = data.accessToken;
      }
    } catch (error) {
      console.log("TODO: 3. if refresh token fails call sign out function");
      AuthService.signOut();
    }

    return { Authorization: `Bearer ${token}` };
  }

  //SIGNOUT
  static signOut() {
    console.log("3.1 clear user store");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshtoken");
    console.log("3.3 Call signout route in backend");
  }
}
