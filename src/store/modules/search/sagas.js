import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import vufind from '../../../services/vufind';

import { searchSuccess } from './actions';

export function* search({ payload }) {
  try {
    const { term } = payload;
    const result = yield call(vufind.post, 'search', {
      lookfor: term,
    });

    const response = result.data;

    yield put(searchSuccess(response));
  } catch (error) {
    toast.error('Falha na busca', error);
  }
}

export default all([takeLatest('@search/SEARCH_REQUEST', search)]);
