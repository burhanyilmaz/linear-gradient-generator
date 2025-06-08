import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type CodeOutputProps = {
  isTablet: boolean;
  codeOutput?: string;
  onCopyCode: () => void;
};

const CodeOutput = ({ isTablet, onCopyCode, codeOutput }: CodeOutputProps) => {
  return (
    <View
      style={
        isTablet ? styles.tabletOutputContainer : styles.mobileOutputContainer
      }
    >
      <View style={styles.outputSection}>
        <Text style={styles.sectionTitle}>Code Output</Text>
        <View style={styles.codeContainer}>
          <Text style={styles.codeText}>{codeOutput}</Text>
        </View>
        <TouchableOpacity style={styles.copyButton} onPress={onCopyCode}>
          <Text style={styles.copyButtonText}>Copy Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mobileOutputContainer: {
    gap: 16,
    marginTop: 24,
  },
  tabletOutputContainer: {
    flex: 1,
  },
  outputSection: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#18181b",
  },
  codeContainer: {
    flex: 1,
    backgroundColor: "#f4f4f5",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  codeText: {
    fontFamily: "monospace",
    fontSize: 12,
    color: "#18181b",
    lineHeight: 16,
  },
  copyButton: {
    backgroundColor: "#3f3f46",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
  },
  copyButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default CodeOutput;
