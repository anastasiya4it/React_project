import { classNames } from "shared/lib/className/className";
import cls from "./Loader.module.scss";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "app/provider/ThemeProvider/lib/useTheme";
interface LoaderProps {
  className?: string;
  // startx: number;
  // starty: number;
}

const Loader = ({ className }: LoaderProps) => {
  const widthMax = "100%";
  const heightMax = "100%";
  const s = window.screen;
  const width = s.width;
  const height = s.availHeight;
  // console.log(width, height, s);
  const { theme } = useTheme();
  const fillColor =
    theme === "dark" ? "rgba(9,9,73,.2)" : "rgba(232,232,234,.2)";
  const letter = Array.from({ length: 256 }, () => {
    return 65 + Math.floor(Math.random() * 50);
  });

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      // console.log(context);

      if (context) {
        context.fillStyle = fillColor;
        context.fillRect(0, 0, width, height);
        context.fillStyle = "#0F0";
        letter.map((yPos, index) => {
          const text = String.fromCharCode(65 + Math.random() * 50);
          const xPos = index * 10;
          context.fillText(text, xPos, yPos);
          letter[index] = yPos > 758 + Math.random() * 1e4 ? 0 : yPos + 10;
        });
      }
    }
  };
  setInterval(draw, 50);
  return (
    <canvas ref={canvasRef} height={height} className={classNames(cls.main)} />
  );
};

export { Loader };
