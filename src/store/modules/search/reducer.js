import produce from 'immer';

const INITIAL_STATE = {
  term: null,
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
        draft.term = action.payload.term;
        break;

      case '@search/SEARCH_SUCCESS':
        draft.term = action.payload.term;
        draft.pagination = action.payload.pagination;

        break;

      default:
    }
  });
}
