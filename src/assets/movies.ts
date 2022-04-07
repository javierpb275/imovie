import IMovie, {Genre} from "../interfaces/movie.interface";
import { reviews } from "./reviews";

const movie1Reviews = reviews.filter(review => review.movie._id === '1');
const movie2Reviews = reviews.filter(review => review.movie._id === '2');
const movie3Reviews = reviews.filter(review => review.movie._id === '3');
const movie4Reviews = reviews.filter(review => review.movie._id === '4');
const movie5Reviews = reviews.filter(review => review.movie._id === '5');
const movie6Reviews = reviews.filter(review => review.movie._id === '6');
const movie7Reviews = reviews.filter(review => review.movie._id === '7');


export const movies: IMovie[] = [
    {
        _id: '1',
        title: "the movie 1",
        year: "2015",
        runtime: '120m',
        genres: [Genre.COMEDY, Genre.DRAMA, Genre.ACTION],
        director: 'Martin Scorsese, Quentin Tarantino',
        actors: 'Robert DeNiro, Leonardo Dicaprio, Al Pacino',
        plot: "Dui urna vehicula tincidunt pretium consequat luctus mi, platea fermentum conubia tempus ac orci. Pellentesque dictum malesuada cubilia faucibus dignissim mi nascetur senectus, augue ad libero efficitur dolor duis lobortis, non etiam sociosqu maximus enim mus natoque.",
        posterUrl: "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY741_.jpg",
        reviews: movie1Reviews
    },
    {
        _id: '2',
        posterUrl: "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY741_.jpg",
        year: "2016",
        title: "the movie 2",
        plot: "Dui urna vehicula tincidunt pretium consequat luctus mi, platea fermentum conubia tempus ac orci. Pellentesque dictum malesuada cubilia faucibus dignissim mi nascetur senectus, augue ad libero efficitur dolor duis lobortis, non etiam sociosqu maximus enim mus natoque.",
        runtime: '120m',
        actors: 'Robert DeNiro, Leonardo Dicaprio, Al Pacino',
        director: 'Martin Scorsese, Quentin Tarantino',
        genres: [Genre.COMEDY, Genre.DRAMA, Genre.ACTION],
        reviews: movie2Reviews
    },
    {
        _id: '3',
        posterUrl: "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY741_.jpg",
        year: "2017",
        title: "the movie 3",
        plot: "Dui urna vehicula tincidunt pretium consequat luctus mi, platea fermentum conubia tempus ac orci. Pellentesque dictum malesuada cubilia faucibus dignissim mi nascetur senectus, augue ad libero efficitur dolor duis lobortis, non etiam sociosqu maximus enim mus natoque.",
        runtime: '120m',
        actors: 'Robert DeNiro, Leonardo Dicaprio, Al Pacino',
        director: 'Martin Scorsese, Quentin Tarantino',
        genres: [Genre.COMEDY, Genre.DRAMA, Genre.ACTION],
        reviews: movie3Reviews
    },
    {
        _id: '4',
        posterUrl: "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY741_.jpg",
        year: "2018",
        title: "the movie 4",
        plot: "Dui urna vehicula tincidunt pretium consequat luctus mi, platea fermentum conubia tempus ac orci. Pellentesque dictum malesuada cubilia faucibus dignissim mi nascetur senectus, augue ad libero efficitur dolor duis lobortis, non etiam sociosqu maximus enim mus natoque.",
        runtime: '120m',
        actors: 'Robert DeNiro, Leonardo Dicaprio, Al Pacino',
        director: 'Martin Scorsese, Quentin Tarantino',
        genres: [Genre.COMEDY, Genre.DRAMA, Genre.ACTION],
        reviews: movie4Reviews
    },
    {
        _id: '5',
        posterUrl: "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY741_.jpg",
        year: "2019",
        title: "the movie 5",
        plot: "Dui urna vehicula tincidunt pretium consequat luctus mi, platea fermentum conubia tempus ac orci. Pellentesque dictum malesuada cubilia faucibus dignissim mi nascetur senectus, augue ad libero efficitur dolor duis lobortis, non etiam sociosqu maximus enim mus natoque.",
        runtime: '120m',
        actors: 'Robert DeNiro, Leonardo Dicaprio, Al Pacino',
        director: 'Martin Scorsese, Quentin Tarantino',
        genres: [Genre.COMEDY, Genre.DRAMA, Genre.ACTION],
        reviews: movie5Reviews
    },
    {
        _id: '6',
        posterUrl: "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY741_.jpg",
        year: "2020",
        title: "the movie 6",
        plot: "Dui urna vehicula tincidunt pretium consequat luctus mi, platea fermentum conubia tempus ac orci. Pellentesque dictum malesuada cubilia faucibus dignissim mi nascetur senectus, augue ad libero efficitur dolor duis lobortis, non etiam sociosqu maximus enim mus natoque.",
        runtime: '120m',
        actors: 'Robert DeNiro, Leonardo Dicaprio, Al Pacino',
        director: 'Martin Scorsese, Quentin Tarantino',
        genres: [Genre.COMEDY, Genre.DRAMA, Genre.ACTION],
        reviews: movie6Reviews
    },
    {
        _id: '7',
        posterUrl: "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY741_.jpg",
        year: "2021",
        title: "the movie 7",
        plot: "Dui urna vehicula tincidunt pretium consequat luctus mi, platea fermentum conubia tempus ac orci. Pellentesque dictum malesuada cubilia faucibus dignissim mi nascetur senectus, augue ad libero efficitur dolor duis lobortis, non etiam sociosqu maximus enim mus natoque.",
        runtime: '120m',
        actors: 'Robert DeNiro, Leonardo Dicaprio, Al Pacino',
        director: 'Martin Scorsese, Quentin Tarantino',
        genres: [Genre.COMEDY, Genre.DRAMA, Genre.ACTION],
        reviews: movie7Reviews
    },
]