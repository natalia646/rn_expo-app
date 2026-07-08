import { images } from "@/constants/images";
import React from "react";
import { View, Image } from "react-native";

export const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="w-full absolute z-0" />
      {children}
    </View>
  );
};
