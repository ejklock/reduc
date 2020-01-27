import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import vufind from '../../../services/vufind';
import history from '../../../services/history';

import { searchSuccess } from './actions';

function createFormData(formData, key, data) {
  if (data === Object(data) || Array.isArray(data)) {
    for (const i in data) {
      createFormData(formData, `${key}[${i}]`, data[i]);
    }
  } else {
    formData.append(key, data);
  }
}

function getLastPage(count, limit) {
  const lastPage = Math.ceil(count / limit);
  return lastPage;
}

export function* searchTerm({ payload }) {
  try {
    const {
      payload: { term = [] },
      payload: { type = [] },
      payload: { bool = [] },
      payload: { currentPage = 1 },
      limit = 20,
    } = payload;

    const data = new FormData();
    data.append('lookfor', term);
    data.append('type', type);
    data.append('bool', bool);

    data.append('limit', limit);

    data.append('page', currentPage);
    const result = yield call(vufind.post, 'search', data);

    const { resultCount, records } = result.data;

    yield put(
      searchSuccess(
        term,
        resultCount,
        records,
        currentPage,
        getLastPage(resultCount, limit)
      )
    );
    history.push('/search');
  } catch (error) {
    console.log(error);
    toast.error('Falha na busca', error);
  }
}

export default all([takeLatest('@search/SEARCH_REQUEST', searchTerm)]);
