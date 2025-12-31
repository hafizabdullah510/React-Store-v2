import { createSlice } from "@reduxjs/toolkit";
import type { FilterState, FilterPayload } from "../../utils/types";

type SetFiltersAction<T extends keyof FilterPayload["draft"]> = {
  payload: {
    name: T;
    value: FilterPayload["draft"][T];
  };
};

const DEFAULT_VALUES: FilterPayload["draft"] = {
  search: "",
  category: "all",
  company: "all",
  order: "a-z",
  amount: "100000",
  shipping: false,
};

const localStorageAppliedFilters = localStorage.getItem("appliedFilters");

const getDefaultFilters = (): FilterPayload["draft"] => {
  if (localStorageAppliedFilters) {
    return { ...DEFAULT_VALUES, ...JSON.parse(localStorageAppliedFilters) };
  }
  return { ...DEFAULT_VALUES };
};

console.log(getDefaultFilters());

const initialState: FilterState = {
  draft: getDefaultFilters(),
  applied: JSON.parse(localStorageAppliedFilters || "null"),
};

const getAppliedFilters = (
  draft: FilterPayload["draft"]
): Partial<FilterPayload["draft"]> => {
  return Object.fromEntries(
    Object.entries(draft).filter(
      ([key, value]) =>
        value !== DEFAULT_VALUES[key as keyof FilterPayload["draft"]]
    )
  );
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: <T extends keyof FilterState["draft"]>(
      state: FilterState,
      action: SetFiltersAction<T>
    ) => {
      const { name, value } = action.payload;
      state.draft[name] = value;
    },
    applyFilters: (state) => {
      const applied = getAppliedFilters(state.draft);
      state.applied = Object.keys(applied).length ? applied : null;
      localStorage.setItem("appliedFilters", JSON.stringify(state.applied));
    },
    resetFilters: (state) => {
      state.applied = null;
      state.draft = { ...DEFAULT_VALUES };
      localStorage.removeItem("appliedFilters");
    },
  },
});

export const { setFilters, applyFilters, resetFilters } = filterSlice.actions;

export default filterSlice.reducer;
