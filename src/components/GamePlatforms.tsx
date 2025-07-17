import {
  FaLinux,
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { type Platforms } from "@/services/gameService";
import type { IconType } from "react-icons";

interface Props {
  parent_platforms: Platforms[];
}

const GamePlatforms = ({ parent_platforms }: Props) => {
  const platformIcons: { [key: string]: IconType } = {
    pc: FaWindows,
    linux: FaLinux,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    android: FaAndroid,
    mac: FaApple,
    web: BsGlobe,
  };
  return (
    <HStack>
      {parent_platforms.map(({ platform }) => (
        <Icon
          key={platform.id}
          as={platformIcons[platform.slug]}
          color="gray.500"
          boxSize={6}
          marginRight={2}
        />
      ))}
    </HStack>
  );
};

export default GamePlatforms;
