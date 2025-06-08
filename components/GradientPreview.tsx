import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View } from "react-native";

export interface GradientConfig {
  colors: string[];
  locations?: number[];
  end: { x: number; y: number };
  start: { x: number; y: number };
}

const GradientPreview = ({ config }: { config: GradientConfig }) => {
  return (
    <View style={styles.previewContainer}>
      <LinearGradient
        end={config.end}
        start={config.start}
        style={styles.gradient}
        colors={config.colors as any}
        locations={config.locations as any}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  previewContainer: {
    width: "100%",
    height: 300,
    borderRadius: 16,
    overflow: "hidden",
  },
  gradient: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default GradientPreview;
