export const getReducerExampleState = store => store.reducerExample;

export const getReducerExampleStateOption2ById = (store, id) =>
  getReducerExampleState(store)
    ? { ...getReducerExampleState(store).stateOption2[id], id }
    : {};
