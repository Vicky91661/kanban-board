import React from "react";
import styles from "./KanbanGroup.module.css";
import KanbanCard from "../KanbanCard/KanbanCard";
import { MoreHorizontal, PlusIcon } from "lucide-react";
import { useSelector } from "react-redux";
import Avatar from "../../ui/Avatar/Avatar";

const KanbanGroup = ({ userId, group = "Backlog", icon, tickets = [] }) => {
  const grouping = useSelector((state) => state.filter.grouping);
  const users = useSelector((state) => state.tickets.data.users);
  const currentUser = users?.find((user) => user.id === userId);

  return (
    <div className={styles.kanbanCategory}>
      <div className={styles.header}>
        <div className={styles.group}>
          {grouping === "userId" ? (
            <Avatar active={currentUser?.available} name={currentUser?.name} />
          ) : (
            icon
          )}

          <p>{group}</p>
          <span>{tickets.length || 0}</span>
        </div>
        <PlusIcon color="#8c8c8d" />
        <MoreHorizontal color="#8c8c8d" />
      </div>
      <div className={styles.cardContainer}>
        {tickets.map((ticket) => (
          <KanbanCard key={ticket.id} {...ticket} />
        ))}
      </div>
    </div>
  );
};

export default KanbanGroup;
