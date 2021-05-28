export interface AppStateI {
  loading: boolean;
  sidebarOpen: boolean;
  user?: User;
}

export enum AppActionTypes {
  LOGIN = "app/login",
  SET_SIDEBAR = "app/set-sidebar",
  SET_LOADING = "app/set-loading",
}

const Acts = AppActionTypes;

export type User = {
  username: string;
};

export interface AppLogin {
  type: typeof Acts.LOGIN;
  payload: User;
}

export type SidebarActions = "TOGGLE" | "OPEN" | "CLOSED";
export interface AppSetSidebar {
  type: typeof Acts.SET_SIDEBAR;
  payload: SidebarActions;
}

export interface AppSetLoading {
  type: typeof Acts.SET_LOADING;
  payload: boolean;
}

export type AppActions = AppLogin | AppSetSidebar | AppSetLoading;
