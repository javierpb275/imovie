import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignInView from "../views/SignInView.vue";
import SignUpView from "../views/SignUpView.vue";
import ReviewsView from "../views/ReviewsView.vue";
import NewReviewView from "../views/NewReviewView.vue";
import MoviesView from "../views/MoviesView.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
