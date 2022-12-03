export interface IState {
  nickname: string;
  jwt: string,
  tasks: any[]
}

export const emptyState: IState = {
  nickname: "",
  jwt: "",
  tasks: []
};

export const Reducer = (state: IState, updatedProperties: Partial<IState>) => ({
  ...state,
  ...updatedProperties,
});
