import { createSlice } from "@reduxjs/toolkit";

const filtersContactSlice = createSlice({
  name: "contactFilters", // або навіть "filters", якщо тільки один був би
  initialState: "",
  reducers: {
    filtersContact: (state, action) => action.payload,
  },
});

export const { filtersContact } = filtersContactSlice.actions;
export default filtersContactSlice.reducer;
