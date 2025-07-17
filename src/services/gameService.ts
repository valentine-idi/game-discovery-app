import apiService from "./apiService";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
}

export interface GameResponse {
  count: number;
  results: Game[];
}


export default new apiService("/games");