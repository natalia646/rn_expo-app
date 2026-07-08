import { Link } from "expo-router";
import React, { FC } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";

export const TrendingCard: FC<TrendingMovie> = ({
  movie_id,
  title,
  posterUrl,
}) => {
  return (
    <Link href={`/movies/${movie_id}`} asChild>
      <TouchableOpacity>
        <Image
          source={{ uri: posterUrl }}
          resizeMode="cover"
          className="w-32 h-48 rounded-lg"
        />

        <View className="absolute bottom-9 left-3.5 px-2 py-1 rounded-full"></View>
      </TouchableOpacity>
    </Link>
  );
};
