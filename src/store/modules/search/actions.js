export function searchRequest(payload) {
  return {
    type: '@search/SEARCH_REQUEST',
    payload: { payload },
  };
}

export function searchPageRequest(
  term,
  filters = {
    limit: 20,
    page: 1,
  }
) {
  return {
    type: '@search/SEARCH_PAGE_REQUEST',
    payload: { term, filters },
  };
}

export function searchSuccess(term, filters, pagination) {
  return {
    type: '@search/SEARCH_SUCCESS',
    payload: {
      term,
      filters,
      pagination,
    },
  };
}
