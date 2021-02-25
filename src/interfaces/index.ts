export interface IMovieData {
  id: number;
  medium_cover_image: string;
  isLiked: boolean;
}

export interface IMoviesData {
  movies: IMovieData[];
}

export interface IMovieType {
  id: number;
  bg: string;
  isLiked: boolean;
}

//-------------------------------------

export interface IGetMovieDetail {
  id: number;
  title: string;
  medium_cover_image: string;
  language: string;
  rating: number;
  description_intro: string;
  isLiked: boolean;
}

export interface IGetSuggestion {
  id: number;
  medium_cover_image: string;
}

export interface IGetMovieVars {
  id: number;
}

export interface IGetMovieData {
  movie: IGetMovieDetail;
  suggestions: IGetSuggestion[];
}




//----------------------------

export interface IToggleLikeMovie {
  id: number;
  isLiked: boolean;
}

export interface IToggleLikeMovieVars {
  id: number;
  isLiked: boolean;
}