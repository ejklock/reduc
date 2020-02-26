import { all } from 'redux-saga/effects';

import searchPage from './search/sagas';

export default function* rootSaga() {
  return yield all([searchPage]);
}
