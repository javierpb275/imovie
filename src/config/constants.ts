export const API_BASE_URL = "http://localhost:3001/api";
export const API_URL = {
  USERS: {
    SIGNIN: {
      URL: "/users/signin",
      METHOD: "POST",
    },
    PROFILE: {
      GET_PROFILE: {
        URL: "/users/me",
        METHOD: "GET",
      },
    },
    REFRESH_TOKEN: {
      URL: "/users/refreshToken",
      METHOD: "POST",
    },
  },
};
