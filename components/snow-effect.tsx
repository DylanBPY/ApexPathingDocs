"use client";

import React from "react";
import Snowfall from "react-snowfall";

export default function SnowEffect() {
  return (
    <Snowfall
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: -1, // Pushes the snow behind your page content
      }}
      // Optional configuration props to tweak the appearance
      snowflakeCount={100} // Total number of snowflakes
      color="#ffffff"      // Color of the snow
      speed={[0.5, 2.5]}   // Min and max vertical speed [min, max]
      wind={[-0.5, 1.5]}   // Min and max horizontal drift [min, max]
      radius={[0.5, 3.0]}  // Min and max snowflake size in pixels
    />
  );
}