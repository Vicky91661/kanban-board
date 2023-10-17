import React from "react";
import styles from "./DefaultLayout.module.css";
import Navbar from "../../components/Navbar/Navbar.jsx";

const DefaultLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.children}>{children}</div>
    </div>
  );
};

export default DefaultLayout;
