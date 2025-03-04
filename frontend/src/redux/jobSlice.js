import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allJobs: [],
  singleJob: null,
  allAdminJobs: [],
  searchJobByText: "",
  allAppliedJobs: [],
  searchedQuery: "",
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setAllJobs: (state, action) => {
      state.allJobs = action.payload;
    },
    setSingleJob: (state, action) => {
      state.singleJob = action.payload;
    },
    setAllAdminJobs(state, action) {
      state.allAdminJobs = action.payload;
    },
    setSearchJobByText(state, action) {
      state.searchJobByText = action.payload;
    },
    setAllAppliedJobs(state, action) {
      state.allAppliedJobs = action.payload;
    },
    setSearchQuery(state, action) {
      state.searchedQuery = action.payload;
    },
  },
});

export const {
  setAllJobs,
  setSingleJob,
  setAllAdminJobs,
  setSearchJobByText,
  setAllAppliedJobs,
  setSearchQuery,
} = jobSlice.actions;

export default jobSlice.reducer;
