import { AppActions, AppStateI, AppActionTypes } from "./types";

const Acts = AppActionTypes;

const initState: AppStateI = {
  loading: false,
  sidebarOpen: false,
};

export const appReducer = (
  state: AppStateI = initState,
  action: AppActions
): AppStateI => {
  switch (action.type) {
    case Acts.LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case Acts.SET_SIDEBAR:
      let sidebar = state.sidebarOpen;
      if (action.payload === "TOGGLE") sidebar = !sidebar;
      return {
        ...state,
        sidebarOpen: sidebar,
      };

    case Acts.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
