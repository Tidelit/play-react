"use client";

import { Miniplayer } from "../Miniplayer";
import { useMusicStore } from "@/app/store/useMusicStore";

export const ClientMiniplayer = () => {
  const { isPlayerVisible } = useMusicStore();

  if (!isPlayerVisible) return null;

  return (
      <Miniplayer />
  );
};
