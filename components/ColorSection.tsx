import ColorInput from "@/components/ColorInput";
import InputField from "@/components/InputField";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type ColorSectionProps = {
  colors: string[];
  locations: string[];
  addColor: () => void;
  removeColor: (index: number) => void;
  updateColor: (index: number, color: string) => void;
  updateLocation: (index: number, location: string) => void;
};

const ColorSection = ({
  colors,
  addColor,
  locations,
  updateColor,
  removeColor,
  updateLocation,
}: ColorSectionProps) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Colors & Locations</Text>
      {colors?.map((color, index) => (
        <View key={index} style={styles.colorRow}>
          <View style={styles.colorInputGroup}>
            <ColorInput
              value={color}
              placeholder={`Color ${index + 1}`}
              onChangeText={(text) => updateColor(index, text)}
            />
            <InputField
              label="Location"
              placeholder="0-1"
              value={locations[index]}
              keyboardType="numeric"
              onChangeText={(text) => updateLocation(index, text)}
            />
          </View>

          {colors.length > 2 && (
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => removeColor(index)}
            >
              <Text style={styles.removeButtonText}>×</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}

      <TouchableOpacity style={styles.addButton} onPress={addColor}>
        <Text style={styles.addButtonText}>+ Add Color</Text>
      </TouchableOpacity>
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
  colorRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  colorInputGroup: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
  },
  removeButton: {
    marginLeft: 8,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#dc2626",
    alignItems: "center",
    justifyContent: "center",
  },
  removeButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  addButton: {
    backgroundColor: "#3f3f46",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 8,
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ColorSection;
