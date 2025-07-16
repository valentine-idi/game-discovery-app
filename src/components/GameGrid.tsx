import useGames from "@/hooks/useGames";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();

  console.log(games);

  if (error) return <p>{error}</p>;

  if (isLoading) return <p>Loading...</p>;

  return <div>GameGrid</div>;
};

export default GameGrid;
