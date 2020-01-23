import { ACTION_EXAMPLE } from './actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const actionExample = contentExample => ({
  type: ACTION_EXAMPLE,
  payload: { contentExample },
});
