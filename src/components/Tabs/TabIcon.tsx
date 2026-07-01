import { images } from "@/constants/images";
import { FC } from "react";
import { Image, ImageBackground, Text, View } from "react-native";

type TabIconProperty = {
  icon: any;
  title: string;
  focused: boolean;
};

export const TabIcon: FC<TabIconProperty> = ({ icon, title, focused }) => {
  if (focused) {
    return (
      <>
        <ImageBackground
          source={images.highlight}
          className="flex flex-row flex-1 w-full min-w-28  min-h-14 mt-3  items-center justify-center rounded-full overflow-hidden"
        >
          <Image source={icon} tintColor="#151312" className="size-5" />
          <Text className="text-base font-semibold">{title}</Text>
        </ImageBackground>
      </>
    );
  }

  return (
    <View className="size-full justify-center items-center mt-4 rounded-full">
      <Image source={icon} tintColor="A8B5DB" className="size-5" />
    </View>
  );
};
