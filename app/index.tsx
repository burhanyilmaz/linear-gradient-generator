import CodeOutput from "@/components/CodeOutput";
import ColorSection from "@/components/ColorSection";
import DeveloperInfo from "@/components/DeveloperInfo";
import DirectionSection from "@/components/DirectionSection";
import GradientPreview from "@/components/GradientPreview";
import Header from "@/components/Header";
import PresetSection from "@/components/PresetSection";
import { useHandleGradientGenerator } from "@/hooks/useHandleGradientGenerator";
import { getCodeOutput } from "@/utils/helpers";
import * as Clipboard from "expo-clipboard";
import { Stack } from "expo-router";
import React, { useMemo } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const {
    endX,
    endY,
    colors,
    startX,
    startY,
    setEndX,
    setEndY,
    addColor,
    setStartX,
    setStartY,
    locations,
    removeColor,
    updateColor,
    applyPreset,
    updateLocation,
    gradientConfig,
  } = useHandleGradientGenerator();

  const { top } = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const isTablet = useMemo(() => width >= 884, [width]);

  const codeOutput = useMemo(
    () => getCodeOutput(gradientConfig),
    [gradientConfig],
  );

  const onCopyCode = () => {
    Clipboard.setStringAsync(getCodeOutput(gradientConfig));
  };

  const mainContentStyle = useMemo(
    () => [
      styles.mainContent,
      isTablet ? styles.mainContentRow : styles.mainContentColumn,
    ],
    [isTablet],
  );

  const leftColumnStyle = useMemo(
    () => [
      isTablet ? styles.column : {},
      isTablet ? styles.leftColumn : styles.mobileColumn,
    ],
    [isTablet],
  );

  const rightColumnStyle = useMemo(
    () => [
      isTablet ? styles.column : {},
      isTablet ? styles.rightColumn : styles.mobileColumn,
    ],
    [isTablet],
  );

  return (
    <>
      <Stack.Screen options={{ header: () => <Header /> }} />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        style={[styles.container, { paddingTop: top + 72 }]}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Expo Linear Gradient Generator</Text>
          <Text style={styles.subtitle}>
            Create beautiful gradients for your React Native apps
          </Text>
        </View>

        <View style={mainContentStyle}>
          <View style={leftColumnStyle}>
            <View style={styles.previewSection}>
              <Text style={styles.sectionTitle}>Preview</Text>
              <GradientPreview config={gradientConfig} />
            </View>
            {isTablet && (
              <CodeOutput
                isTablet={isTablet}
                codeOutput={codeOutput}
                onCopyCode={onCopyCode}
              />
            )}
          </View>

          <View style={rightColumnStyle}>
            <ColorSection
              colors={colors}
              isTablet={isTablet}
              addColor={addColor}
              locations={locations}
              updateColor={updateColor}
              removeColor={removeColor}
              updateLocation={updateLocation}
            />

            <DirectionSection
              endX={endX}
              endY={endY}
              startX={startX}
              startY={startY}
              setEndX={setEndX}
              setEndY={setEndY}
              setStartX={setStartX}
              setStartY={setStartY}
            />

            <PresetSection applyPreset={applyPreset} />
            {!isTablet && (
              <CodeOutput
                isTablet={isTablet}
                codeOutput={codeOutput}
                onCopyCode={onCopyCode}
              />
            )}
          </View>
        </View>
        <DeveloperInfo />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  scrollContent: {
    padding: 16,
    maxWidth: 1200,
    alignSelf: "center",
    width: "100%",
  },
  header: {
    marginBottom: 32,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
    color: "#18181b",
  },
  subtitle: {
    fontSize: 16,
    color: "#71717a",
    textAlign: "center",
  },
  mainContent: {
    gap: 24,
    alignItems: "flex-start",
  },
  mainContentRow: {
    flexDirection: "row",
  },
  mainContentColumn: {
    flexDirection: "column",
  },
  column: {
    flex: 1,
  },
  leftColumn: {
    minWidth: 400,
    marginRight: 12,
  },
  rightColumn: {
    minWidth: 400,
    marginLeft: 12,
  },
  mobileColumn: {
    width: "100%",
    marginHorizontal: 0,
  },
  previewSection: {
    marginBottom: 24,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    color: "#18181b",
  },
});
