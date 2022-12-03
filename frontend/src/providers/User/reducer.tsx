export interface IState {
  nickname: string;
  jwt: string
}

export const emptyState: IState = {
  nickname: "",
  jwt: ""
};

export const Reducer = (state: IState, updatedProperties: Partial<IState>) => ({
  ...state,
  ...updatedProperties,
});
