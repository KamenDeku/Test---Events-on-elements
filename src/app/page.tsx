"use client";
import { useState } from "react";
import Form from "./components/Form";
import Display from "./components/Display";

// 🔧 Convierte cualquier color válido a RGB
function parseColorToRGB(color: string): { r: number; g: number; b: number } | null {
  if (typeof window === "undefined") return null;

  const ctx = document.createElement("canvas").getContext("2d");
  if (!ctx) return null;

  ctx.fillStyle = color;
  const computed = ctx.fillStyle;

  const dummy = document.createElement("div");
  dummy.style.color = computed;
  document.body.appendChild(dummy);

  const rgb = window.getComputedStyle(dummy).color;
  document.body.removeChild(dummy);

  const match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (!match) return null;

  return {
    r: parseInt(match[1]),
    g: parseInt(match[2]),
    b: parseInt(match[3]),
  };
}


function adjustRGBColor(r: number, g: number, b: number, percent: number): string {
  r = Math.min(255, Math.max(0, r + percent));
  g = Math.min(255, Math.max(0, g + percent));
  b = Math.min(255, Math.max(0, b + percent));
  return `rgb(${r}, ${g}, ${b})`;
}

export default function Home() {
  const [message, setMessage] = useState("");
  const [data, setData] = useState({ name: "", color: "", era: "" });

  let lightColor = "#284f75";
  let darkColor = "#242b32";

  if (typeof window !== "undefined" && data.color.trim() !== "") {
    const parsed = parseColorToRGB(data.color);
    if (parsed) {
      lightColor = adjustRGBColor(parsed.r, parsed.g, parsed.b, 80); 
      darkColor = adjustRGBColor(parsed.r, parsed.g, parsed.b, -50); 
    }
  }

  return (
    <div className="flex flex-1 overflow-hidden">
      <aside
        className="w-1/6 h-full overflow-y-auto p-4 transition-colors duration-500"
        style={{ backgroundColor: lightColor }}
      >
        <Form setData={setData} setMessage={setMessage} />
      </aside>

      <main
        className="flex-1 h-full overflow-hidden p-4 transition-colors duration-500"
        style={{ backgroundColor: darkColor }}
      >
        <Display 
          data={data} 
          message={message} 
          color={darkColor} 
        />
      </main>
    </div>
  );
}
