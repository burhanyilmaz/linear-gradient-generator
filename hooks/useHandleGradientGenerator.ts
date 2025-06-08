import { GradientConfig } from "@/components/GradientPreview";
import { useMemo, useState } from "react";

export const useHandleGradientGenerator = () => {
  const [endX, setEndX] = useState("1");
  const [endY, setEndY] = useState("0");
  const [startX, setStartX] = useState("0");
  const [startY, setStartY] = useState("0");
  const [locations, setLocations] = useState<string[]>(["0", "1"]);
  const [colors, setColors] = useState<string[]>(["#00C9FF", "#92FE9D"]);

  const gradientConfig: GradientConfig = useMemo(
    () => ({
      colors,
      end: { x: parseFloat(endX) || 1, y: parseFloat(endY) || 0 },
      locations: locations.map((location) => parseFloat(location) || 0),
      start: { x: parseFloat(startX) || 0, y: parseFloat(startY) || 0 },
    }),
    [colors, locations, startX, startY, endX, endY],
  );

  const addColor = () => {
    setColors([...colors, "crimson"]);
    const newLocation = colors.length === 0 ? "0" : "1";
    setLocations([...locations, newLocation]);
  };

  const removeColor = (index: number) => {
    if (colors.length > 2) {
      setColors(colors.filter((_, i) => i !== index));
      setLocations(locations.filter((_, i) => i !== index));
    }
  };

  const updateColor = (index: number, color: string) => {
    const newColors = [...colors];
    newColors[index] = color;
    setColors(newColors);
  };

  const updateLocation = (index: number, location: string) => {
    const newLocations = [...locations];
    newLocations[index] = location;
    setLocations(newLocations);
  };

  const applyPreset = (preset: any) => {
    setColors(preset.colors);
    setLocations(
      preset.locations ||
        preset.colors.map((_: any, i: number) =>
          (i / (preset.colors.length - 1)).toString(),
        ),
    );
    setStartX(preset.start.x.toString());
    setStartY(preset.start.y.toString());
    setEndX(preset.end.x.toString());
    setEndY(preset.end.y.toString());
  };

  return {
    endX,
    endY,
    startX,
    startY,
    colors,
    setEndX,
    setEndY,
    addColor,
    setStartX,
    setStartY,
    setColors,
    locations,
    removeColor,
    updateColor,
    applyPreset,
    setLocations,
    gradientConfig,
    updateLocation,
  };
};
