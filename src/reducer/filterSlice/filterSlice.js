import { createSlice } from "@reduxjs/toolkit";

const initialFilterState = {
  grouping: localStorage.getItem("filterGrouping") || "status",
  ordering: localStorage.getItem("filterOrdering") || "priority",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initialFilterState,
  reducers: {
    setFilter: (state, action) => {
      const { grouping, ordering } = action.payload;
      state.grouping = grouping;
      state.ordering = ordering;

      // Update local storage
      localStorage.setItem("filterGrouping", grouping);
      localStorage.setItem("filterOrdering", ordering);
    },
    resetFilter: (state) => {
      state.grouping = "status";
      state.ordering = "priority";

      // Reset local storage
      localStorage.removeItem("filterGrouping");
      localStorage.removeItem("filterOrdering");
    },
  },
});

export const { setFilter, resetFilter } = filterSlice.actions;
export default filterSlice.reducer;
