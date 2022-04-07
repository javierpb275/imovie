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
import { movies } from '../assets/movies';

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignInView,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUpView,
  },
  {
    path: "/reviews",
    name: "Reviews",
    component: ReviewsView,
  },
  {
    path: "/new-review",
    name: "NewReview",
    component: NewReviewView,
  },
  {
    path: "/movies",
    name: "Movies",
    component: MoviesView,
  },
  {
    path: "/movie/:title",
    name: "Movie",
    component: MovieView,
    beforeEnter: (to, _, next) => {
      const { title } = to.params
      const foundMovie = movies.find(movie => movie.title === title);
      if (!foundMovie) {
        next({ path: '/error' })
        return
      }
      next()
    }
  },
  {
    path: "/favorite-opinions",
    name: "FavoriteOpinions",
    component: FavoriteOpinionsView,
  },
  {
    path: "/my-profile",
    name: "MyProfileView",
    component: MyProfileView,
  },
  {
    path: "/my-profile-settings",
    name: "MyProfileSettings",
    component: MyProfileSettingsView,
  },
  {
    path: "/following",
    name: "Following",
    component: FollowingView,
  },
  {
    path: "/new-releases",
    name: "NewReleases",
    component: NewReleasesView,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFoundView',
    component: () => import('../views/NotFoundView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
