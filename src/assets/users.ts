import { Genre } from "../interfaces/movie.interface"
import IUser, {Role} from "../interfaces/user.interface"
import { reviews } from "./reviews";

const user1Reviews = reviews.filter(review => review.user._id === '1');
const user2Reviews = reviews.filter(review => review.user._id === '2');
const user3Reviews = reviews.filter(review => review.user._id === '3');

export const users: IUser[] = [
    {
        _id: '1',
        role: Role.ADMIN,
        email: 'admin@gmail.com',
        password: 'Abc123..$',
        username: 'admin',
        avatar: 'https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png',
        createdReviews: user1Reviews,
        favoriteReviews: [
            {
                _id: "1",
                text: "Dui urna vehicula tincidunt pretium consequat luctus mi, platea fermentum conubia tempus ac orci. Pellentesque dictum malesuada cubilia faucibus dignissim mi nascetur senectus, augue ad libero efficitur dolor duis lobortis, non etiam sociosqu maximus enim mus natoque.",
                points: 5,
                likes: [
                  {
                    _id: "1",
                    role: Role.ADMIN,
                    email: "admin@gmail.com",
                    password: "Abc123..$",
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
                    password: "Abc123..$",
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
                    password: "Abc123..$",
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
                  password: "Abc123..$",
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
                    password: "Abc123..$",
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
                    password: "Abc123..$",
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
                    password: "Abc123..$",
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
                  password: "Abc123..$",
                  username: "pepe",
                  avatar:
                    "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
                  createdReviews: [],
                  favoriteReviews: [],
                  followees: [],
                  followers: [],
                },
              },
        ],
        followees: [
            {
                _id: '2',
                role: Role.USER,
                email: 'pepe@gmail.com',
                password: 'Abc123..$',
                username: 'pepe',
                avatar: 'https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png',
                createdReviews: [],
                favoriteReviews: [],
                followees: [],
                followers: []
            },
            {
                _id: '3',
                role: Role.USER,
                email: 'maria@gmail.com',
                password: 'Abc123..$',
                username: 'maria',
                avatar: 'https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png',
                createdReviews: [],
                favoriteReviews: [],
                followees: [],
                followers: []
            }
        ],
        followers: [
            {
                _id: '3',
                role: Role.USER,
                email: 'maria@gmail.com',
                password: 'Abc123..$',
                username: 'maria',
                avatar: 'https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png',
                createdReviews: [],
                favoriteReviews: [],
                followees: [],
                followers: []
            }
        ]
    },
    {
        _id: '2',
        role: Role.USER,
        email: 'pepe@gmail.com',
        password: 'Abc123..$',
        username: 'pepe',
        avatar: 'https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png',
        createdReviews: user2Reviews,
        favoriteReviews: [
            {
                _id: "3",
                text: "Dui urna vehicula tincidunt pretium consequat luctus mi, platea fermentum conubia tempus ac orci. Pellentesque dictum malesuada cubilia faucibus dignissim mi nascetur senectus, augue ad libero efficitur dolor duis lobortis, non etiam sociosqu maximus enim mus natoque.",
                points: 4,
                likes: [
                  {
                    _id: "1",
                    role: Role.ADMIN,
                    email: "admin@gmail.com",
                    password: "Abc123..$",
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
                    password: "Abc123..$",
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
                    password: "Abc123..$",
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
                  password: "Abc123..$",
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
                    password: "Abc123..$",
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
                    password: "Abc123..$",
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
                    password: "Abc123..$",
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
                  password: "Abc123..$",
                  username: "maria",
                  avatar:
                    "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
                  createdReviews: [],
                  favoriteReviews: [],
                  followees: [],
                  followers: [],
                },
              },
        ],
        followees: [
            {
                _id: '3',
                role: Role.USER,
                email: 'maria@gmail.com',
                password: 'Abc123..$',
                username: 'maria',
                avatar: 'https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png',
                createdReviews: [],
                favoriteReviews: [],
                followees: [],
                followers: []
            }
        ],
        followers: [
            {
                _id: '3',
                role: Role.USER,
                email: 'maria@gmail.com',
                password: 'Abc123..$',
                username: 'maria',
                avatar: 'https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png',
                createdReviews: [],
                favoriteReviews: [],
                followees: [],
                followers: []
            },
            {
                _id: '1',
                role: Role.ADMIN,
                email: 'admin@gmail.com',
                password: 'Abc123..$',
                username: 'admin',
                avatar: 'https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png',
                createdReviews: [],
                favoriteReviews: [],
                followees: [],
                followers: []
            }
            
        ]
    },
    {
        _id: '3',
        role: Role.USER,
        email: 'maria@gmail.com',
        password: 'Abc123..$',
        username: 'maria',
        avatar: 'https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png',
        createdReviews: user3Reviews,
        favoriteReviews: [
            {
                _id: "6",
                text: "Dui urna vehicula tincidunt pretium consequat luctus mi, platea fermentum conubia tempus ac orci. Pellentesque dictum malesuada cubilia faucibus dignissim mi nascetur senectus, augue ad libero efficitur dolor duis lobortis, non etiam sociosqu maximus enim mus natoque.",
                points: 1,
                likes: [
                  {
                    _id: "1",
                    role: Role.ADMIN,
                    email: "admin@gmail.com",
                    password: "Abc123..$",
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
                    password: "Abc123..$",
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
                    password: "Abc123..$",
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
                  password: "Abc123..$",
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
                    password: "Abc123..$",
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
                    password: "Abc123..$",
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
                    password: "Abc123..$",
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
                  password: "Abc123..$",
                  username: "pepe",
                  avatar:
                    "https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png",
                  createdReviews: [],
                  favoriteReviews: [],
                  followees: [],
                  followers: [],
                },
              },
            
        ],
        followees: [
            {
                _id: '2',
                role: Role.USER,
                email: 'pepe@gmail.com',
                password: 'Abc123..$',
                username: 'pepe',
                avatar: 'https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png',
                createdReviews: [],
                favoriteReviews: [],
                followees: [],
                followers: []
            }
        ],
        followers: [
            {
                _id: '1',
                role: Role.ADMIN,
                email: 'admin@gmail.com',
                password: 'Abc123..$',
                username: 'admin',
                avatar: 'https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png',
                createdReviews: [],
                favoriteReviews: [],
                followees: [],
                followers: [],
            }
        ]
    }
]