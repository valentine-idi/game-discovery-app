import { useEffect, useState } from "react";
import gameService, {
  type GameResponse,
  type Game,
} from "@/services/gameService";
import { CanceledError } from "@/services/apiClient";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const { request, cancel } = gameService.getAll<GameResponse>();
    request
      .then((response) => {
        setGames(response.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });
    () => cancel();
  }, []);
  return { games, error, isLoading };
};

export default useGames;
