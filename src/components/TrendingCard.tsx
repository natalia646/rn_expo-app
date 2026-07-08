import { Link } from "expo-router";
import React, { FC } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { images } from "@/constants/images";

type TrendingCardProps = TrendingMovie & { index: number };

export const TrendingCard: FC<TrendingCardProps> = ({
  movie_id,
  title,
  posterUrl,
  index,
}) => {
  return (
    <Link href={`/movies/${movie_id}`} asChild>
      <TouchableOpacity>
        <Image
          source={{ uri: posterUrl }}
          resizeMode="cover"
          className="w-32 h-48 rounded-lg"
        />

        <View className="absolute bottom-9 -left-3.5 px-1 py-1 rounded-full">
          <MaskedView
            maskElement={
              <Text className="font-bold text-6xl text-white">{index + 1}</Text>
            }
          >
            <Image
              source={images.rankingGradient}
              resizeMode="cover"
              className="size-14"
            />
          </MaskedView>
        </View>
      </TouchableOpacity>
    </Link>
  );
};
