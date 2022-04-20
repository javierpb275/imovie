export const API_BASE_URL = "http://localhost:3001/api";
export const API_URL = {
  USERS: {
    REFRESH_TOKEN: {
      URL: "/users/refreshToken",
      METHOD: "POST",
    },
    SIGNUP: {
      URL: "/users",
      METHOD: "POST",
    },
    SIGNIN: {
      URL: "/users/signin",
      METHOD: "POST",
    },
    SIGNOUT: {
      URL: "/users/signout",
      METHOD: "POST",
    },

    PROFILE: {
      GET_PROFILE: {
        URL: "/users/me",
        METHOD: "GET",
      },
      UPDATE_PROFILE: {
        URL: "/users/me",
        METHOD: "PATCH",
      },
      DELETE_PROFILE: {
        URL: "/users/me",
        METHOD: "DELETE",
      },
    },
    START_FOLLOWING: {
      URL: "/users/startFollowing",
      METHOD: "POST",
    },
    STOP_FOLLOWING: {
      URL: "/users/stopFollowing",
      METHOD: "POST",
    },
    GET_FOLLOWERS: {
      URL: "/users/followers", // ?
      METHOD: "GET",
    },
    GET_FOLLOWEES: {
      URL: "/users/followees", // ?
      METHOD: "GET",
    },
    GET_USERS: {
      URL: "/users", // ?
      METHOD: "GET",
    },
    GET_USER: {
      URL: "/users/", // :id
      METHOD: "GET",
    },
  },
  MOVIES: {
    GET_MOVIES: {
      URL: "/movies", // ?
      METHOD: "GET",
    },
    GET_MOVIE: {
      URL: "/movies/", // :id
      METHOD: "GET",
    },
    CREATE_MOVIE: {
      URL: "/movies",
      METHOD: "POST",
    },
    UPDATE_MOVIE: {
      URL: "/movies/", // :id
      METHOD: "PATCH",
    },
    DELETE_MOVIE: {
      URL: "/movies/", // :id
      METHOD: "DELETE",
    },
  },
  REVIEWS: {
    GET_REVIEWS: {
      URL: "/reviews", // ?
      METHOD: "GET",
    },
    GET_REVIEW: {
      URL: "/reviews/", // :id
      METHOD: "GET",
    },
    CREATE_REVIEW: {
      URL: "/reviews",
      METHOD: "POST",
    },
    UPDATE_REVIEW: {
      URL: "/reviews/", // :id
      METHOD: "PATCH",
    },
    DELETE_REVIEW: {
      URL: "/reviews/", // :id
      METHOD: "DELETE",
    },
    ADD_LIKE: {
      URL: "/reviews/addLike",
      METHOD: "POST",
    },
    REMOVE_LIKE: {
      URL: "/reviews/removeLike",
      METHOD: "POST",
    },
    ADD_DISLIKE: {
      URL: "/reviews/addDislike",
      METHOD: "POST",
    },
    REMOVE_DISLIKE: {
      URL: "/reviews/removeDislike",
      METHOD: "POST",
    },
    ADD_FAVORITES: {
      URL: "/reviews/addFavorites",
      METHOD: "POST",
    },
    REMOVE_FAVORITES: {
      URL: "/reviews/removeFavorites",
      METHOD: "POST",
    },
    GET_FAVORITE_REVIEWS: {
      URL: "/reviews/me/favoriteReviews", // ?
      METHOD: "GET",
    },
    GET_CREATED_REVIEWS: {
      URL: "/reviews/me/createdReviews", // ?
      METHOD: "GET",
    },
    GET_USER_REVIEWS: {
      URL: "/reviews/userReviews/", // :username ?
      METHOD: "GET",
    },
    GET_MOVIE_REVIEWS: {
      URL: "/reviews/movieReviews/", // :movieTitle ?
      METHOD: "GET",
    },
  },
};
