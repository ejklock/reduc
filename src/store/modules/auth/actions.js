export function LoginRequest(email, password) {
  return {
    type: '@auth/LOGIN_REQUEST',
    payload: { email, password },
  };
}

export function RegisterRequest(username, email, password) {
  return {
    type: '@auth/REGISTER_REQUEST',
    payload: { username, email, password },
  };
}

export function loginSuccess(token, user) {
  return {
    type: '@auth/LOGIN_SUCCESS',
    payload: { token, user },
  };
}

export function loginFailure() {
  return {
    type: '@auth/LOGIN_FAILURE',
    payload: {},
  };
}
