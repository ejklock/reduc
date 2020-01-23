import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';
import { loginSuccess, loginFailure } from './actions';

export function* login({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });
    const { token, user } = response.data;
    yield put(loginSuccess(token, user));
    history.push('/dashboard');
  } catch (error) {
    toast.error('Falha na autenticação, verifique os dados informados');
    yield put(loginFailure());
  }
}

// export function* register({ payload }) {
//   try {
//     const { username, email, password } = payload;
//   } catch (error) {}
// }
export default all([takeLatest('@auth/LOGIN_REQUEST', login)]);
