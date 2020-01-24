import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import vufind from '../../../services/vufind';
import history from '../../../services/history';

import { searchSuccess } from './actions';

export function* searchTerm({ payload }) {
  try {
    const { term, currentPage = 1, limit = 50 } = payload;
    const data = new FormData();
    data.append('limit', limit);
    data.append('lookfor', term);
    data.append('page', currentPage);
    const result = yield call(vufind.post, 'search', data);

    const { resultCount, records } = result.data;

    const lastPage = parseInt(resultCount / limit, 10) - 1;

    yield put(searchSuccess(term, resultCount, records, currentPage, lastPage));
    history.push('/search');
  } catch (error) {
    toast.error('Falha na busca', error);
  }
}

export default all([takeLatest('@search/SEARCH_REQUEST', searchTerm)]);
