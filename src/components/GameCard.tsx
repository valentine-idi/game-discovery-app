import { Card, HStack, Image } from "@chakra-ui/react";
import { type Game } from "@/services/gameService";
import GamePlatforms from "./GamePlatforms";
import GameCritic from "./GameCritic";
import { getCroppedImageUrl } from "@/helpers/helpers";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  console.log(game);
  return (
    <>
      <Card.Root maxW="sm" overflow="hidden">
        <Image
          src={getCroppedImageUrl(game.background_image)}
          alt={game.name}
          objectFit="fill"
        />
        <Card.Body gap="2">
          <Card.Title>{game.name}</Card.Title>

          <HStack justifyContent="space-between">
            <GamePlatforms
              parent_platforms={game.parent_platforms}
              metacritic={game.metacritic}
            />
            <GameCritic metacritic={game.metacritic} />
          </HStack>
        </Card.Body>
      </Card.Root>
    </>
  );
};

export default GameCard;
