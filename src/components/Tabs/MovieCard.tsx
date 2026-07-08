import { FC } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Link } from "expo-router";
import React from "react";

export const MovieCard: FC<Movie> = ({ title, id, poster_path }) => {
  return (
    <Link href={`/movie/${id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://placeholder.com/600x400/1e1e1e/ffffff.png`,
          }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />
        <Text className="text-white text-sm font-bold mt-2">{title}</Text>
      </TouchableOpacity>
    </Link>
  );
};
