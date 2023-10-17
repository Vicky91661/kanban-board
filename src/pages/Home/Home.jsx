import React, { useEffect } from "react";
import DefaultLayout from "../../Layout/DefaultLayout/DefaultLayout";
import KanbanBoad from "../../components/KanbanBoad/KanbanBoad";
import { useDispatch } from "react-redux";
import { fetchTickets } from "../../reducer/ticketSlice/ticketSlice";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);
  return (
    <DefaultLayout>
      <KanbanBoad />
    </DefaultLayout>
  );
}
