import { Card, Image } from "@chakra-ui/react";
import { type Game } from "@/services/gameService";
import GamePlatforms from "./GamePlatforms";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  console.log(game);
  return (
    <>
      <Card.Root maxW="sm" overflow="hidden">
        <Image src={game.background_image} alt={game.name} objectFit="fill" />
        <Card.Body gap="2">
          <Card.Title>{game.name}</Card.Title>
          <GamePlatforms parent_platforms={game.parent_platforms} />
        </Card.Body>
      </Card.Root>
    </>
  );
};

export default GameCard;
