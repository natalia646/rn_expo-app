import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React from "react";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import { SearchBar } from "@/components/Tabs/SearchBar";
import { useRouter } from "expo-router";
import { fetchMovies } from "../../../servises/api";
import { useFetch } from "../../../servises/useFetch";
import { MovieCard } from "@/components/Tabs/MovieCard";

export default function Home() {
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="w-full absolute z-0" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10, minHeight: "100%" }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

        <View className="flex-1 mt-5">
          <SearchBar
            onPressIn={() => router.push("/search")}
            placeholder="Search movies"
          />
        </View>

        {moviesLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={movies}
            renderItem={({ item }) => <MovieCard {...item} />}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
            columnWrapperStyle={{ justifyContent: "space-between", gap: 10 }}
          />
        )}
      </ScrollView>
    </View>
  );
}
