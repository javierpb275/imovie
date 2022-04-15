import { Genre } from "../interfaces/movie.interface";
import IReview from "../interfaces/review.interface";
import { Role } from "../interfaces/user.interface";

export const reviews: IReview[] = [
  {
    _id: "1",
    text: "Dui urna vehicula tincidunt pretium consequat luctus mi, platea fermentum conubia tempus ac orci. Pellentesque dictum malesuada cubilia faucibus dignissim mi nascetur senectus, augue ad libero efficitur dolor duis lobortis, non etiam sociosqu maximus enim mus natoque.",
    points: 5,
    likes: [
      {
        _id: "1",
        role: Role.ADMIN,
        email: "admin@gmail.com",
        username: "admin",
        avatar:
          "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
        createdReviews: [],
        favoriteReviews: [],
        followees: [],
        followers: [],
      },
      {
        _id: "2",
        role: Role.USER,
        email: "pepe@gmail.com",
        username: "pepe",
        avatar:
          "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
        createdReviews: [],
        favoriteReviews: [],
        followees: [],
        followers: [],
      },
    ], //ids of users
    dislikes: [
      {
        _id: "3",
        role: Role.USER,
        email: "maria@gmail.com",
        username: "maria",
        avatar:
          "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
        createdReviews: [],
        favoriteReviews: [],
        followees: [],
        followers: [],
      },
    ], //ids of users
    movie: {
      _id: "1",
      title: "the movie 1",
      year: "2015",
      runtime: "120m",
      genres: [Genre.COMEDY, Genre.DRAMA, Genre.ACTION],
      director: "Martin Scorsese, Quentin Tarantino",
      actors: "Robert DeNiro, Leonardo Dicaprio, Al Pacino",
      plot: "Dui urna vehicula tincidunt pretium consequat luctus mi, platea fermentum conubia tempus ac orci. Pellentesque dictum malesuada cubilia faucibus dignissim mi nascetur senectus, augue ad libero efficitur dolor duis lobortis, non etiam sociosqu maximus enim mus natoque.",
      posterUrl:
        "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY741_.jpg",
      reviews: [],
    },
    user: {
      _id: "1",
      role: Role.ADMIN,
      email: "admin@gmail.com",
      username: "admin",
      avatar:
        "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
      createdReviews: [],
      favoriteReviews: [],
      followees: [],
      followers: [],
    },
  },
  {
    _id: "2",
    text: "Dui urna vehicula tincidunt pretium consequat luctus mi, platea fermentum conubia tempus ac orci. Pellentesque dictum malesuada cubilia faucibus dignissim mi nascetur senectus, augue ad libero efficitur dolor duis lobortis, non etiam sociosqu maximus enim mus natoque.",
    points: 2,
    likes: [
      {
        _id: "1",
        role: Role.ADMIN,
        email: "admin@gmail.com",
        username: "admin",
        avatar:
          "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
        createdReviews: [],
        favoriteReviews: [],
        followees: [],
        followers: [],
      },
      {
        _id: "2",
        role: Role.USER,
        email: "pepe@gmail.com",
        username: "pepe",
        avatar:
          "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
        createdReviews: [],
        favoriteReviews: [],
        followees: [],
        followers: [],
      },
    ], //ids of users
    dislikes: [
      {
        _id: "3",
        role: Role.USER,
        email: "maria@gmail.com",
        username: "maria",
        avatar:
          "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
        createdReviews: [],
        favoriteReviews: [],
        followees: [],
        followers: [],
      },
    ], //ids of users
    movie: {
      _id: "1",
      title: "the movie 1",
      year: "2015",
      runtime: "120m",
      genres: [Genre.COMEDY, Genre.DRAMA, Genre.ACTION],
      director: "Martin Scorsese, Quentin Tarantino",
      actors: "Robert DeNiro, Leonardo Dicaprio, Al Pacino",
      plot: "Dui urna vehicula tincidunt pretium consequat luctus mi, platea fermentum conubia tempus ac orci. Pellentesque dictum malesuada cubilia faucibus dignissim mi nascetur senectus, augue ad libero efficitur dolor duis lobortis, non etiam sociosqu maximus enim mus natoque.",
      posterUrl:
        "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY741_.jpg",
      reviews: [],
    },
    user: {
      _id: "2",
      role: Role.USER,
      email: "pepe@gmail.com",
      username: "pepe",
      avatar:
        "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
      createdReviews: [],
      favoriteReviews: [],
      followees: [],
      followers: [],
    },
  },
  {
    _id: "3",
    text: "Dui urna vehicula tincidunt pretium consequat luctus mi, platea fermentum conubia tempus ac orci. Pellentesque dictum malesuada cubilia faucibus dignissim mi nascetur senectus, augue ad libero efficitur dolor duis lobortis, non etiam sociosqu maximus enim mus natoque.",
    points: 4,
    likes: [
      {
        _id: "1",
        role: Role.ADMIN,
        email: "admin@gmail.com",
        username: "admin",
        avatar:
          "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
        createdReviews: [],
        favoriteReviews: [],
        followees: [],
        followers: [],
      },
      {
        _id: "2",
        role: Role.USER,
        email: "pepe@gmail.com",
        username: "pepe",
        avatar:
          "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
        createdReviews: [],
        favoriteReviews: [],
        followees: [],
        followers: [],
      },
    ], //ids of users
    dislikes: [
      {
        _id: "3",
        role: Role.USER,
        email: "maria@gmail.com",
        username: "maria",
        avatar:
          "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
        createdReviews: [],
        favoriteReviews: [],
        followees: [],
        followers: [],
      },
    ], //ids of users
    movie: {
      _id: "2",
      title: "the movie 2",
      year: "2015",
      runtime: "120m",
      genres: [Genre.COMEDY, Genre.DRAMA, Genre.ACTION],
      director: "Martin Scorsese, Quentin Tarantino",
      actors: "Robert DeNiro, Leonardo Dicaprio, Al Pacino",
      plot: "Dui urna vehicula tincidunt pretium consequat luctus mi, platea fermentum conubia tempus ac orci. Pellentesque dictum malesuada cubilia faucibus dignissim mi nascetur senectus, augue ad libero efficitur dolor duis lobortis, non etiam sociosqu maximus enim mus natoque.",
      posterUrl:
        "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY741_.jpg",
      reviews: [],
    },
    user: {
      _id: "1",
      role: Role.ADMIN,
      email: "admin@gmail.com",
      username: "admin",
      avatar:
        "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
      createdReviews: [],
      favoriteReviews: [],
      followees: [],
      followers: [],
    },
  },
  {
    _id: "4",
    text: "Dui urna vehicula tincidunt pretium consequat luctus mi, platea fermentum conubia tempus ac orci. Pellentesque dictum malesuada cubilia faucibus dignissim mi nascetur senectus, augue ad libero efficitur dolor duis lobortis, non etiam sociosqu maximus enim mus natoque.",
    points: 2,
    likes: [
      {
        _id: "1",
        role: Role.ADMIN,
        email: "admin@gmail.com",
        username: "admin",
        avatar:
          "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
        createdReviews: [],
        favoriteReviews: [],
        followees: [],
        followers: [],
      },
      {
        _id: "2",
        role: Role.USER,
        email: "pepe@gmail.com",
        username: "pepe",
        avatar:
          "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
        createdReviews: [],
        favoriteReviews: [],
        followees: [],
        followers: [],
      },
    ], //ids of users
    dislikes: [
      {
        _id: "3",
        role: Role.USER,
        email: "maria@gmail.com",
        username: "maria",
        avatar:
          "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
        createdReviews: [],
        favoriteReviews: [],
        followees: [],
        followers: [],
      },
    ], //ids of users
    movie: {
      _id: "2",
      title: "the movie 2",
      year: "2015",
      runtime: "120m",
      genres: [Genre.COMEDY, Genre.DRAMA, Genre.ACTION],
      director: "Martin Scorsese, Quentin Tarantino",
      actors: "Robert DeNiro, Leonardo Dicaprio, Al Pacino",
      plot: "Dui urna vehicula tincidunt pretium consequat luctus mi, platea fermentum conubia tempus ac orci. Pellentesque dictum malesuada cubilia faucibus dignissim mi nascetur senectus, augue ad libero efficitur dolor duis lobortis, non etiam sociosqu maximus enim mus natoque.",
      posterUrl:
        "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY741_.jpg",
      reviews: [],
    },
    user: {
      _id: "3",
      role: Role.USER,
      email: "maria@gmail.com",
      username: "maria",
      avatar:
        "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
      createdReviews: [],
      favoriteReviews: [],
      followees: [],
      followers: [],
    },
  },
  {
    _id: "5",
    text: "Dui urna vehicula tincidunt pretium consequat luctus mi, platea fermentum conubia tempus ac orci. Pellentesque dictum malesuada cubilia faucibus dignissim mi nascetur senectus, augue ad libero efficitur dolor duis lobortis, non etiam sociosqu maximus enim mus natoque.",
    points: 3,
    likes: [
      {
        _id: "1",
        role: Role.ADMIN,
        email: "admin@gmail.com",
        username: "admin",
        avatar:
          "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
        createdReviews: [],
        favoriteReviews: [],
        followees: [],
        followers: [],
      },
      {
        _id: "2",
        role: Role.USER,
        email: "pepe@gmail.com",
        username: "pepe",
        avatar:
          "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
        createdReviews: [],
        favoriteReviews: [],
        followees: [],
        followers: [],
      },
    ], //ids of users
    dislikes: [
      {
        _id: "3",
        role: Role.USER,
        email: "maria@gmail.com",
        username: "maria",
        avatar:
          "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
        createdReviews: [],
        favoriteReviews: [],
        followees: [],
        followers: [],
      },
    ], //ids of users
    movie: {
      _id: "3",
      title: "the movie 3",
      year: "2015",
      runtime: "120m",
      genres: [Genre.COMEDY, Genre.DRAMA, Genre.ACTION],
      director: "Martin Scorsese, Quentin Tarantino",
      actors: "Robert DeNiro, Leonardo Dicaprio, Al Pacino",
      plot: "Dui urna vehicula tincidunt pretium consequat luctus mi, platea fermentum conubia tempus ac orci. Pellentesque dictum malesuada cubilia faucibus dignissim mi nascetur senectus, augue ad libero efficitur dolor duis lobortis, non etiam sociosqu maximus enim mus natoque.",
      posterUrl:
        "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY741_.jpg",
      reviews: [],
    },
    user: {
      _id: "3",
      role: Role.USER,
      email: "maria@gmail.com",
      username: "maria",
      avatar:
        "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
      createdReviews: [],
      favoriteReviews: [],
      followees: [],
      followers: [],
    },
  },
  {
    _id: "6",
    text: "Dui urna vehicula tincidunt pretium consequat luctus mi, platea fermentum conubia tempus ac orci. Pellentesque dictum malesuada cubilia faucibus dignissim mi nascetur senectus, augue ad libero efficitur dolor duis lobortis, non etiam sociosqu maximus enim mus natoque.",
    points: 1,
    likes: [
      {
        _id: "1",
        role: Role.ADMIN,
        email: "admin@gmail.com",
        username: "admin",
        avatar:
          "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
        createdReviews: [],
        favoriteReviews: [],
        followees: [],
        followers: [],
      },
      {
        _id: "2",
        role: Role.USER,
        email: "pepe@gmail.com",
        username: "pepe",
        avatar:
          "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
        createdReviews: [],
        favoriteReviews: [],
        followees: [],
        followers: [],
      },
    ], //ids of users
    dislikes: [
      {
        _id: "3",
        role: Role.USER,
        email: "maria@gmail.com",
        username: "maria",
        avatar:
          "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
        createdReviews: [],
        favoriteReviews: [],
        followees: [],
        followers: [],
      },
    ], //ids of users
    movie: {
      _id: "1",
      title: "the movie 1",
      year: "2015",
      runtime: "120m",
      genres: [Genre.COMEDY, Genre.DRAMA, Genre.ACTION],
      director: "Martin Scorsese, Quentin Tarantino",
      actors: "Robert DeNiro, Leonardo Dicaprio, Al Pacino",
      plot: "Dui urna vehicula tincidunt pretium consequat luctus mi, platea fermentum conubia tempus ac orci. Pellentesque dictum malesuada cubilia faucibus dignissim mi nascetur senectus, augue ad libero efficitur dolor duis lobortis, non etiam sociosqu maximus enim mus natoque.",
      posterUrl:
        "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY741_.jpg",
      reviews: [],
    },
    user: {
      _id: "1",
      role: Role.ADMIN,
      email: "admin@gmail.com",
      username: "admin",
      avatar:
        "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
      createdReviews: [],
      favoriteReviews: [],
      followees: [],
      followers: [],
    },
  },
  {
    _id: "7",
    text: "Dui urna vehicula tincidunt pretium consequat luctus mi, platea fermentum conubia tempus ac orci. Pellentesque dictum malesuada cubilia faucibus dignissim mi nascetur senectus, augue ad libero efficitur dolor duis lobortis, non etiam sociosqu maximus enim mus natoque.",
    points: 4,
    likes: [
      {
        _id: "1",
        role: Role.ADMIN,
        email: "admin@gmail.com",
        username: "admin",
        avatar:
          "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
        createdReviews: [],
        favoriteReviews: [],
        followees: [],
        followers: [],
      },
      {
        _id: "2",
        role: Role.USER,
        email: "pepe@gmail.com",
        username: "pepe",
        avatar:
          "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
        createdReviews: [],
        favoriteReviews: [],
        followees: [],
        followers: [],
      },
    ], //ids of users
    dislikes: [
      {
        _id: "3",
        role: Role.USER,
        email: "maria@gmail.com",
        username: "maria",
        avatar:
          "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
        createdReviews: [],
        favoriteReviews: [],
        followees: [],
        followers: [],
      },
    ], //ids of users
    movie: {
      _id: "1",
      title: "the movie 1",
      year: "2015",
      runtime: "120m",
      genres: [Genre.COMEDY, Genre.DRAMA, Genre.ACTION],
      director: "Martin Scorsese, Quentin Tarantino",
      actors: "Robert DeNiro, Leonardo Dicaprio, Al Pacino",
      plot: "Dui urna vehicula tincidunt pretium consequat luctus mi, platea fermentum conubia tempus ac orci. Pellentesque dictum malesuada cubilia faucibus dignissim mi nascetur senectus, augue ad libero efficitur dolor duis lobortis, non etiam sociosqu maximus enim mus natoque.",
      posterUrl:
        "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY741_.jpg",
      reviews: [],
    },
    user: {
      _id: "2",
      role: Role.USER,
      email: "pepe@gmail.com",
      username: "pepe",
      avatar:
        "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
      createdReviews: [],
      favoriteReviews: [],
      followees: [],
      followers: [],
    },
  },
  {
    _id: "8",
    text: "Dui urna vehicula tincidunt pretium consequat luctus mi, platea fermentum conubia tempus ac orci. Pellentesque dictum malesuada cubilia faucibus dignissim mi nascetur senectus, augue ad libero efficitur dolor duis lobortis, non etiam sociosqu maximus enim mus natoque.",
    points: 5,
    likes: [
      {
        _id: "1",
        role: Role.ADMIN,
        email: "admin@gmail.com",
        username: "admin",
        avatar:
          "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
        createdReviews: [],
        favoriteReviews: [],
        followees: [],
        followers: [],
      },
      {
        _id: "2",
        role: Role.USER,
        email: "pepe@gmail.com",
        username: "pepe",
        avatar:
          "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
        createdReviews: [],
        favoriteReviews: [],
        followees: [],
        followers: [],
      },
    ], //ids of users
    dislikes: [
      {
        _id: "3",
        role: Role.USER,
        email: "maria@gmail.com",
        username: "maria",
        avatar:
          "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
        createdReviews: [],
        favoriteReviews: [],
        followees: [],
        followers: [],
      },
    ], //ids of users
    movie: {
      _id: "2",
      title: "the movie 2",
      year: "2015",
      runtime: "120m",
      genres: [Genre.COMEDY, Genre.DRAMA, Genre.ACTION],
      director: "Martin Scorsese, Quentin Tarantino",
      actors: "Robert DeNiro, Leonardo Dicaprio, Al Pacino",
      plot: "Dui urna vehicula tincidunt pretium consequat luctus mi, platea fermentum conubia tempus ac orci. Pellentesque dictum malesuada cubilia faucibus dignissim mi nascetur senectus, augue ad libero efficitur dolor duis lobortis, non etiam sociosqu maximus enim mus natoque.",
      posterUrl:
        "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY741_.jpg",
      reviews: [],
    },
    user: {
      _id: "1",
      role: Role.ADMIN,
      email: "admin@gmail.com",
      username: "admin",
      avatar:
        "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
      createdReviews: [],
      favoriteReviews: [],
      followees: [],
      followers: [],
    },
  },
  {
    _id: "9",
    text: "Dui urna vehicula tincidunt pretium consequat luctus mi, platea fermentum conubia tempus ac orci. Pellentesque dictum malesuada cubilia faucibus dignissim mi nascetur senectus, augue ad libero efficitur dolor duis lobortis, non etiam sociosqu maximus enim mus natoque.",
    points: 3,
    likes: [
      {
        _id: "1",
        role: Role.ADMIN,
        email: "admin@gmail.com",
        username: "admin",
        avatar:
          "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
        createdReviews: [],
        favoriteReviews: [],
        followees: [],
        followers: [],
      },
      {
        _id: "2",
        role: Role.USER,
        email: "pepe@gmail.com",
        username: "pepe",
        avatar:
          "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
        createdReviews: [],
        favoriteReviews: [],
        followees: [],
        followers: [],
      },
    ], //ids of users
    dislikes: [
      {
        _id: "3",
        role: Role.USER,
        email: "maria@gmail.com",
        username: "maria",
        avatar:
          "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
        createdReviews: [],
        favoriteReviews: [],
        followees: [],
        followers: [],
      },
    ], //ids of users
    movie: {
      _id: "2",
      title: "the movie 2",
      year: "2015",
      runtime: "120m",
      genres: [Genre.COMEDY, Genre.DRAMA, Genre.ACTION],
      director: "Martin Scorsese, Quentin Tarantino",
      actors: "Robert DeNiro, Leonardo Dicaprio, Al Pacino",
      plot: "Dui urna vehicula tincidunt pretium consequat luctus mi, platea fermentum conubia tempus ac orci. Pellentesque dictum malesuada cubilia faucibus dignissim mi nascetur senectus, augue ad libero efficitur dolor duis lobortis, non etiam sociosqu maximus enim mus natoque.",
      posterUrl:
        "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY741_.jpg",
      reviews: [],
    },
    user: {
      _id: "3",
      role: Role.USER,
      email: "maria@gmail.com",
      username: "maria",
      avatar:
        "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
      createdReviews: [],
      favoriteReviews: [],
      followees: [],
      followers: [],
    },
  },
  {
    _id: "10",
    text: "Dui urna vehicula tincidunt pretium consequat luctus mi, platea fermentum conubia tempus ac orci. Pellentesque dictum malesuada cubilia faucibus dignissim mi nascetur senectus, augue ad libero efficitur dolor duis lobortis, non etiam sociosqu maximus enim mus natoque.",
    points: 2,
    likes: [
      {
        _id: "1",
        role: Role.ADMIN,
        email: "admin@gmail.com",
        username: "admin",
        avatar:
          "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
        createdReviews: [],
        favoriteReviews: [],
        followees: [],
        followers: [],
      },
      {
        _id: "2",
        role: Role.USER,
        email: "pepe@gmail.com",
        username: "pepe",
        avatar:
          "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
        createdReviews: [],
        favoriteReviews: [],
        followees: [],
        followers: [],
      },
    ], //ids of users
    dislikes: [
      {
        _id: "3",
        role: Role.USER,
        email: "maria@gmail.com",
        username: "maria",
        avatar:
          "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
        createdReviews: [],
        favoriteReviews: [],
        followees: [],
        followers: [],
      },
    ], //ids of users
    movie: {
      _id: "3",
      title: "the movie 3",
      year: "2015",
      runtime: "120m",
      genres: [Genre.COMEDY, Genre.DRAMA, Genre.ACTION],
      director: "Martin Scorsese, Quentin Tarantino",
      actors: "Robert DeNiro, Leonardo Dicaprio, Al Pacino",
      plot: "Dui urna vehicula tincidunt pretium consequat luctus mi, platea fermentum conubia tempus ac orci. Pellentesque dictum malesuada cubilia faucibus dignissim mi nascetur senectus, augue ad libero efficitur dolor duis lobortis, non etiam sociosqu maximus enim mus natoque.",
      posterUrl:
        "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY741_.jpg",
      reviews: [],
    },
    user: {
      _id: "3",
      role: Role.USER,
      email: "maria@gmail.com",
      username: "maria",
      avatar:
        "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
      createdReviews: [],
      favoriteReviews: [],
      followees: [],
      followers: [],
    },
  },
];
