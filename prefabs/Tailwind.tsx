import React from "react";
import PlayPause from "../src/components/PlayPause";
import { NavLink } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";

export const _PlayPause = () => {
  return (
    <PlayPause
      isPlaying={true}
      activeSong={null}
      song={null}
      handlePause={() => {}}
      handlePlay={() => {}}
    />
  );
};

export const _NavLink = () => {
  return (
    <NavLink
      key={"item.name"}
      to={"item.to"}
      className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
      onClick={() => {}}
    >
      <HiOutlineHome className="w-6 h-6 mr-2" />
      {"item.name"}
    </NavLink>
  );
};
