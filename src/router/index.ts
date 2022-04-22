import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignInView from "../views/SignInView.vue";
import SignUpView from "../views/SignUpView.vue";
import ReviewsView from "../views/ReviewsView.vue";
import NewReviewView from "../views/NewReviewView.vue";
import MoviesView from "../views/MoviesView.vue";
import MovieView from "../views/MovieView.vue";
import FavoriteOpinionsView from "../views/FavoriteOpinionsView.vue";
import MyProfileSettingsView from "../views/MyProfileSettingsView.vue";
import FollowingView from "../views/FollowingView.vue";
import NewReleasesView from "../views/NewReleasesView.vue";
import MyProfileView from "../views/MyProfileView.vue";
import { useAuthStore } from "../stores/auth";
import { AuthService } from "../services/authService";
import { useMovieStore } from "../stores/movie";
import { useUserStore } from "../stores/user";
import UserView from '../views/UserView.vue';

const viewsGuard = async () => {
  try {
    const headers = await AuthService.getAndValidateHeaderToken();
    const authStore = useAuthStore();
    if (authStore.isAuthorized) {
      return {
        isAuthorized: true,
        headers: headers,
      };
    }
    return {
      isAuthorized: false,
      headers: { Authorization: "ERROR" },
    };
  } catch (err) {
    AuthService.removeTokensAndClearStore();
    return {
      isAuthorized: false,
      headers: { Authorization: "ERROR" },
    };
  }
};

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    beforeEnter: async (to, _, next) => {
      try {
        const data = await viewsGuard();
        if (data.isAuthorized) {
          next({ path: "/reviews" });
          return;
        }
        next();
      } catch (err) {
        next();
      }
    },
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignInView,
    beforeEnter: async (to, _, next) => {
      try {
        const data = await viewsGuard();
        if (data.isAuthorized) {
          next({ path: "/reviews" });
          return;
        }
        next();
      } catch (err) {
        next();
      }
    },
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUpView,
    beforeEnter: async (to, _, next) => {
      try {
        const data = await viewsGuard();
        if (data.isAuthorized) {
          next({ path: "/reviews" });
          return;
        }
        next();
      } catch (err) {
        next();
      }
    },
  },
  {
    path: "/reviews",
    name: "Reviews",
    component: ReviewsView,
    beforeEnter: async (to, _, next) => {
      try {
        const data = await viewsGuard();
        if (!data.isAuthorized) {
          next({ path: "/signin" });
          return;
        }
        next();
      } catch (err) {
        next({ path: "/signin" });
      }
    },
  },
  {
    path: "/new-review",
    name: "NewReview",
    component: NewReviewView,
    beforeEnter: async (to, _, next) => {
      try {
        const data = await viewsGuard();
        if (!data.isAuthorized) {
          next({ path: "/signin" });
          return;
        }
        next();
      } catch (err) {
        next({ path: "/signin" });
      }
    },
  },
  {
    path: "/movies",
    name: "Movies",
    component: MoviesView,
    beforeEnter: async (to, _, next) => {
      try {
        const data = await viewsGuard();
        if (!data.isAuthorized) {
          next({ path: "/signin" });
          return;
        }
        next();
      } catch (err) {
        next({ path: "/signin" });
      }
    },
  },
  {
    path: "/movie/:title",
    name: "Movie",
    component: MovieView,
    beforeEnter: async (to, _, next) => {
      try {
        const data = await viewsGuard();
        if (!data.isAuthorized) {
          next({ path: "/signin" });
          return;
        }
        //IF MOVIE IS NOT FOUND----------------------
        const movieStore = useMovieStore();
        const { title } = to.params;
        const movies = await movieStore.getMovies(data.headers, {title});
        if (!movies.value.length || movies.error) {
          next({ path: "/error" });
          return;
        }
        //-------------------------------------------
        next();
      } catch (err) {
        next({ path: "/signin" });
      }
    },
  },
  {
    path: "/user/:username",
    name: "User",
    component: UserView,
    beforeEnter: async (to, _, next) => {
      try {
        const data = await viewsGuard();
        if (!data.isAuthorized) {
          next({ path: "/signin" });
          return;
        }
        //IF USER IS NOT FOUND----------------------
        const userStore = useUserStore();
        const { username } = to.params;
        const users = await userStore.getUsers(data.headers, {username});
        if (!users.value.length || users.error) {
          next({ path: "/error" });
          return;
        }
        //-------------------------------------------
        next();
      } catch (err) {
        next({ path: "/signin" });
      }
    },
  },
  {
    path: "/favorite-opinions",
    name: "FavoriteOpinions",
    component: FavoriteOpinionsView,
    beforeEnter: async (to, _, next) => {
      try {
        const data = await viewsGuard();
        if (!data.isAuthorized) {
          next({ path: "/signin" });
          return;
        }
        next();
      } catch (err) {
        next({ path: "/signin" });
      }
    },
  },
  {
    path: "/my-profile",
    name: "MyProfileView",
    component: MyProfileView,
    beforeEnter: async (to, _, next) => {
      try {
        const data = await viewsGuard();
        if (!data.isAuthorized) {
          next({ path: "/signin" });
          return;
        }
        next();
      } catch (err) {
        next({ path: "/signin" });
      }
    },
  },
  {
    path: "/my-profile-settings",
    name: "MyProfileSettings",
    component: MyProfileSettingsView,
    beforeEnter: async (to, _, next) => {
      try {
        const data = await viewsGuard();
        if (!data.isAuthorized) {
          next({ path: "/signin" });
          return;
        }
        next();
      } catch (err) {
        next({ path: "/signin" });
      }
    },
  },
  {
    path: "/following",
    name: "Following",
    component: FollowingView,
    beforeEnter: async (to, _, next) => {
      try {
        const data = await viewsGuard();
        if (!data.isAuthorized) {
          next({ path: "/signin" });
          return;
        }
        next();
      } catch (err) {
        next({ path: "/signin" });
      }
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFoundView",
    component: () => import("../views/NotFoundView.vue"),
    beforeEnter: async (to, _, next) => {
      try {
        const data = await viewsGuard();
        if (!data.isAuthorized) {
          next({ path: "/signin" });
          return;
        }
        next();
      } catch (err) {
        next({ path: "/signin" });
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
