import { IEmployeeModel } from "./Employee";

export interface IState {
  selectedItems: IEmployeeModel[],/* Map<string, any>, */
}

export interface IAction {
  type?: string;
  payload: any
}