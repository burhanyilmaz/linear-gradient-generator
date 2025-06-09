import { BlurView } from "expo-blur";
import { Link } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Header() {
  const { top } = useSafeAreaInsets();

  return (
    <BlurView
      tint="light"
      intensity={40}
      style={[styles.container, { paddingTop: top + 16 }]}
    >
      <View style={styles.content}>
        <View />
        <Link href="https://github.com/burhanyilmaz/linear-gradient-generator">
          <Pressable
            style={({ pressed }) => [
              styles.githubButton,
              pressed && styles.githubButtonPressed,
            ]}
          >
            <Text style={styles.githubButtonText}> ☆ Star us on GitHub</Text>
          </Pressable>
        </Link>
      </View>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 16,
    maxWidth: 1200,
    alignSelf: "center",
    width: "100%",
  },
  githubButton: {
    backgroundColor: "#18181b",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  githubButtonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  githubButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
});
