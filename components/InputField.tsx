import { StyleSheet, Text, TextInput, View } from "react-native";

type InputFieldProps = {
  label: string;
  value: string;
  placeholder?: string;
  keyboardType: "numeric" | "default";
  onChangeText: (text: string) => void;
};

const InputField = ({
  label,
  value,
  placeholder,
  onChangeText,
  keyboardType,
}: InputFieldProps) => {
  return (
    <View style={styles.directionInput}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        value={value}
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  directionInput: {
    flex: 1,
    marginHorizontal: 4,
  },
  inputLabel: {
    fontSize: 12,
    color: "#71717a",
    marginBottom: 4,
  },
  input: {
    backgroundColor: "#f4f4f5",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 40,
    fontSize: 16,
    color: "#18181b",
    borderWidth: 1,
    borderColor: "#e4e4e7",
  },
});

export default InputField;
