import React from "react";
import styles from "./KanbanCard.module.css";
import Tag from "../../ui/Tag/Tag";
import { CircleIcon } from "lucide-react";
import { useSelector } from "react-redux";
import Avatar from "../../ui/Avatar/Avatar";
import { PRIORITYMETA, STATUSMETA } from "../../../constants/constants";

const KanbanCard = ({
  icon,
  id = "",
  priority = "",
  status = "",
  tag = [],
  title = "",
  userId = "",
}) => {
  const grouping = useSelector((state) => state.filter.grouping);
  const users = useSelector((state) => state.tickets.data.users);
  const currentUser = users.find((user) => user.id === userId);
  function getStatusIcon() {
    return STATUSMETA.find((stat) => stat.group === status).icon;
  }

  function getPriorityIcon() {
    return PRIORITYMETA.find((stat) => stat.priority === priority)?.icon;
  }

  return (
    <div className={styles.kabnabCard}>
      <div className={styles.identity}>
        <p className={styles.id}>{id}</p>
        {grouping !== "userId" ? (
          <Avatar active={currentUser.available} name={currentUser.name} />
        ) : null}
      </div>
      <div className={styles.description}>
        {grouping !== "status" ? getStatusIcon() : null}
        <p className={styles.title}>{title}</p>
      </div>

      <div className={styles.meta}>
        {grouping !== "priority" ? <Tag>{getPriorityIcon()}</Tag> : null}
        {tag.map((tg) => (
          <Tag key={id + tg}>
            <CircleIcon strokeWidth="3px" className={styles.circleicon} />
            {tg}
          </Tag>
        ))}
      </div>
    </div>
  );
};

export default KanbanCard;
