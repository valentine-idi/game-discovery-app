import { Grid } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();

  if (error) return <p>{error}</p>;

  if (isLoading) return <p>Loading...</p>;

  return (
    <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
      {games.map((game) => (
        <GameCard game={game} key={game.id} />
      ))}
    </Grid>
  );
};

export default GameGrid;
