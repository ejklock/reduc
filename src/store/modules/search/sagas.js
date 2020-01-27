import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import paginate from 'jw-paginate';
import vufind from '../../../services/vufind';
import history from '../../../services/history';

import { searchSuccess } from './actions';

export function* searchPageUsingUrlParams({ payload }) {
  try {
    const {
      term,
      filters,
      filters: { page },
      filters: { limit = 20 },
    } = payload;

    const data = new FormData();
    data.append('lookfor', term);
    data.append('page', page);
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
    history.push({
      pathname: '/search',
      search: `?lookfor=${term}`,
    });
  } catch (error) {
    toast.error('Falha na busca', error);
  }
}

export function* searchPage({ payload }) {
  try {
    const {
      term,
      filters,
      filters: { page },
      filters: { limit = 20 },
    } = payload;

    const data = new FormData();
    data.append('lookfor', term);
    data.append('page', page);
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
    history.push({
      pathname: '/search',
      search: `?lookfor=${term}`,
    });
  } catch (error) {
    toast.error('Falha na busca', error);
  }
}

export default all([takeLatest('@search/SEARCH_PAGE_REQUEST', searchPage)]);
