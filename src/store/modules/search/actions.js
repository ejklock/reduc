export function searchRequest(term, type, bool) {
  return {
    type: '@search/SEARCH_REQUEST',
    payload: { term, type, bool },
  };
}

export function searchSuccess(
  term,
  resultCount,
  records,
  currentPage,
  lastPage
) {
  console.log(term, resultCount, records, currentPage, lastPage);
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
