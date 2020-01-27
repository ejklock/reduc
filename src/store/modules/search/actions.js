export function searchRequest(payload) {
  return {
    type: '@search/SEARCH_REQUEST',
    payload: { payload },
  };
}

export function searchSuccess(
  term,
  resultCount,
  records,
  currentPage,
  lastPage
) {
  return {
    type: '@search/SEARCH_SUCCESS',
    payload: {
      term,
      pagination: {
        count: resultCount,
        currentPage,
        lastPage,
        records,
      },
    },
  };
}
