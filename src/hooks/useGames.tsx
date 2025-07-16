import { useEffect, useState } from "react";
import gameService from "@/services/gameService";

const useGames = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const { request, cancel } = gameService.getAll();
    request
      .then((response) => {
        setGames(response.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
    () => cancel();
  }, []);
  return { games, error, isLoading };
};

export default useGames;
