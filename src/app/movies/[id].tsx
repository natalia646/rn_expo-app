import { PageLayout } from "@/components/PageLayout";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { ScrollView, View, Image, Text, TouchableOpacity } from "react-native";
import { useFetch } from "../../../servises/useFetch";
import { fetchMovieDetails } from "../../../servises/api";
import { icons } from "@/constants/icons";
import { MovieInfo } from "@/components/MovieInfo";

export default function MovieDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const { data: movie } = useFetch(() => fetchMovieDetails(String(id)));

  return (
    <PageLayout>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
            }}
            className="w-full h-140"
            resizeMode="stretch"
          />
        </View>

        <View className="flex-col items-start justify-center mt-5 px-5">
          <Text className="text-white font-bold text-xl">{movie?.title}</Text>
          <View className="flex-row items-center gap-x-1 mt-2">
            <Text className="text-gray-400 text-sm">
              {movie?.release_date.split("-")[0]}
            </Text>
            <Text className="text-gray-400 text-sm">{movie?.runtime}m</Text>
          </View>
          <View className="flex-row items-center bg-indigo-950 px-2 py-1 rounded-md gap-x-1 mt-2">
            <Image source={icons.star} className="size-4" />
            <Text className="text-white font-bold text-sm">
              {Math.round(movie?.vote_average ?? 0)}/10
            </Text>
            <Text className="text-gray-400 text-sm">
              ( {movie?.vote_count} votes)
            </Text>
          </View>

          <MovieInfo label="Overview" value={movie?.overview} />
          <MovieInfo
            label="Ganres"
            value={movie?.genres.map((g) => g.name).join(" - ") || "N/A"}
          />
          <View className="flex-row justify-between w-1/2">
            <MovieInfo
              label="Bubget"
              value={
                movie?.budget ? `$${movie.budget / 1_000_000} million` : "N/A"
              }
            />
            <MovieInfo
              label="Revenue"
              value={
                movie?.revenue
                  ? `$${Math.round(movie.revenue) / 1_000_000} `
                  : "N/A"
              }
            />
          </View>

          <MovieInfo
            label="Production Companies"
            value={
              movie?.production_companies.map((c) => c.name).join(" - ") ||
              "N/A"
            }
          />
        </View>
      </ScrollView>

      <TouchableOpacity
        onPress={router.back}
        className="absolute bottom-15 left-0 right-0 mx-5  bg-purple-300 rounded-lg py-3.5 flex flex-row items-center justify-center z-10"
      >
        <Image
          source={icons.arrow}
          className="size-5 mr-1 mt-0.5 rotate-180"
          tintColor="#fff"
        />
        <Text className="text-white font-semibold text-base">Go back</Text>
      </TouchableOpacity>
    </PageLayout>
  );
}
