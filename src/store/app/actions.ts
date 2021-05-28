import {
  AppActionTypes,
  AppLogin,
  AppSetLoading,
  AppSetSidebar,
  SidebarActions,
  User,
} from "./types";

export const setSidebar = (action: SidebarActions): AppSetSidebar => ({
  type: AppActionTypes.SET_SIDEBAR,
  payload: action,
});

export const setLoading = (loading: boolean): AppSetLoading => ({
  type: AppActionTypes.SET_LOADING,
  payload: loading,
});

export const setUser = (user: User): AppLogin => ({
  type: AppActionTypes.LOGIN,
  payload: user,
});
