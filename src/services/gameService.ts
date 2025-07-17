import apiService from "./apiService";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Platforms{
  platform: Platform;
}


export interface Game {
  id: number;
  name: string;
  metacritic: number;
  background_image: string;
  rating: number;
  parent_platforms: Platforms[];
}

export interface GameResponse {
  count: number;
  results: Game[];
}


export default new apiService("/games");