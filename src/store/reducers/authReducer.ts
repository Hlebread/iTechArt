import { createReducer } from "deox";
import { userLoginAction, userLogoutAction } from "../actions/auth";

const defaultState = {
  auth: false,
};

export const authReducer = createReducer(defaultState, (handleAction) => [
  handleAction(userLoginAction, (state) => ({ ...state, auth: true })),
  handleAction(userLogoutAction, (state) => ({ ...state, auth: false })),
]);
