import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ColorPicker, {
  HueSlider,
  OpacitySlider,
  Panel1,
  Preview,
  Swatches,
} from "reanimated-color-picker";

interface ColorPickerModalProps {
  value?: string;
  visible: boolean;
  isTablet: boolean;
  onClose: () => void;
  onComplete?: (data: { hex: string }) => void;
}

export default function ColorPickerModal({
  visible,
  onClose,
  isTablet,
  onComplete,
  value = "red",
}: ColorPickerModalProps) {
  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View style={styles[isTablet ? "modalBackdrop" : "modalBackdropMobile"]}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Color Picker</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeButton}>X</Text>
            </TouchableOpacity>
          </View>
          <ColorPicker
            value={value}
            onComplete={onComplete}
            style={styles.colorPicker}
          >
            <Preview />
            <Panel1 />
            <HueSlider />
            <OpacitySlider />
            <Swatches />
          </ColorPicker>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    padding: 20,
  },
  modalBackdropMobile: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  modalContainer: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    width: "90%",
    maxWidth: 400,
    maxHeight: "80%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#18181b",
  },
  colorPicker: {
    width: "100%",
    gap: 10,
  },
  closeButton: {
    fontSize: 16,
    fontWeight: "600",
    color: "#18181b",
  },
});
