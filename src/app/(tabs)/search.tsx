import { MovieCard } from "@/components/MovieCard";
import { PageLayout } from "@/components/PageLayout";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import { fetchMovies } from "../../../servises/api";
import { useFetch } from "../../../servises/useFetch";
import { icons } from "@/constants/icons";
import { SearchBar } from "@/components/SearchBar";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    refetch,
    reset,
  } = useFetch(() => fetchMovies({ query: searchQuery }), false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchQuery.trim()) {
        refetch();
      } else {
        reset();
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return (
    <PageLayout>
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={{ justifyContent: "space-between", gap: 10 }}
        ListEmptyComponent={
          !moviesLoading && !moviesError && movies?.length === 0 ? (
            <Text className="text-gray-500 text-center px-5 my-3">
              No movies found.
            </Text>
          ) : null
        }
        ListHeaderComponent={
          <>
            <View className="w-full flex-row items-center justify-center mt-20">
              <Image source={icons.logo} className="w-12 h-10" />
            </View>

            <View className=" my-5">
              <SearchBar
                placeholder="Search movies..."
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>

            {moviesLoading && (
              <ActivityIndicator
                size="large"
                color="#0000ff"
                className="my-3"
              />
            )}

            {moviesError && (
              <Text className="text-red-500 text-center px-5 my-3">
                Error fetching movies: {moviesError.message}
              </Text>
            )}

            {!moviesLoading &&
              !moviesError &&
              searchQuery.trim() &&
              movies?.length > 0 && (
                <Text className="text-white px-5 my-3">
                  Search results for "{searchQuery}"
                </Text>
              )}
          </>
        }
      />
    </PageLayout>
  );
}
