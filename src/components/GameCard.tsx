import { Card, Image, Text } from "@chakra-ui/react";
import { type Game } from "@/services/gameService";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card.Root maxW="sm" overflow="hidden" key={game.id}>
        <Image src={game.background_image} alt={game.name} objectFit="fill" />
        <Card.Body gap="2">
          <Card.Title>{game.name}</Card.Title>
          <Text>Rating: {game.rating}</Text>
        </Card.Body>
      </Card.Root>
    </>
  );
};

export default GameCard;
