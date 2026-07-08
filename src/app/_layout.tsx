import { Stack } from "expo-router";

import "react-native-url-polyfill/auto";
import "../global.css";
import React, { useEffect } from "react";

import { client } from "../lib/appwrite";

export default function RootLayout() {
  useEffect(() => {
    client.ping();
  }, []);

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="movie/[id]" options={{ headerShown: false }} />
    </Stack>
  );
}
