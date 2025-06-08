import { GradientConfig } from "@/components/GradientPreview";

export const getCodeOutput = (gradientConfig: GradientConfig) => {
  return `
  <LinearGradient
    locations={${JSON.stringify(gradientConfig.locations)}}
    end={${JSON.stringify(gradientConfig.end)}}
    start={${JSON.stringify(gradientConfig.start)}}
    style={styles.gradient}
    colors={${JSON.stringify(gradientConfig.colors)}}
  />
  `;
};
