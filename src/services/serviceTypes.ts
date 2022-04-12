export interface IReturnData {
  error: boolean;
  value: any;
}

export interface ITokenData {
  accessToken: string;
  refreshToken: string;
}

export type BodyType = string | Object;

export type HeadersType = string[][] | Record<string, string> | Headers;

export interface IUserSignIn {
  email: string;
  password: string;
}

export interface IUserSignUp {
  username: string;
  email: string;
  password: string;
  avatar: string;
}

export enum Tokens {
  ACCESS_TOKEN = "accessToken",
  REFRESH_TOKEN = "refreshToken",
}
