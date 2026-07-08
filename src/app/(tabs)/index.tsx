import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React from "react";
import { icons } from "@/constants/icons";
import { SearchBar } from "@/components/SearchBar";
import { useRouter } from "expo-router";
import { fetchMovies } from "../../../servises/api";
import { useFetch } from "../../../servises/useFetch";
import { MovieCard } from "@/components/MovieCard";
import { PageLayout } from "@/components/PageLayout";
import { getTrendingMovies } from "../../../servises/appwriteDb";
import { TrendingCard } from "@/components/TrendingCard";

export default function Home() {
  const router = useRouter();

  const {
    data: trendingMovies,
    loading: trendingLoading,
    error: trendingError,
  } = useFetch(getTrendingMovies);

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  return (
    <PageLayout>
      <ScrollView>
        <View className="w-full flex-row  items-center justify-center mt-20 ">
          <Image source={icons.logo} className="w-12 h-10" />
        </View>

        <View className=" my-5">
          <SearchBar
            placeholder="Search movies"
            onPress={() => router.push("/search")}
          />
        </View>

        {(moviesLoading || trendingLoading) && (
          <ActivityIndicator size="large" color="#0000ff" className="my-3" />
        )}

        {(moviesError || trendingError) && (
          <Text className="text-red-500">
            Error: {moviesError?.message || trendingError?.message}
          </Text>
        )}

        {trendingMovies && (
          <View>
            <View className="my-3">
              <Text className="text-white pb-2 font-bold text-2xl ">
                Trending Movies
              </Text>
            </View>
            <FlatList
              data={trendingMovies}
              ItemSeparatorComponent={() => <View className="w-4" />}
              horizontal
              renderItem={({ item, index }) => (
                <TrendingCard {...item} index={index} />
              )}
              keyExtractor={(item) => item.movie_id.toString()}
            />
          </View>
        )}

        {movies && (
          <View className="mt-7">
            <Text className="text-white pb-2 font-bold text-2xl ">
              Latest Movies
            </Text>
            <FlatList
              data={movies}
              renderItem={({ item }) => <MovieCard {...item} />}
              keyExtractor={(item) => item.id.toString()}
              numColumns={3}
              columnWrapperStyle={{ justifyContent: "space-between", gap: 10 }}
            />
          </View>
        )}
      </ScrollView>
    </PageLayout>
  );
}
