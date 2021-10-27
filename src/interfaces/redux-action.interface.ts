export interface ReduxAction<T> {
  type: string;
  payload: boolean | T;
}
