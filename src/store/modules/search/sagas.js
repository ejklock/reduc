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
      filters: { type, bool, sort = 'relevance' },
      filters: { filter = [] },
    } = payload;

    const data = new FormData();

    if (bool) {
      data.append('bool0[]', bool);
    }

    if (term && Array.isArray(term)) {
      term.forEach(e => {
        data.append('lookfor0[]', `${e}`);
      });
    } else {
      data.append('lookfor', term);
    }

    if (type) {
      if (Array.isArray(type)) {
        type.forEach(e => {
          data.append('type0[]', e);
        });
      } else {
        data.append('type0[]', type);
      }
    }

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

export function* advancedSearch({ payload }) {}

export default all([takeLatest('@search/SEARCH_PAGE_REQUEST', searchPage)]);
