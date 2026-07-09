import { FC } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Link } from "expo-router";
import React from "react";
import { icons } from "@/constants/icons";

export const MovieCard: FC<Movie> = ({
  title,
  id,
  poster_path,
  vote_average,
  release_date,
}) => {
  return (
    <Link
      href={{
        pathname: "/movies/[id]",
        params: { id: id},
      }}
      asChild
    >
      <TouchableOpacity className="w-[30%] mb-3">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://placeholder.com/600x400/1e1e1e/ffffff.png`,
          }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />
        <Text numberOfLines={1} className="text-white text-sm font-bold mt-2">
          {title}
        </Text>
        <View className="flex-row items-center justify-start gap-x-1 mt-0.5">
          <Image source={icons.star} className="size-4" />
          <Text className="text-white text-xs">
            {Math.round(vote_average / 2)}
          </Text>
        </View>
        <View className="flex-row items-center justify-between mt-0.5">
          <Text className="text-xs text-white  font-medium mt-0.5">
            {release_date?.split("-")[0]}
          </Text>
          {/* <Text className="text-xs text-white uppercase">Movie / TV</Text> */}
        </View>
      </TouchableOpacity>
    </Link>
  );
};
