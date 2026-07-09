import React, { FC } from "react";
import { View, Text } from "react-native";

type MovieInfoProps = {
  label: string;
  value?: string | number | null;
};

export const MovieInfo: FC<MovieInfoProps> = ({ label, value }) => {
  return (
    <View className="flex-col items-start justify-center mt-5">
      <Text className="text-gray-400 font-normal text-sm ">{label}</Text>
      <Text className="text-gray-400 font-bold text-sm mt-2">
        {value || "N/A"}
      </Text>
    </View>
  );
};
