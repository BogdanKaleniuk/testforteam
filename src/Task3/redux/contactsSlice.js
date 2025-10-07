import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import initialContacts from "../contacts.json";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      return res.data.map((user) => ({
        id: user.id,
        name: user.name,
        number: user.phone,
      }));
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
    // fetchInProgress: (state) => {
    //   state.isLoading = true;
    //   state.error = null;
    // },
    // fetchSuccess: (state, action) => {
    //   state.isLoading = false;
    //   state.items = action.payload;
    // },
    // fetchError: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  addContact,

  deleteContact,
  fetchInProgress,
  fetchSuccess,
  fetchError,
} = contactsSlice.actions;
export default contactsSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import initialContacts from "../contacts.json";

// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState: {
//     items: initialContacts,
//     isLoading: false,
//     error: null,
//   },
//   reducers: {
//     addContact: (state, action) => {
//       state.items.push(action.payload);
//     },
//     deleteContact: (state, action) => {
//       return state.filter((contact) => contact.id !== action.payload);
//     },
//     fetchInProgress: (state) => {
//       state.isLoading = true;
//       state.error = null;
//     },
//     fetchSuccess: (state, action) => {
//       state.isLoading = false;
//       state.items = action.payload;
//     },
//     fetchError: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const {
//   addContact,

//   deleteContact,
//   fetchInProgress,
//   fetchSuccess,
//   fetchError,
// } = contactsSlice.actions;
// export default contactsSlice.reducer;
