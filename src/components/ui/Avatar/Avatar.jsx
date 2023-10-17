import React from "react";
import styles from "./Avatar.module.css";
import { getFirstAndLastLetters } from "../../../lib/util";
import clsx from "clsx";

const Avatar = ({ name = "AS", src = "", active = true }) => {
  return (
    <div className={styles.avatar}>
      {src ? (
        <img src={src} alt="" />
      ) : (
        <span>{getFirstAndLastLetters(name)}</span>
      )}
      <div className={clsx(styles.status, { [styles.active]: active })} />
    </div>
  );
};

export default Avatar;
