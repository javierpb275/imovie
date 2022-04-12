import { FetchService } from "./fetchService";
import { API_URL } from "../config/constants";
import {
  HeadersType,
  BodyType,
  ITokenData,
  IReturnData,
  IUserSignIn,
  IUserSignUp,
  Tokens
} from "./serviceTypes";

export class AuthService {
  //SAVE USER TOKENS IN LOCALSTORAGE------------------------------
  static saveUserTokens(data: ITokenData) {
    localStorage.setItem(Tokens.ACCESS_TOKEN, data.accessToken);
    localStorage.setItem(Tokens.REFRESH_TOKEN, data.refreshToken);
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

  //REFRESH TOKEN---------------------------------------------------
  static async refreshToken(): Promise<IReturnData> {
    const returnData: IReturnData = {
      error: false,
      value: "",
    };
    if (!localStorage.getItem(Tokens.REFRESH_TOKEN)) {
      returnData.error = true;
      returnData.value = "Authentication problem. Error Code: IMO-001-001";
      return returnData;
    }
    const body: BodyType = {
      token: localStorage.getItem(Tokens.REFRESH_TOKEN),
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

  //SIGNOUT-------------------------------------------------
  static async signOut(): Promise<IReturnData> {

    const returnData: IReturnData = {
      error: false,
      value: "",
    };
    if (
      !localStorage.getItem(Tokens.REFRESH_TOKEN) ||
      !localStorage.getItem(Tokens.ACCESS_TOKEN)
    ) {
      returnData.error = true;
      returnData.value = "Authentication problem. Error Code: IMO-001-001";
      return returnData;
    }
    const body: BodyType = {
      token: localStorage.getItem(Tokens.REFRESH_TOKEN),
    };
    const headers: HeadersType = {
      Authorization: `Bearer ${localStorage.getItem(Tokens.ACCESS_TOKEN)}`,
    };

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

      localStorage.removeItem(Tokens.ACCESS_TOKEN);
      localStorage.removeItem(Tokens.REFRESH_TOKEN);

      //CLEAR STORE

      returnData.value = data;
    } catch (err) {
      console.log(err);
      returnData.error = true;
      returnData.value = "Authentication problem. Error Code: IMO-001-000";
    }
    return returnData;
  }

  //checkToken
  //static async getAndValidateHeaderToken2(): Promise<HeadersType> {}

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
