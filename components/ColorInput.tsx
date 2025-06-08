import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import ColorPickerModal from "./ColorPickerModal";

type ColorInputProps = {
  value: string;
  isTablet: boolean;
  placeholder: string;
  onChangeText: (text: string) => void;
};

const ColorInput = ({
  value,
  onChangeText,
  placeholder,
  isTablet,
}: ColorInputProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <View style={styles.colorInputContainer}>
        <TouchableOpacity
          onPress={() => setShowModal(true)}
          style={[styles.colorPreview, { backgroundColor: value }]}
        />
        <TextInput
          value={value}
          style={styles.colorInput}
          placeholder={placeholder}
          onChangeText={onChangeText}
          placeholderTextColor="#71717a"
        />
      </View>
      <ColorPickerModal
        value={"green"}
        isTablet={isTablet}
        visible={showModal}
        onClose={() => setShowModal(false)}
        onComplete={(data) => onChangeText(data.hex)}
      />
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
