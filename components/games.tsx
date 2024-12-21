"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const mazeSize = { rows: 15, cols: 20 };

const generateMaze = () => {
  const maze = Array(mazeSize.rows)
    .fill(null)
    .map(() => Array(mazeSize.cols).fill(0));

  maze[0][1] = 1;
  maze[0][5] = 1;
  maze[0][7] = 1;
  maze[0][9] = 1;
  maze[0][10] = 1;
  maze[0][12] = 1;
  maze[0][13] = 1;
  maze[0][14] = 1;
  maze[1][3] = 1;
  maze[1][5] = 1;
  maze[1][6] = 1;
  maze[1][7] = 1;
  maze[1][8] = 1;
  maze[1][13] = 1;
  maze[1][16] = 1;
  maze[1][17] = 1;
  maze[1][18] = 1;
  maze[2][19] = 1;
  maze[2][1] = 1;
  maze[2][2] = 1;
  maze[2][3] = 1;
  maze[2][5] = 1;
  maze[2][11] = 1;
  maze[2][14] = 1;
  maze[2][18] = 1;
  maze[2][19] = 1;
  maze[3][1] = 1;
  maze[3][2] = 1;
  maze[3][3] = 1;
  maze[3][6] = 1;
  maze[3][8] = 1;
  maze[3][9] = 1;
  maze[3][11] = 1;
  maze[3][12] = 1;
  maze[3][14] = 1;
  maze[3][15] = 1;
  maze[3][16] = 1;
  maze[3][18] = 1;
  maze[4][0] = 1;
  maze[4][1] = 1;
  maze[4][2] = 1;
  maze[4][3] = 1;
  maze[4][4] = 1;
  maze[4][9] = 1;
  maze[4][11] = 1;
  maze[4][12] = 1;
  maze[4][18] = 1;
  maze[4][19] = 1;
  maze[5][0] = 1;
  maze[5][1] = 1;
  maze[5][2] = 1;
  maze[5][5] = 1;
  maze[5][6] = 1;
  maze[5][7] = 1;
  maze[5][9] = 1;
  maze[5][11] = 1;
  maze[5][12] = 1;
  maze[5][14] = 1;
  maze[5][16] = 1;
  maze[5][17] = 1;
  maze[5][19] = 1;
  maze[6][0] = 1;
  maze[6][1] = 1;
  maze[6][3] = 1;
  maze[6][6] = 1;
  maze[6][9] = 1;
  maze[6][11] = 1;
  maze[6][13] = 1;
  maze[6][14] = 1;
  maze[6][18] = 1;
  maze[6][19] = 1;
  maze[7][1] = 1;
  maze[7][2] = 1;
  maze[7][3] = 1;
  maze[7][5] = 1;
  maze[7][6] = 1;
  maze[7][8] = 1;
  maze[7][9] = 1;
  maze[7][11] = 1;
  maze[7][12] = 1;
  maze[7][14] = 1;
  maze[7][15] = 1;
  maze[7][16] = 1;
  maze[7][18] = 1;
  maze[7][19] = 1;
  maze[8][1] = 1;
  maze[8][2] = 1;
  maze[8][3] = 1;
  maze[8][4] = 1;
  maze[8][6] = 1;
  maze[8][7] = 1;
  maze[8][9] = 1;
  maze[8][10] = 1;
  maze[8][11] = 1;
  maze[8][13] = 1;
  maze[8][14] = 1;
  maze[8][18] = 1;
  maze[8][19] = 1;
  maze[9][1] = 1;
  maze[9][2] = 1;
  maze[9][4] = 1;
  maze[9][5] = 1;
  maze[9][8] = 1;
  maze[9][9] = 1;
  maze[9][10] = 1;
  maze[9][16] = 1;
  maze[9][17] = 1;
  maze[10][1] = 1;
  maze[10][2] = 1;
  maze[10][3] = 1;
  maze[10][9] = 1;
  maze[10][10] = 1;
  maze[10][12] = 1;
  maze[10][13] = 1;
  maze[10][14] = 1;
  maze[10][16] = 1;
  maze[10][17] = 1;
  maze[10][19] = 1;
  maze[11][1] = 1;
  maze[11][2] = 1;
  maze[11][3] = 1;
  maze[11][5] = 1;
  maze[11][6] = 1;
  maze[11][12] = 1;
  maze[11][14] = 1;
  maze[11][15] = 1;
  maze[11][17] = 1;
  maze[11][18] = 1;
  maze[12][5] = 1;
  maze[12][7] = 1;
  maze[12][8] = 1;
  maze[12][9] = 1;
  maze[12][10] = 1;
  maze[12][11] = 1;
  maze[12][14] = 1;
  maze[12][15] = 1;
  maze[12][16] = 1;
  maze[13][1] = 1;
  maze[13][3] = 1;
  maze[13][10] = 1;
  maze[13][12] = 1;
  maze[13][14] = 1;
  maze[13][18] = 1;
  maze[14][2] = 1;
  maze[14][3] = 1;
  maze[14][4] = 1;
  maze[14][6] = 1;
  maze[14][7] = 1;
  maze[14][8] = 1;
  maze[14][17] = 1;
  maze[14][18] = 1;
  maze[0][0] = 2;
  maze[14][0] = 2;
  maze[9][0] = 2;
  maze[0][19] = 2;
  maze[14][19] = 2;
  return maze;
};

const GamesPlayer = () => {
  const [maze] = useState(generateMaze());
  const [playerPos, setPlayerPos] = useState({ row: 7, col: 10 });
  const mazeRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (mazeRef.current) {
      mazeRef.current.focus();
    }
  }, []);

  const exitLinks = [
    "/intro",
    "/services",
    "/portfolio",
    "/contactame",
    "/about-me",
  ];

  const handleMove = (direction: String) => {
    const { row, col } = playerPos;
    let newRow = row;
    let newCol = col;

    if (direction === "up") newRow = Math.max(row - 1, 0);
    if (direction === "down") newRow = Math.min(row + 1, mazeSize.rows - 1);
    if (direction === "left") newCol = Math.max(col - 1, 0);
    if (direction === "right") newCol = Math.min(col + 1, mazeSize.cols - 1);

    if (maze[newRow][newCol] !== 1) {
      setPlayerPos({ row: newRow, col: newCol });

      if (maze[newRow][newCol] === 2) {
        const exitIndex = [
          { row: 0, col: 0 },
          { row: 14, col: 0 },
          { row: 9, col: 0 },
          { row: 0, col: 19 },
          { row: 14, col: 19 },
        ].findIndex((exit) => exit.row === newRow && exit.col === newCol);
        if (exitIndex !== -1) {
          router.push(exitLinks[exitIndex]);
        }
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowUp") handleMove("up");
    if (event.key === "ArrowDown") handleMove("down");
    if (event.key === "ArrowLeft") handleMove("left");
    if (event.key === "ArrowRight") handleMove("right");
  };

  return (
    <>
      <div
        ref={mazeRef}
        className="w-full h-full grid"
        style={{
          gridTemplateRows: `repeat(${mazeSize.rows}, 1fr)`,
          gridTemplateColumns: `repeat(${mazeSize.cols}, 1fr)`,
        }}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {maze.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`border ${
                cell === 1
                  ? "bg-gray-700"
                  : cell === 2
                  ? "bg-green-500"
                  : "bg-white"
              }`}
            >
              {playerPos.row === rowIndex && playerPos.col === colIndex && (
                <motion.div
                  className="w-full h-full bg-blue-500"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                />
              )}
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default GamesPlayer;
