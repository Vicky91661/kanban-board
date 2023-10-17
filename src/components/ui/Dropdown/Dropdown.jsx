import React, { useRef } from "react";
import clsx from "clsx";
import styles from "./Dropdown.module.css";
import { SlidersHorizontalIcon, ChevronDownIcon } from "lucide-react";
import { useToggle } from "../../../hook/useToggle";
import useOnClickOutside from "../../../hook/useOnClickOutside";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../../reducer/filterSlice/filterSlice";

const Dropdown = () => {
  const dropdownRef = useRef(null);
  const { value, setValue } = useToggle(false);
  const dispatch = useDispatch();
  const { grouping, ordering } = useSelector((state) => state.filter);

  const open = () => {
    if (value) return;
    setValue(true);
  };

  const close = () => {
    setValue(false);
  };

  useOnClickOutside(dropdownRef, close);

  const handleGroupingChange = (event) => {
    dispatch(setFilter({ grouping: event.target.value, ordering }));
  };

  const handleOrderingChange = (event) => {
    dispatch(setFilter({ grouping, ordering: event.target.value }));
  };

  return (
    <div ref={dropdownRef} className={styles.dropdown}>
      <button onClick={open} onFocus={open}>
        <SlidersHorizontalIcon fontSize="16px" /> Display
        <ChevronDownIcon fontSize="16px" />
      </button>
      <div
        className={clsx({
          [styles.dropdownContainer]: true,
          [styles.show]: value,
        })}>
        {value ? (
          <div className={styles.form}>
            <label htmlFor="grouping">Grouping</label>
            <select
              id="grouping"
              value={grouping}
              onChange={handleGroupingChange}>
              <option value="status">Status</option>
              <option value="userId">User</option>
              <option value="priority">Priority</option>
            </select>

            <label htmlFor="ordering">Ordering</label>
            <select
              id="ordering"
              value={ordering}
              onChange={handleOrderingChange}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Dropdown;
