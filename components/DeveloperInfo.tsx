import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function DeveloperInfo() {
  const socialLinks = [
    {
      href: "https://github.com/burhanyilmaz",
      text: "💻 GitHub",
      colors: ["#434343", "#000000"],
    },
    {
      href: "https://www.linkedin.com/in/burhanyilmaz-/",
      text: "💼 LinkedIn",
      colors: ["#0077b5", "#004182"],
    },
    {
      href: "https://x.com/burhanyilmazz_",
      text: "🐦 Twitter",
      colors: ["#1da1f2", "#0c7abf"],
    },
  ];

  const SocialButton = ({
    href,
    text,
    colors,
  }: {
    href: string;
    text: string;
    colors: string[];
  }) => {
    return (
      <Link href={href as any}>
        <Pressable
          style={({ pressed }) => [pressed && styles.socialButtonPressed]}
        >
          <LinearGradient
            colors={colors as [string, string]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.socialButton}
          >
            <Text style={styles.socialButtonText}>{text}</Text>
          </LinearGradient>
        </Pressable>
      </Link>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.avatarSection}>
          <Image
            source={{
              uri: "https://avatars.githubusercontent.com/u/37181742?v=4",
            }}
            style={styles.avatar}
          />
        </View>
        <View style={styles.infoSection}>
          <Text style={styles.name}>Burhan YILMAZ</Text>
          <Text style={styles.title}>React Native Developer</Text>
          <Text style={styles.description}>
            Passionate React Native developer creating beautiful and functional
            mobile applications. Specialized in cross-platform development with
            React Native and Expo.
          </Text>

          <View style={styles.socialLinks}>
            {socialLinks.map((link) => (
              <SocialButton key={link.href} {...link} />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    marginTop: 100,
  },
  content: {
    gap: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  avatarSection: {
    alignItems: "center",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  infoSection: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#18181b",
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    color: "#71717a",
    fontWeight: "600",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#52525b",
    lineHeight: 20,
    marginBottom: 12,
  },
  socialLinks: {
    flexDirection: "row",
    gap: 8,
    flexWrap: "wrap",
  },
  socialButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  socialButtonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  socialButtonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
});
