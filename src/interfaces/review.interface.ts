import IMovie from "./movie.interface";
import IUser from "./user.interface";

export enum Points {
  ZERO = 0,
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
}

interface IReview {
  _id: string;
  text: string;
  points: Points;
  likes: IUser[];
  dislikes: IUser[];
  movie: IMovie;
  user: IUser;
}

export default IReview;
