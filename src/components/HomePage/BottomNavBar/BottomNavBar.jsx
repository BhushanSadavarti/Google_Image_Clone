import React from "react";
import { FiHome, FiBell, FiMenu } from "react-icons/fi";
import { WiTime4 } from "react-icons/wi";
import { BottomBarWrapper, NavIcons, IconButton } from "./styles";

const BottomNavBar = () => {
  return (
    <BottomBarWrapper>
      <NavIcons>
        <IconButton>
          <FiHome />
        </IconButton>
        <IconButton>
          <WiTime4 />
        </IconButton>
        <IconButton>
          <FiBell />
        </IconButton>
        <IconButton>
          <FiMenu />
        </IconButton>
      </NavIcons>
    </BottomBarWrapper>
  );
};

export default BottomNavBar;
