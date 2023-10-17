import axiosApiInstance from "../axios/axiosInstance";

export function kanbanBoardData() {
  return axiosApiInstance.get("/internal/frontend-assignment");
}
