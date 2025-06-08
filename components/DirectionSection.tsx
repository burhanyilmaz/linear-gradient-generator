import InputField from "@/components/InputField";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type DirectionSectionProps = {
  endX: string;
  endY: string;
  startX: string;
  startY: string;
  setEndX: (text: string) => void;
  setEndY: (text: string) => void;
  setStartX: (text: string) => void;
  setStartY: (text: string) => void;
};

const DirectionSection = ({
  endX,
  endY,
  startX,
  startY,
  setEndX,
  setEndY,
  setStartX,
  setStartY,
}: DirectionSectionProps) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Direction</Text>
      <View style={styles.directionRow}>
        <InputField
          label="Start X"
          value={startX}
          keyboardType="numeric"
          onChangeText={setStartX}
        />
        <InputField
          label="Start Y"
          value={startY}
          keyboardType="numeric"
          onChangeText={setStartY}
        />
        <InputField
          label="End X"
          value={endX}
          keyboardType="numeric"
          onChangeText={setEndX}
        />
        <InputField
          label="End Y"
          value={endY}
          keyboardType="numeric"
          onChangeText={setEndY}
        />
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
  directionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default DirectionSection;
