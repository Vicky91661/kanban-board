import React from "react";
import styles from "./Navbar.module.css";
import Dropdown from "../ui/Dropdown/Dropdown";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Dropdown />
    </div>
  );
}

export default Navbar;
