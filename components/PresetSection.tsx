import { PRESET_GRADIENTS } from "@/utils/data";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type PresetSectionProps = {
  applyPreset: (preset: any) => void;
};

const PresetSection = ({ applyPreset }: PresetSectionProps) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Presets</Text>
      <View style={styles.presetRow}>
        {PRESET_GRADIENTS.map((preset, index) => (
          <TouchableOpacity key={index} onPress={() => applyPreset(preset)}>
            <LinearGradient {...(preset as any)} style={styles.gradient} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 24,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    color: "#18181b",
  },
  presetRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  gradient: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
});

export default PresetSection;
