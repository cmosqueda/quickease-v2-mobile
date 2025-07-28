/*
NOTE:
Sadly, dili ma apply ang nativewind utility classes kay
wala pay support ang Animated.View react component for it
so for customizing this, for now, we'll have it the
props way muna until I think of a workaround.
*/

import React, { useEffect, useRef } from "react";
import { Animated, ViewStyle } from "react-native";

type SkeletonType = "rounded" | "box" | "text";
type Dimension = number | `${number}%`;

interface SkeletonProps {
  width?: Dimension;
  height?: Dimension;
  type?: SkeletonType;
  bgColor?: string;
  style?: ViewStyle;
}

const Skeleton: React.FC<SkeletonProps> = ({
  // defaults
  width = "100%",
  height = 20,
  type = "box",
  bgColor = "#d1d5db",
  style = {},
}) => {
  const opacity = useRef(new Animated.Value(0.6)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.6,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 700,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [opacity]);

  const borderRadius = (() => {
    switch (type) {
      case "rounded":
        return 999;
      case "text":
        return 4;
      default:
        return 6;
    }
  })();

  return (
    <>
      <Animated.View
        style={[
          {
            width,
            height,
            borderRadius,
            opacity,
            backgroundColor: bgColor,
          },
          style,
        ]}
      />
    </>
  );
};

export default Skeleton;
