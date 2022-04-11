import IReview from "./review.interface";

export enum Genre {
  COMEDY = "Comedy",
  FANTASY = "Fantasy",
  CRIME = "Crime",
  DRAMA = "Drama",
  MUSIC = "Music",
  ADVENTURE = "Adventure",
  HISTORY = "History",
  THRILLER = "Thriller",
  ANIMATION = "Animation",
  FAMILY = "Family",
  MYSTERY = "Mystery",
  BIOGRAPHY = "Biography",
  ACTION = "Action",
  FILMNOIR = "Film-Noir",
  ROMANCE = "Romance",
  SCIFI = "Sci-Fi",
  WAR = "War",
  WESTERN = "Western",
  HORROR = "Horror",
  MUSICAL = "Musical",
  SPORT = "Sport",
}

interface IMovie {
  _id: string;
  title: string;
  year: string;
  runtime: string;
  genres: Genre[];
  director: string;
  actors: string;
  plot: string;
  posterUrl: string;
  reviews: IReview[];
}

export default IMovie;
