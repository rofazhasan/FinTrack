import React from "react";
import { SvgXml } from "react-native-svg";
import { View } from 'react-native'; // Import View

interface Props {
  svg?: string; // Make svg prop optional
  fill: string;
  height: string;
  width: string;
}

export default function Icon({ svg, fill, height, width }: Props): JSX.Element {
  let imagesvg = ""; // Initialize imagesvg

  if (svg) { // Check if svg is defined before using it
      imagesvg = svg.includes("fill")
      ? svg.replace(/fill="([^"]+)"/i, `fill="${fill}"`)
      : svg.replace("<svg ", `<svg fill="${fill}" `);
      return <SvgXml xml={imagesvg} height={height} width={width} />;
  } else {
    return <View />; // Return an empty View instead of null
  }
}
