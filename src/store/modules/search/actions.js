export function searchRequest(term) {
  return {
    type: '@search/SEARCH_REQUEST',
    payload: { term },
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
