import React, { useCallback, useEffect, useState } from "react";
import styles from "./KanbanBoad.module.css";
import KanbanGroup from "./KanbanCategory/KanbanGroup";
import { useSelector } from "react-redux";
import { groupAndSortTickets } from "../../lib/util";
import { PRIORITYMETA, STATUSMETA } from "../../constants/constants";

const KanbanBoad = () => {
  const { grouping, ordering } = useSelector((state) => state.filter);
  const { data } = useSelector((state) => state.tickets);

  const [filteredData, setFilteredData] = useState([]);

  const filterData = useCallback(() => {
    if (!data.tickets) {
      return;
    }
    setFilteredData(groupAndSortTickets(data?.tickets, grouping, ordering));
  }, [data.tickets, grouping, ordering]);

  useEffect(() => {
    filterData();
  }, [filterData]);

  function getTicketsForStatus(filter) {
    return filteredData?.find((data) => data.group === filter)?.tickets;
  }

  function getTicketsForPriority(filter) {
    return filteredData?.find((data) => Number(data.group) === filter)?.tickets;
  }

  function getUserName(userId) {
    return data?.users.find((user) => user.id === userId)?.name;
  }

  return (
    <div className={styles.kanbanBoard}>
      {grouping === "status"
        ? STATUSMETA.map((meta, index) => (
            <KanbanGroup
              key={"kanbangroup" + index}
              group={meta.group}
              icon={meta.icon}
              tickets={getTicketsForStatus(meta.group)}
            />
          ))
        : null}
      {grouping === "priority"
        ? PRIORITYMETA.map((meta, index) => (
            <KanbanGroup
              key={"kanbangroup" + index}
              group={meta.group}
              icon={meta.icon}
              tickets={getTicketsForPriority(meta.priority)}
            />
          ))
        : null}
      {grouping === "userId"
        ? filteredData.map((meta, index) => (
            <KanbanGroup
              key={"kanbangroup" + index}
              group={getUserName(meta.group)}
              icon={meta.icon}
              tickets={meta.tickets}
              userId={meta.group}
            />
          ))
        : null}
    </div>
  );
};

export default KanbanBoad;
