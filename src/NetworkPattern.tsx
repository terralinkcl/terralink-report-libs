import React from "react";
import { Svg, Line, Circle } from "@react-pdf/renderer";

// Patron de "constelacion / red" de Terralink, portado del login del portal de
// clientes (public/network-pattern.svg). Mismas coordenadas (viewBox 760x760).
// Se dibuja con primitivas SVG de react-pdf. Parametrizable por color/opacidad
// para usarlo como decoracion de portada.

const LINES: [number, number, number, number][] = [
  [180, 340, 80, 280], [80, 280, 40, 360], [40, 360, 120, 460], [80, 280, 120, 460],
  [40, 360, 60, 540], [80, 280, 60, 540], [180, 340, 120, 460], [180, 340, 280, 440],
  [180, 340, 220, 400], [60, 540, 120, 460], [60, 540, 160, 580], [60, 540, 140, 660],
  [60, 540, 80, 620], [280, 440, 120, 460], [280, 440, 220, 400], [280, 440, 160, 580],
  [280, 440, 320, 520], [140, 660, 160, 580], [140, 660, 80, 620], [140, 660, 240, 640],
  [120, 460, 160, 580], [120, 460, 220, 400], [160, 580, 240, 640], [160, 580, 320, 520],
  [80, 620, 140, 660], [320, 520, 240, 640], [320, 520, 360, 480], [280, 440, 360, 480],
];

const NODES: [number, number, number][] = [
  [120, 460, 4], [220, 400, 3], [160, 580, 4], [80, 620, 3], [240, 640, 3],
  [320, 520, 3], [360, 480, 2.5], [80, 280, 3], [40, 360, 3],
];

const ACCENTS: [number, number, number][] = [
  [180, 340, 6], [60, 540, 6], [280, 440, 6], [140, 660, 6],
];

export interface NetworkPatternProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any;
  viewBox?: string;
  lineColor?: string;
  lineOpacity?: number;
  nodeColor?: string;
  nodeOpacity?: number;
  accentColor?: string;
  accentOpacity?: number;
}

export function NetworkPattern({
  style,
  viewBox = "20 255 380 430",
  lineColor = "#FFFFFF",
  lineOpacity = 0.12,
  nodeColor = "#FFFFFF",
  nodeOpacity = 0.18,
  accentColor = "#06B6D4",
  accentOpacity = 0.8,
}: NetworkPatternProps) {
  return (
    <Svg viewBox={viewBox} preserveAspectRatio="xMidYMid slice" style={style}>
      {LINES.map(([x1, y1, x2, y2], i) => (
        <Line
          key={`l${i}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={lineColor}
          strokeWidth={0.8}
          strokeOpacity={lineOpacity}
        />
      ))}
      {NODES.map(([cx, cy, r], i) => (
        <Circle key={`n${i}`} cx={cx} cy={cy} r={r} fill={nodeColor} fillOpacity={nodeOpacity} />
      ))}
      {ACCENTS.map(([cx, cy, r], i) => (
        <Circle key={`a${i}`} cx={cx} cy={cy} r={r} fill={accentColor} fillOpacity={accentOpacity} />
      ))}
    </Svg>
  );
}
