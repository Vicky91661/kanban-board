import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { kanbanBoardData } from "../../api/kabbanBoard";

// Define the initial state
const initialState = {
  data: {
    tickets: null,
    user: null,
  },
  error: null,
  loading: false,
};

export const fetchTickets = createAsyncThunk("kanban/fetchdata", async () => {
  try {
    const response = await kanbanBoardData();
    return response.data;
  } catch (error) {
    throw error;
  }
});

// Create a slice
const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    resetResult: (state) => {
      state.data = initialState.data;
      state.loading = initialState.loading;
      state.error = initialState.error;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = {
          ...action.payload,
        };
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
        state.data = null;
      });
  },
});

// Export the reducer
export const { resetResult } = ticketsSlice.actions;
export default ticketsSlice.reducer;
