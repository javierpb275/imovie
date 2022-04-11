import { FetchService } from "./fetchService";
import { API_URL } from "../config/constants";
import {
  HeadersType,
  BodyType,
  ITokenData,
  IReturnData,
  IUserSignIn,
  IUserSignUp,
} from "./serviceTypes";

export class AuthService {
  //SAVE USER TOKENS IN LOCALSTORAGE------------------------------
  static saveUserTokens(data: ITokenData) {
    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);
  }

  //SIGNIN-------------------------------------------------------
  static async signIn(user: IUserSignIn): Promise<IReturnData> {
    const returnData: IReturnData = {
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
        return returnData;
      }

      if (!data.accessToken || !data.refreshToken) {
        returnData.error = true;
        returnData.value = "Authentication problem. Error Code: IMO-001-001";
        return returnData;
      }

      AuthService.saveUserTokens({
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      });

      returnData.value = data;
    } catch (err) {
      console.log(err);
      returnData.error = true;
      returnData.value = "Authentication problem. Error Code: IMO-001-000";
    }

    return returnData;
  }

  //SIGNUP--------------------------------------------------------
  static async signUp(user: IUserSignUp): Promise<IReturnData> {
    const returnData: IReturnData = {
      error: false,
      value: "",
    };
    try {
      const response = await FetchService.callApi(
        API_URL.USERS.SIGNUP.URL,
        API_URL.USERS.SIGNUP.METHOD,
        user
      );
      const data = await response.json();
      if (data.error) {
        returnData.error = true;
        returnData.value = data.error;
        return returnData;
      }

      if (!data.accessToken || !data.refreshToken) {
        returnData.error = true;
        returnData.value = "Authentication problem. Error Code: IMO-001-001";
        return returnData;
      }

      AuthService.saveUserTokens({
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      });

      returnData.value = data;
    } catch (err) {
      console.log(err);
      returnData.error = true;
      returnData.value = "Authentication problem. Error Code: IMO-001-000";
    }

    return returnData;
  }

  //SIGNOUT-------------------------------------------------
  static async signOut(): Promise<IReturnData> {
    /*     console.log("3.1 clear user store");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshtoken");
    console.log("3.3 Call signout route in backend"); */

    const returnData: IReturnData = {
      error: false,
      value: "",
    };
    if (
      !localStorage.getItem("refreshToken") ||
      !localStorage.getItem("accessToken")
    ) {
      returnData.error = true;
      returnData.value = "Authentication problem. Error Code: IMO-001-001";
    }
    const body: BodyType = {
      token: localStorage.getItem("refreshToken"),
    };
    const headers: HeadersType = {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    };

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshtoken");

    try {
      const response = await FetchService.callApi(
        API_URL.USERS.SIGNOUT.URL,
        API_URL.USERS.SIGNOUT.METHOD,
        body,
        headers
      );
      const data = await response.json();
      if (data.error) {
        returnData.error = true;
        returnData.value = data.error;
        return returnData;
      }
      if (!returnData.error) {
        returnData.value = data;
      }
    } catch (err) {
      console.log(err);
      returnData.error = true;
      returnData.value = "Authentication problem. Error Code: IMO-001-000";
    }
    return returnData;
  }

  //REFRESH TOKEN---------------------------------------------------
  static async refreshToken(): Promise<IReturnData> {
    const returnData: IReturnData = {
      error: false,
      value: "",
    };
    if (!localStorage.getItem("refreshToken")) {
      returnData.error = true;
      returnData.value = "Authentication problem. Error Code: IMO-001-001";
      return returnData;
    }
    const body: BodyType = {
      token: localStorage.getItem("refreshToken"),
    };
    try {
      const response = await FetchService.callApi(
        API_URL.USERS.REFRESH_TOKEN.URL,
        API_URL.USERS.REFRESH_TOKEN.METHOD,
        body
      );
      const data = await response.json();

      if (data.error) {
        returnData.error = true;
        returnData.value = data.error;
        return returnData;
      }

      if (!data.accessToken || !data.refreshToken) {
        returnData.error = true;
        returnData.value = "Authentication problem. Error Code: IMO-001-001";
        return returnData;
      }

      AuthService.saveUserTokens({
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      });

      returnData.value = data;
    } catch (err) {
      console.log(err);
      returnData.error = true;
      returnData.value = "Authentication problem. Error Code: IMO-001-000";
    }

    return returnData;
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
}
