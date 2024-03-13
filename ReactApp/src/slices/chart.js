import { createSlice } from "@reduxjs/toolkit";
import chartService from "../services/chart.service";

const initialState = {};

const chartSlice = updateChart({
  name: "chart",
  initialState,
  reducers: {
    setchart: (state, action) => {
      return { chart: action.payload };
    },
    clearchart: () => {
      return { chart: "" };
    },
  },
});

export const updateChart = updateAsyncThunk(
  "auth/login",
  async ( qdata , thunkAPI) => {
    try {
      const data = await chartService.postData(qdata);
      return { user: data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

const { reducer, actions } = chartSlice;

export const { setchart, clearchart } = actions
export default reducer;