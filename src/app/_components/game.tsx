"use client";

import { useState } from "react";

import { Tile } from "./tile";

const GRIDSIZE = 6;

export function Game() {
  const g: Record<string, string> = {};
  for (let r = 0; r < GRIDSIZE; r++) {
    for (let c = 0; c < GRIDSIZE; c++) {
      g[`${r}-${c}`] = "blue";
    }
  }
  const [grid, setGrid] = useState(g);

  const handleTileClick = (row: number, col: number) => {
    console.log(row, col);

    const updatedGrid = {
      ...grid,
      [`${row}-${col}`]: grid[`${row}-${col}`] == "blue" ? "red" : "blue",
      [`${row + 1}-${col}`]:
        grid[`${row + 1}-${col}`] == "blue" ? "red" : "blue",
      [`${row - 1}-${col}`]:
        grid[`${row - 1}-${col}`] == "blue" ? "red" : "blue",
      [`${row}-${col + 1}`]:
        grid[`${row}-${col + 1}`] == "blue" ? "red" : "blue",
      [`${row}-${col - 1}`]:
        grid[`${row}-${col - 1}`] == "blue" ? "red" : "blue",
    };
    setGrid(updatedGrid);
  };

  console.log(grid);

  return (
    <div>
      {Array(GRIDSIZE)
        .fill(0)
        .map((_, r) => (
          <div key={r}>
            {Array(GRIDSIZE)
              .fill(0)
              .map((_, c) => (
                <Tile
                  key={`${r}-${c}`}
                  color={grid[`${r}-${c}`] ?? "purple"}
                  handleTileClick={() => {
                    handleTileClick(r, c);
                  }}
                />
              ))}
          </div>
        ))}
    </div>
  );
}
