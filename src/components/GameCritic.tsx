import { Badge } from "@chakra-ui/react";

interface Props {
  metacritic: number;
}

const GameCritic = ({ metacritic }: Props) => {
  return (
    <Badge bgColor={"green"} borderRadius="md" paddingX="10px">
      {metacritic}
    </Badge>
  );
};

export default GameCritic;
