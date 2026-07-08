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
import { SearchBar } from "@/components/SearchBar";
import { useRouter } from "expo-router";
import { fetchMovies } from "../../../servises/api";
import { useFetch } from "../../../servises/useFetch";
import { MovieCard } from "@/components/MovieCard";
import { PageLayout } from "@/components/PageLayout";

export default function Home() {
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  return (
    <PageLayout>
      {moviesLoading ? (
        <ActivityIndicator size="large" color="#0000ff" className="my-3" />
      ) : (
        <FlatList
          data={movies}
          renderItem={({ item }) => <MovieCard {...item} />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          columnWrapperStyle={{ justifyContent: "space-between", gap: 10 }}
          ListHeaderComponent={
            <>
              <View className="w-full flex-row  items-center justify-center mt-20 ">
                <Image source={icons.logo} className="w-12 h-10" />
              </View>

              <View className=" my-5">
                <SearchBar
                  placeholder="Search movies..."
                  onPress={(e) => {
                    e.preventDefault();
                    router.push("/search");
                  }}
                />
              </View>
            </>
          }
        />
      )}
    </PageLayout>
  );
}
