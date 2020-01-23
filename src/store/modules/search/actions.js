export function searchRequest(term) {
  return {
    type: '@search/SEARCH_REQUEST',
    payload: { term },
  };
}

export function searchSuccess(response) {
  return {
    type: '@auth/SEARCH_SUCCESS',
    payload: { response },
  };
}
