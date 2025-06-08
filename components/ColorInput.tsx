import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

type ColorInputProps = {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
};

const ColorInput = ({ value, onChangeText, placeholder }: ColorInputProps) => {
  return (
    <>
      <View style={styles.colorInputContainer}>
        <View style={[styles.colorPreview, { backgroundColor: value }]} />
        <TextInput
          value={value}
          style={styles.colorInput}
          placeholder={placeholder}
          onChangeText={onChangeText}
          placeholderTextColor="#71717a"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  colorInputContainer: {
    flex: 2,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    backgroundColor: "#f4f4f5",
  },
  colorPreview: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
  colorInput: {
    flex: 1,
    height: 44,
    fontSize: 16,
    color: "#18181b",
  },
});

export default ColorInput;
