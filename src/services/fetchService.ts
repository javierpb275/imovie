import { API_BASE_URL } from "../config/constants";

type BodyType = string | Object;
type HeadersType = string[][] | Record<string, string> | Headers;

export class FetchService {
  static async callApi(
    url: string,
    method: string,
    body?: BodyType,
    headers?: HeadersType
  ): Promise<Response> {
    try {
      const sendBody = typeof body === "object" ? JSON.stringify(body) : body;

      const response = await fetch(`${API_BASE_URL}${url}`, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        body: sendBody,
      });

      return response;
    } catch (error) {
      console.error(error);

      throw error;
    }
  }
}
