import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import paginate from 'jw-paginate';
import vufind from '../../../services/vufind';

import { searchSuccess } from './actions';

export function* searchPage({ payload }) {
  try {
    const {
      term = ' ',
      filters,
      filters: { page },
      filters: { limit = 20 },
      filters: { type = 'AllFields', sort = 'relevance' },
      filters: { filter = [] },
    } = payload;

    const data = new FormData();

    data.append('lookfor', term);

    if (filter) {
      if (Array.isArray(filter)) {
        filter.forEach(e => {
          data.append('filter[]', `${e}`);
        });
      } else {
        data.append('filter[]', `${filter}`);
      }
    }
    data.append('page', page);
    data.append('type', type);
    data.append('sort', sort);
    data.append('limit', limit);

    const result = yield call(vufind.post, 'search', data);
    const { resultCount, records } = result.data;

    yield put(
      searchSuccess(
        term,
        filters,
        Object.assign(paginate(resultCount, page), {
          records,
        })
      )
    );
  } catch (error) {
    toast.error('Falha na busca', error);
  }
}

export default all([takeLatest('@search/SEARCH_PAGE_REQUEST', searchPage)]);
