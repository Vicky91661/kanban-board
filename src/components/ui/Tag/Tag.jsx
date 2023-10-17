import React from "react";
import styles from "./Tag.module.css";

const Tag = ({ children }) => {
  return <div className={styles.tag}>{children}</div>;
};

export default Tag;
