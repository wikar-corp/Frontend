export interface IState {
  nickname: string;
  jwt: string;
  tasks: any[];
  blocks: any[];
}

export const emptyState: IState = {
  nickname: "",
  blocks: [],
  jwt: "",
  tasks: [],
};

export const Reducer = (state: IState, updatedProperties: Partial<IState>) => ({
  ...state,
  ...updatedProperties,
});
