import IReview from "./review.interface";

export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
}

interface IUser {
  _id: string;
  role: Role;
  email: string;
  username: string;
  avatar: string;
  createdReviews: IReview[];
  favoriteReviews: IReview[];
  followers: IUser[];
  followees: IUser[];
}

export default IUser;
