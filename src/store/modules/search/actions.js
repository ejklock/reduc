export function searchRequest(payload) {
  return {
    type: '@search/SEARCH_REQUEST',
    payload: { payload },
  };
}

export function searchPageRequest(
  params,
  filters = {
    limit: 20,
    page: 1,
  }
) {
  return {
    type: '@search/SEARCH_PAGE_REQUEST',
    payload: { params, filters },
  };
}

export function searchSuccess(params, filters, pagination) {
  return {
    type: '@search/SEARCH_SUCCESS',
    payload: {
      params,
      filters,
      pagination,
    },
  };
}
