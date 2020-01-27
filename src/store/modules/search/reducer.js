import produce from 'immer';

const INITIAL_STATE = {
  payload: null,
  pagination: {
    count: null,
    currentPage: 1,
    lastPage: null,
    records: null,
  },
};
export default function search(state = INITIAL_STATE, action = {}) {
  return produce(state, draft => {
    switch (action.type) {
      case '@search/SEARCH_REQUEST':
        draft.payload = action.payload;

        break;

      case '@search/SEARCH_SUCCESS':
        draft.term = action.payload.term;
        draft.pagination = action.payload.pagination;

        break;

      default:
    }
  });
}
