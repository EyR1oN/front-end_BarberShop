import React from "react";
import NavBarLogged from "./NavBarLogged";
import NavBarUnloged from "./NavBarUnlogged";

export default function NavBarController() {
  const userName = JSON.parse(
    window.localStorage.getItem("userData")
  )?.username;
  return userName ? <NavBarLogged /> : <NavBarUnloged />;
}
