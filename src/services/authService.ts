import { FetchService } from "./fetchService";
import { API_URL } from "../config/constants";
import {
  HeadersType,
  BodyType,
  ITokenData,
  IReturnData,
  IUserSignIn,
  IUserSignUp,
  Tokens,
  IPayload,
} from "./serviceTypes";
import { useAuthStore } from "../stores/auth";

export class AuthService {
  //SAVE USER TOKENS IN LOCALSTORAGE------------------------------
  static saveUserTokens(data: ITokenData) {
    localStorage.setItem(Tokens.ACCESS_TOKEN, data.accessToken);
    localStorage.setItem(Tokens.REFRESH_TOKEN, data.refreshToken);
  }

  //REMOVE TOKENS AND CLEAR STORE-----------------------------------
  static removeTokens() {
    localStorage.removeItem(Tokens.ACCESS_TOKEN);
    localStorage.removeItem(Tokens.REFRESH_TOKEN);
  }

  //CLEAR STORE----------------------------------------------------
  static clearStore() {
    const authStore = useAuthStore();
    authStore.user = null;
    authStore.isAuthorized = false;
  }

  //REMOVE TOKENS AND CLEAR STORE-----------------------------------
  static removeTokensAndClearStore() {
    AuthService.removeTokens();
    AuthService.clearStore();
  }

  //CHECK MINUTES OF TOKEN'S LIFE--------------------------------------------
  static checkMinutesOfTokensLife(expiration: number) {
    const expirationMs = expiration * 1000;
    const now = Date.now();
    const diffMs = now - expirationMs;
    const minutes = Math.floor(diffMs / 60000);
    //const seconds = ((diffMs % 60000) / 1000).toFixed(0);
    //const time = minutes + ":" + (diffMs < 10 ? '0' : '') + seconds;
    return minutes;
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

      AuthService.removeTokensAndClearStore();

      returnData.value = data;
    } catch (err) {
      console.log(err);
      returnData.error = true;
      returnData.value = "Authentication problem. Error Code: IMO-001-000";
    }
    return returnData;
  }

  //GET AND VALIDATE HEADER TOKEN
  static async getAndValidateHeaderToken(): Promise<HeadersType> {
    let accessToken = localStorage.getItem(Tokens.ACCESS_TOKEN);
    let refreshToken = localStorage.getItem(Tokens.REFRESH_TOKEN);

    if (!refreshToken || !accessToken) {
      AuthService.removeTokensAndClearStore();
      return { Authorization: `ERROR` };
    }

    const payload = JSON.parse(atob(accessToken.split(".")[1])) as IPayload;

    if (!payload || !payload.id || !payload.exp || !payload.iat) {
      AuthService.removeTokensAndClearStore();
      return { Authorization: `ERROR` };
    }

    const authStore = useAuthStore();

    if (payload.id !== authStore.user?._id) {
      AuthService.removeTokensAndClearStore();
      return { Authorization: `ERROR` };
    }

    const minutes = AuthService.checkMinutesOfTokensLife(payload.exp);

    try {
      if (minutes >= 10) {
        const result = await AuthService.refreshToken();
        if (result.error) {
          AuthService.removeTokensAndClearStore();
          return { Authorization: `ERROR` };
        }
        accessToken = localStorage.getItem(Tokens.ACCESS_TOKEN);
      }
    } catch (err) {
      return { Authorization: `ERROR` };
    }

    return { Authorization: `Bearer ${accessToken}` };
  }
}
