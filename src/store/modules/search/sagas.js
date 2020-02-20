import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import paginate from 'jw-paginate';
import vufind from '../../../services/vufind';

import { searchSuccess } from './actions';

export function* searchPage({ payload }) {
  try {
    const { params: lookfor = '', params, filters } = payload;

    const data = new FormData();

    if (params.bool) {
      data.append('bool0[]', params.bool);
    }

    if (params.lookfor) {
      if (params.lookfor && Array.isArray(params.lookfor)) {
        params.lookfor.forEach(e => {
          data.append('lookfor0[]', `${e}`);
        });
      } else {
        data.append('lookfor', params.lookfor);
      }
    }

    if (params.type) {
      if (Array.isArray(params.type)) {
        params.type.forEach(e => {
          data.append('type0[]', e);
        });
      } else {
        data.append('type0[]', params.type);
      }
    }

    if (params.filter) {
      if (Array.isArray(params.filter)) {
        params.filter.forEach(e => {
          data.append('filter[]', `${e}`);
        });
      } else {
        data.append('filter[]', `${params.filter}`);
      }
    }
    data.append('page', filters.page);
    data.append('limit', filters.limit);

    // data.append('sort', sort);

    const result = yield call(vufind.post, 'search', data);
    const { resultCount, records } = result.data;

    yield put(
      searchSuccess(
        lookfor,
        filters,
        Object.assign(paginate(resultCount, filters.page, filters.limit), {
          records,
        })
      )
    );
  } catch (error) {
    toast.error('Falha na busca', error);
  }
}

export default all([takeLatest('@search/SEARCH_PAGE_REQUEST', searchPage)]);
