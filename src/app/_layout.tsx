import { Stack } from "expo-router";

import "react-native-url-polyfill/auto";
import "../global.css";
import React, { useEffect } from "react";

import { client } from "../lib/appwrite";
import { StatusBar } from "react-native";

export default function RootLayout() {
  useEffect(() => {
    client.ping();
  }, []);

  return (
    <>
      <StatusBar hidden={true} />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="movies/[id]" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
