"use client";

import { Miniplayer } from "../Miniplayer";

export const ClientMiniplayer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-20 border-t border-gray-200 backdrop-blur-2xl">
      <Miniplayer />
    </div>
  );
};
