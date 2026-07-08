import { icons } from "@/constants/icons";
import React from "react";
import { ComponentProps, FC } from "react";
import { View, Image, TextInput } from "react-native";

type SearchBarProps = Omit<ComponentProps<typeof TextInput>, "className">;

export const SearchBar: FC<SearchBarProps> = ({ ...props }) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="w-5 h-5 mr-3"
        resizeMode="contain"
        tintColor="#ab8bff"
      />
      <TextInput
        {...props}
        placeholderTextColor="#ab8bff"
        className="flex-1 text-white ml-2"
      />
    </View>
  );
};
