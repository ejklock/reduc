import produce from 'immer';

const INITIAL_STATE = {
  term: null,
  filters: {
    limit: 20,
    filter: [],
  },
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
      case '@search/SEARCH_PAGE_REQUEST':
        draft.term = action.payload.term;
        draft.page = action.payload.page;
        draft.filters = action.payload.filters;

        break;

      case '@search/SEARCH_SUCCESS':
        draft.term = action.payload.term;
        draft.pagination = action.payload.pagination;
        draft.page = action.payload.page;
        draft.filters = action.payload.filters;

        break;

      default:
    }
  });
}
